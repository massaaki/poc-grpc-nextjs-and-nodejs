import env from '../../../grpc-contracts/src/configs/env'
import { HelloRequest } from '../../../grpc-contracts/src/hello-contract/helloPackage/HelloRequest'
// import { HelloResponse } from '../../../grpc-contracts/src/hello-contract/helloPackage/HelloResponse'
import { HelloServiceClient } from '../../../grpc-contracts/src/hello-contract/hello-contract_grpc_web_pb'
import {} from '../../../grpc-contracts/src/hello-contract/hello-contract_pb'

export class GRpcClient {

  constructor() {
    const helloService = new HelloServiceClient(`0.0.0.0:${env.hello.port}`, null, {});
    const request: HelloRequest = {
      message: 'hello world'
    }
    helloService.sayHello({ message: "HELLO WORLD" }, {}, (err, response) => {
      if (err) console.log(err)
      console.log('response', response);
    })

  }

  async initialize() {
    // const helloService = new HelloServiceClient(`http://locahost:${env.hello.port}`, grcp.credentials.createInsecure(), {});
    // const request: HelloRequest = {
    //   message: 'hello world'
    // }
    // const response = await new Promise((resolve, reject) => {
    //   helloService.hello(request, {}, (err, response) => {
    //     if (err) {
    //       reject(err);
    //     }
    //     resolve(response);
    //   });
    // })

    // console.log(response);
  }

}


// npx protoc hello-contract/hello-contract.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR



//protoc -I=$DIR hello-contract.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR