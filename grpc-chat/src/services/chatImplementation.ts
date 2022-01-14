import { ChatServiceHandlers } from '../contracts/chat/chatPackage/ChatService'

export default {
  chatInitiate: (call, callback) => {
    const sessionName = call.request.name || ''
    const avatar = call.request.avatarUrl || ''

    console.log('called chatInitiate');
    if (!sessionName || !avatar) return callback(new Error("Name and avatar are required."));

    callback(null, { id: Math.floor(Math.random() * 1000) });
  }
} as ChatServiceHandlers