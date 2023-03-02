// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTInsertValuesRowProto as _zetasql_ASTInsertValuesRowProto, ASTInsertValuesRowProto__Output as _zetasql_ASTInsertValuesRowProto__Output } from '../zetasql/ASTInsertValuesRowProto';

export interface ASTInsertValuesRowListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'rows'?: (_zetasql_ASTInsertValuesRowProto)[];
}

export interface ASTInsertValuesRowListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'rows': (_zetasql_ASTInsertValuesRowProto__Output)[];
}
