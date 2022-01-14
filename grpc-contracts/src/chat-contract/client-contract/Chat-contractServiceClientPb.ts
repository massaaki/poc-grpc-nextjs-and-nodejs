/**
 * @fileoverview gRPC-Web generated client stub for chatPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_chat$contract_chat$contract_pb from '../../src/chat-contract/chat-contract_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ChatServiceClient {
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

  methodInfochatInitiate = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/chatInitiate',
    grpcWeb.MethodType.UNARY,
    src_chat$contract_chat$contract_pb.InitiateRequest,
    src_chat$contract_chat$contract_pb.InitiateResponse,
    (request: src_chat$contract_chat$contract_pb.InitiateRequest) => {
      return request.serializeBinary();
    },
    src_chat$contract_chat$contract_pb.InitiateResponse.deserializeBinary
  );

  chatInitiate(
    request: src_chat$contract_chat$contract_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_chat$contract_chat$contract_pb.InitiateResponse>;

  chatInitiate(
    request: src_chat$contract_chat$contract_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_chat$contract_chat$contract_pb.InitiateResponse) => void): grpcWeb.ClientReadableStream<src_chat$contract_chat$contract_pb.InitiateResponse>;

  chatInitiate(
    request: src_chat$contract_chat$contract_pb.InitiateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_chat$contract_chat$contract_pb.InitiateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatPackage.ChatService/chatInitiate',
        request,
        metadata || {},
        this.methodInfochatInitiate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatPackage.ChatService/chatInitiate',
    request,
    metadata || {},
    this.methodInfochatInitiate);
  }

  methodInfosendMessage = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/sendMessage',
    grpcWeb.MethodType.UNARY,
    src_chat$contract_chat$contract_pb.MessageRequest,
    google_protobuf_empty_pb.Empty,
    (request: src_chat$contract_chat$contract_pb.MessageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendMessage(
    request: src_chat$contract_chat$contract_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: src_chat$contract_chat$contract_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: src_chat$contract_chat$contract_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatPackage.ChatService/sendMessage',
        request,
        metadata || {},
        this.methodInfosendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatPackage.ChatService/sendMessage',
    request,
    metadata || {},
    this.methodInfosendMessage);
  }

  methodInfouserStream = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/userStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_chat$contract_chat$contract_pb.StreamRequest,
    src_chat$contract_chat$contract_pb.UserStreamResponse,
    (request: src_chat$contract_chat$contract_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    src_chat$contract_chat$contract_pb.UserStreamResponse.deserializeBinary
  );

  userStream(
    request: src_chat$contract_chat$contract_pb.StreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatPackage.ChatService/userStream',
      request,
      metadata || {},
      this.methodInfouserStream);
  }

  methodInfochatStream = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/chatStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_chat$contract_chat$contract_pb.StreamRequest,
    src_chat$contract_chat$contract_pb.StreamMessage,
    (request: src_chat$contract_chat$contract_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    src_chat$contract_chat$contract_pb.StreamMessage.deserializeBinary
  );

  chatStream(
    request: src_chat$contract_chat$contract_pb.StreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatPackage.ChatService/chatStream',
      request,
      metadata || {},
      this.methodInfochatStream);
  }

}

