// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTransformClauseProto as _zetasql_ASTTransformClauseProto, ASTTransformClauseProto__Output as _zetasql_ASTTransformClauseProto__Output } from '../zetasql/ASTTransformClauseProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';

export interface ASTCreateModelStatementProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'transformClause'?: (_zetasql_ASTTransformClauseProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
}

export interface ASTCreateModelStatementProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'transformClause': (_zetasql_ASTTransformClauseProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
}
