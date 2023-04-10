// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';

export interface ASTStructFieldProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'type'?: (_zetasql_AnyASTTypeProto | null);
}

export interface ASTStructFieldProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'type': (_zetasql_AnyASTTypeProto__Output | null);
}
