import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServiceClient as _helloPackage_HelloServiceClient, HelloServiceDefinition as _helloPackage_HelloServiceDefinition } from './helloPackage/HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  helloPackage: {
    HelloRequest: MessageTypeDefinition
    HelloResponse: MessageTypeDefinition
    HelloService: SubtypeConstructor<typeof grpc.Client, _helloPackage_HelloServiceClient> & { service: _helloPackage_HelloServiceDefinition }
  }
}

