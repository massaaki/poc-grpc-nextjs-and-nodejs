import * as grpc from '@grpc/grpc-js';

import { Status } from '../contracts/chat/chatPackage/Status';
import { User } from '../contracts/chat/chatPackage/User';
import { ChatServiceHandlers } from '../contracts/chat/chatPackage/ChatService';
import { addMessageToRoom, addUser, getUser, listMessagesInRoom, listUsers, updateUser } from '../utils/redis';
import { StreamMessage } from 'contracts/chat/chatPackage/StreamMessage';
import { StreamRequest__Output } from 'contracts/chat/chatPackage/StreamRequest';
import { UserStreamResponse } from 'contracts/chat/chatPackage/UserStreamResponse';

import { emitChatRoomUpdate, emitUserUpdate, listenChatRoomUpdate, listenUserUpdate } from '../utils/redis-pubsub';

export const messageStreamByUserId = new Map<number, grpc.ServerWritableStream<StreamRequest__Output, StreamMessage>>()
export const userStreamByUserId = new Map<number, grpc.ServerWritableStream<StreamRequest__Output, UserStreamResponse>>()

export default {
  chatInitiate: (call, callback) => {
    const sessionName = call.request.name || ''
    const avatar = call.request.avatarUrl || ''

    console.log('called chatInitiate');
    if (!sessionName || !avatar) return callback(new Error("Name and avatar are required."));

    listUsers((err, users) => {
      if (err) return callback(err)
      const dbUser = users.find(u =>
        u.name === sessionName
      );
      console.log(dbUser);
      if (dbUser === undefined) {
        const user: User = {
          id: Math.floor(Math.random() * 1000),
          status: String(Status.ONLINE),
          name: sessionName,
          avatarUrl: avatar
        }
        addUser(user, (err) => {
          if (err) return callback(err)
          emitUserUpdate(user)
          return callback(null, { id: user.id });
        })
      } else {
        console.log(dbUser);
        if (dbUser.status === String(Status.ONLINE)) {
          console.log("error");
          callback(new Error("User exists and is online"));
          return
        }

        dbUser.status = String(Status.ONLINE);
        updateUser(dbUser, (err) => {
          if (err) return callback(err)
          emitUserUpdate(dbUser)
          return callback(null, { id: dbUser.id });
        })
      }

    })
  },
  sendMessage: (call, callback) => {
    const { id = -1, message = '' } = call.request;

    if (!id || !message) return callback(new Error("Id not provided"))

    getUser(id, (err, user) => {
      if (err) return callback(err);
      const msg: StreamMessage = {
        userId: user.id!,
        message: message,
        userAvatar: user.avatarUrl!
      }

      addMessageToRoom(msg, (err) => {
        if (err) callback(err)

        emitChatRoomUpdate(msg);
        callback(null);
      });

    })
  },
  chatStream: (call) => {
    const { id = -1 } = call.request;
    console.log('chatStream, id:', id);
    if (!id) {
      return call.end()
    }

    console.log('chatStream, getUser');

    getUser(id, (err, user) => {
      if (err) return call.end();
      console.log('chatStream, listMessagesInRoom');
      listMessagesInRoom((err, msgs) => {
        if (err) return call.end();
        for (const msg of msgs) {
          call.write(msg);
        }
        console.log('chatStream, messageStreamByUserId');
        messageStreamByUserId.set(user.id!, call)
      })

      console.log('chatStream, cancelled');
      call.on("cancelled", () => {
        user.status = String(Status.OFFLINE);
        console.log('chatStream, updateUser');
        updateUser(user, err => {
          if (err) console.error(err);
          console.log('chatStream, messageStreamByUserId');
          messageStreamByUserId.delete(user.id!)
          emitUserUpdate(user)
        })
      })

    });
    console.log('chatStream, END');
  },
  userStream: (call) => {
    const { id = -1 } = call.request;
    if (!id) {
      return call.end()
    }

    getUser(id, (err, user) => {
      if (err) return call.end();
      listUsers((err, users) => {
        if (err) return call.end();

        call.write({ users: users });

        userStreamByUserId.set(user.id!, call)
      })

      call.on("cancelled", () => {
        userStreamByUserId.delete(user.id!)
        emitUserUpdate(user);
      })

    });
  },
} as ChatServiceHandlers