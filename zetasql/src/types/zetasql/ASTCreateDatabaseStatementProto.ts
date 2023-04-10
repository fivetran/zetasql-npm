// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';

export interface ASTCreateDatabaseStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
}

export interface ASTCreateDatabaseStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
}
