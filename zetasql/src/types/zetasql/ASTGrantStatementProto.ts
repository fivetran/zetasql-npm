// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPrivilegesProto as _zetasql_ASTPrivilegesProto, ASTPrivilegesProto__Output as _zetasql_ASTPrivilegesProto__Output } from '../zetasql/ASTPrivilegesProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTGranteeListProto as _zetasql_ASTGranteeListProto, ASTGranteeListProto__Output as _zetasql_ASTGranteeListProto__Output } from '../zetasql/ASTGranteeListProto';

export interface ASTGrantStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'privileges'?: (_zetasql_ASTPrivilegesProto | null);
  'targetType'?: (_zetasql_ASTIdentifierProto | null);
  'targetPath'?: (_zetasql_ASTPathExpressionProto | null);
  'granteeList'?: (_zetasql_ASTGranteeListProto | null);
}

export interface ASTGrantStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'privileges': (_zetasql_ASTPrivilegesProto__Output | null);
  'targetType': (_zetasql_ASTIdentifierProto__Output | null);
  'targetPath': (_zetasql_ASTPathExpressionProto__Output | null);
  'granteeList': (_zetasql_ASTGranteeListProto__Output | null);
}
