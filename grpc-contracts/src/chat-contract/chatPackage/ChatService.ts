// Original file: src/chat-contract/chat-contract.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { InitiateRequest as _chatPackage_InitiateRequest, InitiateRequest__Output as _chatPackage_InitiateRequest__Output } from '../chatPackage/InitiateRequest';
import type { InitiateResponse as _chatPackage_InitiateResponse, InitiateResponse__Output as _chatPackage_InitiateResponse__Output } from '../chatPackage/InitiateResponse';
import type { MessageRequest as _chatPackage_MessageRequest, MessageRequest__Output as _chatPackage_MessageRequest__Output } from '../chatPackage/MessageRequest';
import type { StreamMessage as _chatPackage_StreamMessage, StreamMessage__Output as _chatPackage_StreamMessage__Output } from '../chatPackage/StreamMessage';
import type { StreamRequest as _chatPackage_StreamRequest, StreamRequest__Output as _chatPackage_StreamRequest__Output } from '../chatPackage/StreamRequest';
import type { UserStreamResponse as _chatPackage_UserStreamResponse, UserStreamResponse__Output as _chatPackage_UserStreamResponse__Output } from '../chatPackage/UserStreamResponse';

export interface ChatServiceClient extends grpc.Client {
  chatInitiate(argument: _chatPackage_InitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_InitiateRequest, callback: grpc.requestCallback<_chatPackage_InitiateResponse__Output>): grpc.ClientUnaryCall;
  
  chatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  chatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  chatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  chatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  userStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  chatInitiate: grpc.handleUnaryCall<_chatPackage_InitiateRequest__Output, _chatPackage_InitiateResponse>;
  
  chatStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_StreamMessage>;
  
  sendMessage: grpc.handleUnaryCall<_chatPackage_MessageRequest__Output, _google_protobuf_Empty>;
  
  userStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  chatInitiate: MethodDefinition<_chatPackage_InitiateRequest, _chatPackage_InitiateResponse, _chatPackage_InitiateRequest__Output, _chatPackage_InitiateResponse__Output>
  chatStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_StreamMessage, _chatPackage_StreamRequest__Output, _chatPackage_StreamMessage__Output>
  sendMessage: MethodDefinition<_chatPackage_MessageRequest, _google_protobuf_Empty, _chatPackage_MessageRequest__Output, _google_protobuf_Empty__Output>
  userStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_UserStreamResponse, _chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse__Output>
}
