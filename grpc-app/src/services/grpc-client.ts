import env from '../../../grpc-contracts/src/configs/env'
import { InitiateRequest } from '../contracts/chat-contract/chat-contract_pb'
import { ChatServiceClient } from '../contracts/chat-contract/Chat-contractServiceClientPb'


export class GRpcClient {
  constructor() {

  }

  initiate() {
    const client = new ChatServiceClient(`http://localhost:8080`);
    const req = new InitiateRequest()
    req.setName('John Doe');
    req.setAvatarUrl('http://localhost/teste.png');

    client.chatInitiate(req, {}, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.toObject());
      }
    });
  }

}