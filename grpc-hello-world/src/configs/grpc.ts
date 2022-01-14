import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import env from '../../../grpc-contracts/src/configs/env';
import { ProtoGrpcType as HelloType } from '../../../grpc-contracts/src/hello-contract/hello-contract'
import helloImplementation from '../services/helloImplementation';

export class GRcpServer {
  private helloPackage;

  constructor() {
    const contractPath = path.resolve(__dirname, "../../../grpc-contracts/src/hello-contract/hello-contract.proto");

    const packageDeffinition = protoLoader.loadSync(contractPath)
    const obj = (grpc.loadPackageDefinition(packageDeffinition) as unknown) as HelloType;
    this.helloPackage = obj.helloContractPackage;
  }

  private configGrcpServer(): grpc.Server {
    const server = new grpc.Server();

    server.addService(this.helloPackage.HelloService.service, helloImplementation);

    return server;
  }

  startServer() {
    const server = this.configGrcpServer();

    server.bindAsync(`0.0.0.0:${env.hello.port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
      if (error) {
        console.log("Error to start the service", error);
        return;
      }
      console.log(`Chat Service is running on port ${port}`);
      server.start();
    })
  }
}

