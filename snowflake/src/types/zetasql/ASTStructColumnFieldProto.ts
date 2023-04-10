// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTColumnSchemaProto as _zetasql_AnyASTColumnSchemaProto, AnyASTColumnSchemaProto__Output as _zetasql_AnyASTColumnSchemaProto__Output } from '../zetasql/AnyASTColumnSchemaProto';

export interface ASTStructColumnFieldProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'schema'?: (_zetasql_AnyASTColumnSchemaProto | null);
}

export interface ASTStructColumnFieldProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'schema': (_zetasql_AnyASTColumnSchemaProto__Output | null);
}
