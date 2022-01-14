import { messageStreamByUserId, userStreamByUserId } from '../services/chatImplementation';
import { listUsers } from '../utils/redis';
import { listenChatRoomUpdate, listenUserUpdate } from '../utils/redis-pubsub';

export function setupPupSub() {
  listenUserUpdate(() => {

    listUsers((err, users) => {
      if (err) return console.log(err);
      for (const [, stream] of userStreamByUserId) {
        stream.write({ users })
      }
    })
  })

  listenChatRoomUpdate((msg, channel) => {
    for (const [, userCall] of messageStreamByUserId) {
      userCall.write(msg);
    }

  })
}