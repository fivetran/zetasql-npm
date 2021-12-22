// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';

export interface ASTIntervalExprProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'intervalValue'?: (_zetasql_AnyASTExpressionProto | null);
  'datePartName'?: (_zetasql_ASTIdentifierProto | null);
  'datePartNameTo'?: (_zetasql_ASTIdentifierProto | null);
}

export interface ASTIntervalExprProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'intervalValue': (_zetasql_AnyASTExpressionProto__Output | null);
  'datePartName': (_zetasql_ASTIdentifierProto__Output | null);
  'datePartNameTo': (_zetasql_ASTIdentifierProto__Output | null);
}
