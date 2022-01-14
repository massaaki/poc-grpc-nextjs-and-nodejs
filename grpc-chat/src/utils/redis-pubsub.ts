import { StreamMessage } from "contracts/chat/chatPackage/StreamMessage";
import { User } from "contracts/chat/chatPackage/User";
import { nrp } from "./redis"

const REDIS_CHANNELS = {
  mainRoom: "MAIN_ROOM",
  userChange: "USER_CHAHNGE",
};

export type listenFnCB<T> = (data: T, channel: string) => void;

export const emitChatRoomUpdate = (msg: StreamMessage) => {
  nrp.emit(REDIS_CHANNELS.mainRoom, JSON.stringify(msg))
}

export const listenChatRoomUpdate = (fn: listenFnCB<StreamMessage>) => {
  nrp.on(REDIS_CHANNELS.mainRoom, (data, channel) => {
    const msg = JSON.parse(data) as StreamMessage

    fn(msg, channel)
  })
}

export const emitUserUpdate = (user: User) => {
  nrp.emit(REDIS_CHANNELS.userChange, JSON.stringify(user))
}

export const listenUserUpdate = (fn: listenFnCB<User>) => {
  nrp.on(REDIS_CHANNELS.userChange, (data, channel) => {
    const user = JSON.parse(data) as User

    fn(user, channel)
  })
}