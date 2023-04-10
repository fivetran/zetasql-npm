// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTCloneDataSourceProto as _zetasql_ASTCloneDataSourceProto, ASTCloneDataSourceProto__Output as _zetasql_ASTCloneDataSourceProto__Output } from '../zetasql/ASTCloneDataSourceProto';
import type { ASTCopyDataSourceProto as _zetasql_ASTCopyDataSourceProto, ASTCopyDataSourceProto__Output as _zetasql_ASTCopyDataSourceProto__Output } from '../zetasql/ASTCopyDataSourceProto';

export interface AnyASTTableDataSourceProto {
  'astCloneDataSourceNode'?: (_zetasql_ASTCloneDataSourceProto | null);
  'astCopyDataSourceNode'?: (_zetasql_ASTCopyDataSourceProto | null);
  'node'?: "astCloneDataSourceNode"|"astCopyDataSourceNode";
}

export interface AnyASTTableDataSourceProto__Output {
  'astCloneDataSourceNode'?: (_zetasql_ASTCloneDataSourceProto__Output | null);
  'astCopyDataSourceNode'?: (_zetasql_ASTCopyDataSourceProto__Output | null);
  'node': "astCloneDataSourceNode"|"astCopyDataSourceNode";
}
