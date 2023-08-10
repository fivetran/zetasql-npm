// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTSimpleTypeProto as _zetasql_ASTSimpleTypeProto, ASTSimpleTypeProto__Output as _zetasql_ASTSimpleTypeProto__Output } from '../zetasql/ASTSimpleTypeProto';
import type { ASTArrayTypeProto as _zetasql_ASTArrayTypeProto, ASTArrayTypeProto__Output as _zetasql_ASTArrayTypeProto__Output } from '../zetasql/ASTArrayTypeProto';
import type { ASTStructTypeProto as _zetasql_ASTStructTypeProto, ASTStructTypeProto__Output as _zetasql_ASTStructTypeProto__Output } from '../zetasql/ASTStructTypeProto';
import type { ASTRangeTypeProto as _zetasql_ASTRangeTypeProto, ASTRangeTypeProto__Output as _zetasql_ASTRangeTypeProto__Output } from '../zetasql/ASTRangeTypeProto';
import type { ASTFunctionTypeProto as _zetasql_ASTFunctionTypeProto, ASTFunctionTypeProto__Output as _zetasql_ASTFunctionTypeProto__Output } from '../zetasql/ASTFunctionTypeProto';

export interface AnyASTTypeProto {
  'astSimpleTypeNode'?: (_zetasql_ASTSimpleTypeProto | null);
  'astArrayTypeNode'?: (_zetasql_ASTArrayTypeProto | null);
  'astStructTypeNode'?: (_zetasql_ASTStructTypeProto | null);
  'astRangeTypeNode'?: (_zetasql_ASTRangeTypeProto | null);
  'astFunctionTypeNode'?: (_zetasql_ASTFunctionTypeProto | null);
  'node'?: "astSimpleTypeNode"|"astArrayTypeNode"|"astStructTypeNode"|"astRangeTypeNode"|"astFunctionTypeNode";
}

export interface AnyASTTypeProto__Output {
  'astSimpleTypeNode'?: (_zetasql_ASTSimpleTypeProto__Output | null);
  'astArrayTypeNode'?: (_zetasql_ASTArrayTypeProto__Output | null);
  'astStructTypeNode'?: (_zetasql_ASTStructTypeProto__Output | null);
  'astRangeTypeNode'?: (_zetasql_ASTRangeTypeProto__Output | null);
  'astFunctionTypeNode'?: (_zetasql_ASTFunctionTypeProto__Output | null);
  'node': "astSimpleTypeNode"|"astArrayTypeNode"|"astStructTypeNode"|"astRangeTypeNode"|"astFunctionTypeNode";
}
