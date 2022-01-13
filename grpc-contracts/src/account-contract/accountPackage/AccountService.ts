// Original file: src/account-contract/account-contract.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Account as _accountPackage_Account, Account__Output as _accountPackage_Account__Output } from '../accountPackage/Account';
import type { LoginRequest as _accountPackage_LoginRequest, LoginRequest__Output as _accountPackage_LoginRequest__Output } from '../accountPackage/LoginRequest';
import type { LoginResponse as _accountPackage_LoginResponse, LoginResponse__Output as _accountPackage_LoginResponse__Output } from '../accountPackage/LoginResponse';

export interface AccountServiceClient extends grpc.Client {
  createAccount(argument: _accountPackage_Account, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, metadata: grpc.Metadata, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, metadata: grpc.Metadata, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  createAccount(argument: _accountPackage_Account, callback: grpc.requestCallback<_accountPackage_Account__Output>): grpc.ClientUnaryCall;
  
  login(argument: _accountPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _accountPackage_LoginRequest, callback: grpc.requestCallback<_accountPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AccountServiceHandlers extends grpc.UntypedServiceImplementation {
  createAccount: grpc.handleUnaryCall<_accountPackage_Account__Output, _accountPackage_Account>;
  
  login: grpc.handleUnaryCall<_accountPackage_LoginRequest__Output, _accountPackage_LoginResponse>;
  
}

export interface AccountServiceDefinition extends grpc.ServiceDefinition {
  createAccount: MethodDefinition<_accountPackage_Account, _accountPackage_Account, _accountPackage_Account__Output, _accountPackage_Account__Output>
  login: MethodDefinition<_accountPackage_LoginRequest, _accountPackage_LoginResponse, _accountPackage_LoginRequest__Output, _accountPackage_LoginResponse__Output>
}
