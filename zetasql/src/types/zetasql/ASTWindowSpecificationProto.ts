// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { ASTPartitionByProto as _zetasql_ASTPartitionByProto, ASTPartitionByProto__Output as _zetasql_ASTPartitionByProto__Output } from '../zetasql/ASTPartitionByProto';
import type { ASTOrderByProto as _zetasql_ASTOrderByProto, ASTOrderByProto__Output as _zetasql_ASTOrderByProto__Output } from '../zetasql/ASTOrderByProto';
import type { ASTWindowFrameProto as _zetasql_ASTWindowFrameProto, ASTWindowFrameProto__Output as _zetasql_ASTWindowFrameProto__Output } from '../zetasql/ASTWindowFrameProto';

export interface ASTWindowSpecificationProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'baseWindowName'?: (_zetasql_ASTIdentifierProto | null);
  'partitionBy'?: (_zetasql_ASTPartitionByProto | null);
  'orderBy'?: (_zetasql_ASTOrderByProto | null);
  'windowFrame'?: (_zetasql_ASTWindowFrameProto | null);
}

export interface ASTWindowSpecificationProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'baseWindowName': (_zetasql_ASTIdentifierProto__Output | null);
  'partitionBy': (_zetasql_ASTPartitionByProto__Output | null);
  'orderBy': (_zetasql_ASTOrderByProto__Output | null);
  'windowFrame': (_zetasql_ASTWindowFrameProto__Output | null);
}
