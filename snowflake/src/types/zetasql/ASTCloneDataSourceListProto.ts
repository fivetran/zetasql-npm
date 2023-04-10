// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTCloneDataSourceProto as _zetasql_ASTCloneDataSourceProto, ASTCloneDataSourceProto__Output as _zetasql_ASTCloneDataSourceProto__Output } from '../zetasql/ASTCloneDataSourceProto';

export interface ASTCloneDataSourceListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'dataSources'?: (_zetasql_ASTCloneDataSourceProto)[];
}

export interface ASTCloneDataSourceListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'dataSources': (_zetasql_ASTCloneDataSourceProto__Output)[];
}
