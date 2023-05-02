// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTArrayColumnSchemaProto as _zetasql_ASTArrayColumnSchemaProto, ASTArrayColumnSchemaProto__Output as _zetasql_ASTArrayColumnSchemaProto__Output } from '../zetasql/ASTArrayColumnSchemaProto';
import type { ASTRangeColumnSchemaProto as _zetasql_ASTRangeColumnSchemaProto, ASTRangeColumnSchemaProto__Output as _zetasql_ASTRangeColumnSchemaProto__Output } from '../zetasql/ASTRangeColumnSchemaProto';

export interface AnyASTElementTypeColumnSchemaProto {
  'astArrayColumnSchemaNode'?: (_zetasql_ASTArrayColumnSchemaProto | null);
  'astRangeColumnSchemaNode'?: (_zetasql_ASTRangeColumnSchemaProto | null);
  'node'?: "astArrayColumnSchemaNode"|"astRangeColumnSchemaNode";
}

export interface AnyASTElementTypeColumnSchemaProto__Output {
  'astArrayColumnSchemaNode'?: (_zetasql_ASTArrayColumnSchemaProto__Output | null);
  'astRangeColumnSchemaNode'?: (_zetasql_ASTRangeColumnSchemaProto__Output | null);
  'node': "astArrayColumnSchemaNode"|"astRangeColumnSchemaNode";
}
