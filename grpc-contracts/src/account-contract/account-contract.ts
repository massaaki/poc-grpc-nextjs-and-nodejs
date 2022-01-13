import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccountServiceClient as _accountPackage_AccountServiceClient, AccountServiceDefinition as _accountPackage_AccountServiceDefinition } from './accountPackage/AccountService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  accountPackage: {
    Account: MessageTypeDefinition
    AccountService: SubtypeConstructor<typeof grpc.Client, _accountPackage_AccountServiceClient> & { service: _accountPackage_AccountServiceDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
  }
}

