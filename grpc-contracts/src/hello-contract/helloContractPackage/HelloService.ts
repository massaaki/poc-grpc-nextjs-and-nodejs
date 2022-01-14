// Original file: src/hello-contract/hello-contract.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _helloContractPackage_HelloRequest, HelloRequest__Output as _helloContractPackage_HelloRequest__Output } from '../helloContractPackage/HelloRequest';
import type { HelloResponse as _helloContractPackage_HelloResponse, HelloResponse__Output as _helloContractPackage_HelloResponse__Output } from '../helloContractPackage/HelloResponse';

export interface HelloServiceClient extends grpc.Client {
  sayHello(argument: _helloContractPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _helloContractPackage_HelloRequest, callback: grpc.requestCallback<_helloContractPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<_helloContractPackage_HelloRequest__Output, _helloContractPackage_HelloResponse>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  sayHello: MethodDefinition<_helloContractPackage_HelloRequest, _helloContractPackage_HelloResponse, _helloContractPackage_HelloRequest__Output, _helloContractPackage_HelloResponse__Output>
}
