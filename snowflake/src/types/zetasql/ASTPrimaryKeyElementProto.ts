// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { _zetasql_ASTOrderingExpressionEnums_OrderingSpec, _zetasql_ASTOrderingExpressionEnums_OrderingSpec__Output } from '../zetasql/ASTOrderingExpressionEnums';
import type { ASTNullOrderProto as _zetasql_ASTNullOrderProto, ASTNullOrderProto__Output as _zetasql_ASTNullOrderProto__Output } from '../zetasql/ASTNullOrderProto';

export interface ASTPrimaryKeyElementProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'column'?: (_zetasql_ASTIdentifierProto | null);
  'orderingSpec'?: (_zetasql_ASTOrderingExpressionEnums_OrderingSpec);
  'nullOrder'?: (_zetasql_ASTNullOrderProto | null);
}

export interface ASTPrimaryKeyElementProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'column': (_zetasql_ASTIdentifierProto__Output | null);
  'orderingSpec': (_zetasql_ASTOrderingExpressionEnums_OrderingSpec__Output);
  'nullOrder': (_zetasql_ASTNullOrderProto__Output | null);
}
