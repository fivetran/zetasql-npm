// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTExceptionHandlerProto as _zetasql_ASTExceptionHandlerProto, ASTExceptionHandlerProto__Output as _zetasql_ASTExceptionHandlerProto__Output } from '../zetasql/ASTExceptionHandlerProto';

export interface ASTExceptionHandlerListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'exceptionHandlerList'?: (_zetasql_ASTExceptionHandlerProto)[];
}

export interface ASTExceptionHandlerListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'exceptionHandlerList': (_zetasql_ASTExceptionHandlerProto__Output)[];
}
