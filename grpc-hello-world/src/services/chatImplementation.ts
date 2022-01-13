import { ChatHandlers } from '../../../grpc-contracts/src/chat-contract/chatPackage/Chat';

export default {
  Chat: (call) => {
    call.on("data", (request) => {
      const username = call.metadata.get('username')[0] as string;
      const message = request.message;
      console.log(username, message);

    });

    call.on("end", () => {
      const username = call.metadata.get('username')[0] as string;
      call.write({
        username: "Server",
        message: `End message ${username}`
      })

      console.log(`${username} ended the chat session`);

      call.end();
    });
  }
} as ChatHandlers