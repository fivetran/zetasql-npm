// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTCollateProto as _zetasql_ASTCollateProto, ASTCollateProto__Output as _zetasql_ASTCollateProto__Output } from '../zetasql/ASTCollateProto';
import type { ASTNullOrderProto as _zetasql_ASTNullOrderProto, ASTNullOrderProto__Output as _zetasql_ASTNullOrderProto__Output } from '../zetasql/ASTNullOrderProto';
import type { _zetasql_ASTOrderingExpressionEnums_OrderingSpec, _zetasql_ASTOrderingExpressionEnums_OrderingSpec__Output } from '../zetasql/ASTOrderingExpressionEnums';

export interface ASTOrderingExpressionProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expression'?: (_zetasql_AnyASTExpressionProto | null);
  'collate'?: (_zetasql_ASTCollateProto | null);
  'nullOrder'?: (_zetasql_ASTNullOrderProto | null);
  'orderingSpec'?: (_zetasql_ASTOrderingExpressionEnums_OrderingSpec);
}

export interface ASTOrderingExpressionProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expression': (_zetasql_AnyASTExpressionProto__Output | null);
  'collate': (_zetasql_ASTCollateProto__Output | null);
  'nullOrder': (_zetasql_ASTNullOrderProto__Output | null);
  'orderingSpec': (_zetasql_ASTOrderingExpressionEnums_OrderingSpec__Output);
}
