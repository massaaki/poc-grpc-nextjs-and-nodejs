// Original file: src/chat-contract/chat-contract.proto

import type { User as _chatPackage_User, User__Output as _chatPackage_User__Output } from '../chatPackage/User';

export interface UserStreamResponse {
  'users'?: (_chatPackage_User)[];
}

export interface UserStreamResponse__Output {
  'users'?: (_chatPackage_User__Output)[];
}
