// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTSimpleColumnSchemaProto as _zetasql_ASTSimpleColumnSchemaProto, ASTSimpleColumnSchemaProto__Output as _zetasql_ASTSimpleColumnSchemaProto__Output } from '../zetasql/ASTSimpleColumnSchemaProto';
import type { ASTStructColumnSchemaProto as _zetasql_ASTStructColumnSchemaProto, ASTStructColumnSchemaProto__Output as _zetasql_ASTStructColumnSchemaProto__Output } from '../zetasql/ASTStructColumnSchemaProto';
import type { ASTInferredTypeColumnSchemaProto as _zetasql_ASTInferredTypeColumnSchemaProto, ASTInferredTypeColumnSchemaProto__Output as _zetasql_ASTInferredTypeColumnSchemaProto__Output } from '../zetasql/ASTInferredTypeColumnSchemaProto';
import type { AnyASTElementTypeColumnSchemaProto as _zetasql_AnyASTElementTypeColumnSchemaProto, AnyASTElementTypeColumnSchemaProto__Output as _zetasql_AnyASTElementTypeColumnSchemaProto__Output } from '../zetasql/AnyASTElementTypeColumnSchemaProto';

export interface AnyASTColumnSchemaProto {
  'astSimpleColumnSchemaNode'?: (_zetasql_ASTSimpleColumnSchemaProto | null);
  'astStructColumnSchemaNode'?: (_zetasql_ASTStructColumnSchemaProto | null);
  'astInferredTypeColumnSchemaNode'?: (_zetasql_ASTInferredTypeColumnSchemaProto | null);
  'astElementTypeColumnSchemaNode'?: (_zetasql_AnyASTElementTypeColumnSchemaProto | null);
  'node'?: "astSimpleColumnSchemaNode"|"astStructColumnSchemaNode"|"astInferredTypeColumnSchemaNode"|"astElementTypeColumnSchemaNode";
}

export interface AnyASTColumnSchemaProto__Output {
  'astSimpleColumnSchemaNode'?: (_zetasql_ASTSimpleColumnSchemaProto__Output | null);
  'astStructColumnSchemaNode'?: (_zetasql_ASTStructColumnSchemaProto__Output | null);
  'astInferredTypeColumnSchemaNode'?: (_zetasql_ASTInferredTypeColumnSchemaProto__Output | null);
  'astElementTypeColumnSchemaNode'?: (_zetasql_AnyASTElementTypeColumnSchemaProto__Output | null);
  'node': "astSimpleColumnSchemaNode"|"astStructColumnSchemaNode"|"astInferredTypeColumnSchemaNode"|"astElementTypeColumnSchemaNode";
}
