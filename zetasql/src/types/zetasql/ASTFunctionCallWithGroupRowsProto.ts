// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTFunctionCallProto as _zetasql_ASTFunctionCallProto, ASTFunctionCallProto__Output as _zetasql_ASTFunctionCallProto__Output } from '../zetasql/ASTFunctionCallProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTFunctionCallWithGroupRowsProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'function'?: (_zetasql_ASTFunctionCallProto | null);
  'subquery'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTFunctionCallWithGroupRowsProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'function': (_zetasql_ASTFunctionCallProto__Output | null);
  'subquery': (_zetasql_ASTQueryProto__Output | null);
}
