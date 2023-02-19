// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTSimpleColumnSchemaProto as _zetasql_ASTSimpleColumnSchemaProto, ASTSimpleColumnSchemaProto__Output as _zetasql_ASTSimpleColumnSchemaProto__Output } from '../zetasql/ASTSimpleColumnSchemaProto';
import type { ASTArrayColumnSchemaProto as _zetasql_ASTArrayColumnSchemaProto, ASTArrayColumnSchemaProto__Output as _zetasql_ASTArrayColumnSchemaProto__Output } from '../zetasql/ASTArrayColumnSchemaProto';
import type { ASTStructColumnSchemaProto as _zetasql_ASTStructColumnSchemaProto, ASTStructColumnSchemaProto__Output as _zetasql_ASTStructColumnSchemaProto__Output } from '../zetasql/ASTStructColumnSchemaProto';
import type { ASTInferredTypeColumnSchemaProto as _zetasql_ASTInferredTypeColumnSchemaProto, ASTInferredTypeColumnSchemaProto__Output as _zetasql_ASTInferredTypeColumnSchemaProto__Output } from '../zetasql/ASTInferredTypeColumnSchemaProto';

export interface AnyASTColumnSchemaProto {
  'astSimpleColumnSchemaNode'?: (_zetasql_ASTSimpleColumnSchemaProto | null);
  'astArrayColumnSchemaNode'?: (_zetasql_ASTArrayColumnSchemaProto | null);
  'astStructColumnSchemaNode'?: (_zetasql_ASTStructColumnSchemaProto | null);
  'astInferredTypeColumnSchemaNode'?: (_zetasql_ASTInferredTypeColumnSchemaProto | null);
  'node'?: "astSimpleColumnSchemaNode"|"astArrayColumnSchemaNode"|"astStructColumnSchemaNode"|"astInferredTypeColumnSchemaNode";
}

export interface AnyASTColumnSchemaProto__Output {
  'astSimpleColumnSchemaNode'?: (_zetasql_ASTSimpleColumnSchemaProto__Output | null);
  'astArrayColumnSchemaNode'?: (_zetasql_ASTArrayColumnSchemaProto__Output | null);
  'astStructColumnSchemaNode'?: (_zetasql_ASTStructColumnSchemaProto__Output | null);
  'astInferredTypeColumnSchemaNode'?: (_zetasql_ASTInferredTypeColumnSchemaProto__Output | null);
  'node': "astSimpleColumnSchemaNode"|"astArrayColumnSchemaNode"|"astStructColumnSchemaNode"|"astInferredTypeColumnSchemaNode";
}
