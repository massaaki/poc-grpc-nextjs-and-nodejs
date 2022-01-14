import { HelloServiceHandlers } from '../../../grpc-contracts/src/hello-contract/helloContractPackage/HelloService';

export default {
  sayHello: (call, callback) => {
    console.log('called sayHello');
    callback(null, { message: call.request.message });
  }
} as HelloServiceHandlers;