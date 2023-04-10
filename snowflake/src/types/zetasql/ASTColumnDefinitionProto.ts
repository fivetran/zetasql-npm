// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTTableElementProto as _zetasql_ASTTableElementProto, ASTTableElementProto__Output as _zetasql_ASTTableElementProto__Output } from '../zetasql/ASTTableElementProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { AnyASTColumnSchemaProto as _zetasql_AnyASTColumnSchemaProto, AnyASTColumnSchemaProto__Output as _zetasql_AnyASTColumnSchemaProto__Output } from '../zetasql/AnyASTColumnSchemaProto';

export interface ASTColumnDefinitionProto {
  'parent'?: (_zetasql_ASTTableElementProto | null);
  'name'?: (_zetasql_ASTIdentifierProto | null);
  'schema'?: (_zetasql_AnyASTColumnSchemaProto | null);
}

export interface ASTColumnDefinitionProto__Output {
  'parent': (_zetasql_ASTTableElementProto__Output | null);
  'name': (_zetasql_ASTIdentifierProto__Output | null);
  'schema': (_zetasql_AnyASTColumnSchemaProto__Output | null);
}
