// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTSampleSizeProto as _zetasql_ASTSampleSizeProto, ASTSampleSizeProto__Output as _zetasql_ASTSampleSizeProto__Output } from '../zetasql/ASTSampleSizeProto';
import type { ASTSampleSuffixProto as _zetasql_ASTSampleSuffixProto, ASTSampleSuffixProto__Output as _zetasql_ASTSampleSuffixProto__Output } from '../zetasql/ASTSampleSuffixProto';

export interface ASTSampleClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'sampleMethod'?: (_zetasql_ASTIdentifierProto | null);
  'sampleSize'?: (_zetasql_ASTSampleSizeProto | null);
  'sampleSuffix'?: (_zetasql_ASTSampleSuffixProto | null);
}

export interface ASTSampleClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'sampleMethod': (_zetasql_ASTIdentifierProto__Output | null);
  'sampleSize': (_zetasql_ASTSampleSizeProto__Output | null);
  'sampleSuffix': (_zetasql_ASTSampleSuffixProto__Output | null);
}
