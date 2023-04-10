// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPivotValueProto as _zetasql_ASTPivotValueProto, ASTPivotValueProto__Output as _zetasql_ASTPivotValueProto__Output } from '../zetasql/ASTPivotValueProto';

export interface ASTPivotValueListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'values'?: (_zetasql_ASTPivotValueProto)[];
}

export interface ASTPivotValueListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'values': (_zetasql_ASTPivotValueProto__Output)[];
}
