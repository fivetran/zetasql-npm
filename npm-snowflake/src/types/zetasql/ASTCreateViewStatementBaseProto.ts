// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTCreateStatementProto as _zetasql_ASTCreateStatementProto, ASTCreateStatementProto__Output as _zetasql_ASTCreateStatementProto__Output } from '../zetasql/ASTCreateStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';
import type { ASTOptionsListProto as _zetasql_ASTOptionsListProto, ASTOptionsListProto__Output as _zetasql_ASTOptionsListProto__Output } from '../zetasql/ASTOptionsListProto';
import type { ASTQueryProto as _zetasql_ASTQueryProto, ASTQueryProto__Output as _zetasql_ASTQueryProto__Output } from '../zetasql/ASTQueryProto';
import type { _zetasql_ASTCreateStatementEnums_SqlSecurity, _zetasql_ASTCreateStatementEnums_SqlSecurity__Output } from '../zetasql/ASTCreateStatementEnums';

export interface ASTCreateViewStatementBaseProto {
  'parent'?: (_zetasql_ASTCreateStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
  'optionsList'?: (_zetasql_ASTOptionsListProto | null);
  'query'?: (_zetasql_ASTQueryProto | null);
  'sqlSecurity'?: (_zetasql_ASTCreateStatementEnums_SqlSecurity);
  'recursive'?: (boolean);
}

export interface ASTCreateViewStatementBaseProto__Output {
  'parent': (_zetasql_ASTCreateStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
  'optionsList': (_zetasql_ASTOptionsListProto__Output | null);
  'query': (_zetasql_ASTQueryProto__Output | null);
  'sqlSecurity': (_zetasql_ASTCreateStatementEnums_SqlSecurity__Output);
  'recursive': (boolean);
}
