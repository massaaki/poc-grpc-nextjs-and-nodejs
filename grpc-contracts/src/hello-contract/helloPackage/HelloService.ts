// Original file: src/hello-contract/hello-contract.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _helloPackage_HelloRequest, HelloRequest__Output as _helloPackage_HelloRequest__Output } from '../helloPackage/HelloRequest';
import type { HelloResponse as _helloPackage_HelloResponse, HelloResponse__Output as _helloPackage_HelloResponse__Output } from '../helloPackage/HelloResponse';

export interface HelloServiceClient extends grpc.Client {
  Hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  Hello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _helloPackage_HelloRequest, callback: grpc.requestCallback<_helloPackage_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  Hello: grpc.handleUnaryCall<_helloPackage_HelloRequest__Output, _helloPackage_HelloResponse>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  Hello: MethodDefinition<_helloPackage_HelloRequest, _helloPackage_HelloResponse, _helloPackage_HelloRequest__Output, _helloPackage_HelloResponse__Output>
}
