
import { promisify } from 'util';
import { InitiateRequest, Status, StreamMessage, StreamRequest, User } from '../contracts/chat-contract/chat-contract_pb'
import { ChatServiceClient } from '../contracts/chat-contract/Chat-contractServiceClientPb'



export class GRpcClient {
  private client: ChatServiceClient;

  constructor() {

  }

  getClient(): ChatServiceClient {
    return this.client;
  }

  async initiate(name: string, avatarUrl: string): Promise<User.AsObject> {
    this.client = new ChatServiceClient(`http://localhost:8080`);
    const req = new InitiateRequest()
    req.setName(name);
    req.setAvatarUrl(avatarUrl);

    const response = await this.client.chatInitiate(req, {});
    const { id } = response.toObject();

    return {
      id,
      name,
      avatarUrl,
      status: String(Status.ONLINE)
    }
  }

  // chatStream(req: StreamRequest): StreamMessage.AsObject[] {
  //   const stream = this.client.chatStream(req, {});
  //   const msgs: StreamMessage.AsObject[] = [];
  //   stream.on("data", (chunk, err) => {
  //     const msg = (chunk as StreamMessage).toObject();
  //     msgs.push(msg);
  //   })

  //   return msgs;

  // }

}