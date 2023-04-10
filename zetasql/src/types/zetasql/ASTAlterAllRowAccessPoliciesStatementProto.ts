// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { AnyASTAlterActionProto as _zetasql_AnyASTAlterActionProto, AnyASTAlterActionProto__Output as _zetasql_AnyASTAlterActionProto__Output } from '../zetasql/AnyASTAlterActionProto';

export interface ASTAlterAllRowAccessPoliciesStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'tableNamePath'?: (_zetasql_ASTPathExpressionProto | null);
  'alterAction'?: (_zetasql_AnyASTAlterActionProto | null);
}

export interface ASTAlterAllRowAccessPoliciesStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'tableNamePath': (_zetasql_ASTPathExpressionProto__Output | null);
  'alterAction': (_zetasql_AnyASTAlterActionProto__Output | null);
}
