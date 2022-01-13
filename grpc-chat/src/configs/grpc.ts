import * as grpc from '@grpc/grpc-js';

import env from './env';

export class GRcpServer {
  private configGrcpServer(): grpc.Server {
    const server = new grpc.Server();

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

