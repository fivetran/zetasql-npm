// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTTableElementListProto as _zetasql_ASTTableElementListProto, ASTTableElementListProto__Output as _zetasql_ASTTableElementListProto__Output } from '../zetasql/ASTTableElementListProto';

export interface ASTWithPartitionColumnsClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableElementList'?: (_zetasql_ASTTableElementListProto | null);
}

export interface ASTWithPartitionColumnsClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableElementList': (_zetasql_ASTTableElementListProto__Output | null);
}
