// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTQueryExpressionProto as _zetasql_ASTQueryExpressionProto, ASTQueryExpressionProto__Output as _zetasql_ASTQueryExpressionProto__Output } from '../zetasql/ASTQueryExpressionProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { AnyASTQueryExpressionProto as _zetasql_AnyASTQueryExpressionProto, AnyASTQueryExpressionProto__Output as _zetasql_AnyASTQueryExpressionProto__Output } from '../zetasql/AnyASTQueryExpressionProto';
import type { _zetasql_ASTSetOperationEnums_OperationType, _zetasql_ASTSetOperationEnums_OperationType__Output } from '../zetasql/ASTSetOperationEnums';

export interface ASTSetOperationProto {
  'parent'?: (_zetasql_ASTQueryExpressionProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'inputs'?: (_zetasql_AnyASTQueryExpressionProto)[];
  'opType'?: (_zetasql_ASTSetOperationEnums_OperationType);
  'distinct'?: (boolean);
}

export interface ASTSetOperationProto__Output {
  'parent': (_zetasql_ASTQueryExpressionProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'inputs': (_zetasql_AnyASTQueryExpressionProto__Output)[];
  'opType': (_zetasql_ASTSetOperationEnums_OperationType__Output);
  'distinct': (boolean);
}
