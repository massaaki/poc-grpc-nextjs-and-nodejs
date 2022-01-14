import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServiceClient as _helloContractPackage_HelloServiceClient, HelloServiceDefinition as _helloContractPackage_HelloServiceDefinition } from './helloContractPackage/HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  helloContractPackage: {
    HelloRequest: MessageTypeDefinition
    HelloResponse: MessageTypeDefinition
    HelloService: SubtypeConstructor<typeof grpc.Client, _helloContractPackage_HelloServiceClient> & { service: _helloContractPackage_HelloServiceDefinition }
  }
}

