// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTRangeTypeProto as _zetasql_ASTRangeTypeProto, ASTRangeTypeProto__Output as _zetasql_ASTRangeTypeProto__Output } from '../zetasql/ASTRangeTypeProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTRangeLiteralProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'type'?: (_zetasql_ASTRangeTypeProto | null);
  'rangeValue'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTRangeLiteralProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'type': (_zetasql_ASTRangeTypeProto__Output | null);
  'rangeValue': (_zetasql_ASTStringLiteralProto__Output | null);
}
