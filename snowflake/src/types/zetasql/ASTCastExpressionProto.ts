// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { AnyASTTypeProto as _zetasql_AnyASTTypeProto, AnyASTTypeProto__Output as _zetasql_AnyASTTypeProto__Output } from '../zetasql/AnyASTTypeProto';
import type { ASTFormatClauseProto as _zetasql_ASTFormatClauseProto, ASTFormatClauseProto__Output as _zetasql_ASTFormatClauseProto__Output } from '../zetasql/ASTFormatClauseProto';

export interface ASTCastExpressionProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'type'?: (_zetasql_AnyASTTypeProto | null);
  'format'?: (_zetasql_ASTFormatClauseProto | null);
  'isTryCast'?: (boolean);
}

export interface ASTCastExpressionProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'type': (_zetasql_AnyASTTypeProto__Output | null);
  'format': (_zetasql_ASTFormatClauseProto__Output | null);
  'isTryCast': (boolean);
}
