// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTWithWeightProto as _zetasql_ASTWithWeightProto, ASTWithWeightProto__Output as _zetasql_ASTWithWeightProto__Output } from '../zetasql/ASTWithWeightProto';
import type { ASTRepeatableClauseProto as _zetasql_ASTRepeatableClauseProto, ASTRepeatableClauseProto__Output as _zetasql_ASTRepeatableClauseProto__Output } from '../zetasql/ASTRepeatableClauseProto';

export interface ASTSampleSuffixProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'weight'?: (_zetasql_ASTWithWeightProto | null);
  'repeat'?: (_zetasql_ASTRepeatableClauseProto | null);
}

export interface ASTSampleSuffixProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'weight': (_zetasql_ASTWithWeightProto__Output | null);
  'repeat': (_zetasql_ASTRepeatableClauseProto__Output | null);
}
