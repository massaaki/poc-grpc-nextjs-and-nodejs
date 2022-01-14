import redis from 'redis'
import NRP from 'node-redis-pubsub';

import { StreamMessage } from 'contracts/chat/chatPackage/StreamMessage';
import { User } from 'contracts/chat/chatPackage/User';

type errCB = (err: Error | null) => void;
type replyCB<T> = (err: Error | null, reply: T) => void;

const client = redis.createClient();

client.on("error", (error) => console.log("error", error));
client.on("connect", () => console.log("redis connected"));


const REDIST_KEYS = {
  broadcastRoom: "room:0:messages",
  users: "users",
};



export const addUser = (user: User, fn: errCB) => {
  client.rpush(REDIST_KEYS.users, JSON.stringify(user), fn);
};

export const listUsers = (fn: replyCB<User[]>) => {
  client.lrange(REDIST_KEYS.users, 0, -1, (err, reply) => {
    if (err) return fn(err, []);
    const users: Array<User> = [];
    for (const r of reply) {
      users.push(JSON.parse(r));
    }
    fn(null, users);
  });
};

export const updateUser = (user: User, fn: errCB) => {
  listUsers((err, users) => {
    if (err) return fn(err)
    const i = users.findIndex(u => u.id === user.id);
    if (i === -1) return new Error("user not found")
    client.lset(REDIST_KEYS.users, i, JSON.stringify(user), fn);
  })
}



export const getUser = (id: number, fn: replyCB<User>) => {
  listUsers((err, users) => {
    if (err) return fn(err, {});
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return fn(new Error("user not found"), {})
    return fn(null, users[idx])
  })
}

export const addMessageToRoom = (msg: StreamMessage, fn: replyCB<number>) => {
  client.rpush(REDIST_KEYS.broadcastRoom, JSON.stringify(msg), fn)
}

export const listMessagesInRoom = (fn: replyCB<StreamMessage[]>) => {
  client.lrange(REDIST_KEYS.broadcastRoom, 0, -1, (err, rows) => {
    if (err) return fn(err, []);

    const msgs: StreamMessage[] = []
    for (const row of rows) {
      const msg = JSON.parse(row) as StreamMessage;
      msgs.push(msg);
    }
    return fn(null, msgs);

  })
}


export const nrp = NRP({
  emitter: redis.createClient(),
  receiver: redis.createClient(),
});