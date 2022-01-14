import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import env from '../../../grpc-contracts/src/configs/env';
import { ProtoGrpcType as ChatType } from '../contracts/chat/chat-contract'
import chatImplementation from '../services/chatImplementation';

export class GRcpServer {
  private chatPackage;

  constructor() {
    const contractPath = path.resolve(__dirname, '..', 'contracts', 'chat', 'chat-contract.proto');

    const packageDeffinition = protoLoader.loadSync(contractPath)
    const obj = (grpc.loadPackageDefinition(packageDeffinition) as unknown) as ChatType;
    this.chatPackage = obj.chatPackage;
  }

  private configGrcpServer(): grpc.Server {
    const server = new grpc.Server();

    server.addService(this.chatPackage.ChatService.service, chatImplementation);

    return server;
  }

  startServer() {
    const server = this.configGrcpServer();

    server.bindAsync(`0.0.0.0:${env.chat.port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
      if (error) {
        console.log("Error to start the service", error);
        return;
      }
      console.log(`Chat Service is running on port ${port}`);
      server.start();
    })
  }
}

