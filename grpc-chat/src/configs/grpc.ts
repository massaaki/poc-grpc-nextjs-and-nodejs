import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType as ChatType } from '../../../grpc-contracts/src/chat-contract/chat-contract'
import env from './env';
import { ChatRequest } from '../../../grpc-contracts/src/chat-contract/chatPackage/ChatRequest';
import { ChatResponse } from '../../../grpc-contracts/src/chat-contract/chatPackage/ChatResponse';
import chatImplementation from '../services/chatImplementation';


export class GRcpServer {
  private chatPackage;

  constructor() {
    const contractPath = path.resolve(__dirname, '..', '..', '..', 'grpc-contracts', 'src', 'chat-contract', 'chat-contract.proto');

    const packageDeffinition = protoLoader.loadSync(contractPath)
    const obj = (grpc.loadPackageDefinition(packageDeffinition) as unknown) as ChatType;
    this.chatPackage = obj.chatPackage;
  }

  private configGrcpServer(): grpc.Server {
    const server = new grpc.Server();

    server.addService(this.chatPackage.Chat.service, chatImplementation);

    return server;
  }

  startServer() {
    const server = this.configGrcpServer();

    server.bindAsync(`0.0.0.0:${env.grcp.port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
      if (error) {
        console.log("Error to start the service", error);
        return;
      }
      console.log(`Chat Service is running on port ${port}`);
      server.start();
    })
  }
}

