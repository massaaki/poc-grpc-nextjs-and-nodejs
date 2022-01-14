/**
 * @fileoverview gRPC-Web generated client stub for helloContractPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as hello$contract_pb from './hello-contract_pb';


export class HelloServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfosayHello = new grpcWeb.MethodDescriptor(
    '/helloContractPackage.HelloService/sayHello',
    grpcWeb.MethodType.UNARY,
    hello$contract_pb.HelloRequest,
    hello$contract_pb.HelloResponse,
    (request: hello$contract_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    hello$contract_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: hello$contract_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<hello$contract_pb.HelloResponse>;

  sayHello(
    request: hello$contract_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: hello$contract_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<hello$contract_pb.HelloResponse>;

  sayHello(
    request: hello$contract_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: hello$contract_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/helloContractPackage.HelloService/sayHello',
        request,
        metadata || {},
        this.methodInfosayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/helloContractPackage.HelloService/sayHello',
    request,
    metadata || {},
    this.methodInfosayHello);
  }

}

