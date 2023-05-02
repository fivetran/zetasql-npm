// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTSetOperationTypeProto as _zetasql_ASTSetOperationTypeProto, ASTSetOperationTypeProto__Output as _zetasql_ASTSetOperationTypeProto__Output } from '../zetasql/ASTSetOperationTypeProto';
import type { ASTSetOperationAllOrDistinctProto as _zetasql_ASTSetOperationAllOrDistinctProto, ASTSetOperationAllOrDistinctProto__Output as _zetasql_ASTSetOperationAllOrDistinctProto__Output } from '../zetasql/ASTSetOperationAllOrDistinctProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTSetOperationColumnMatchModeProto as _zetasql_ASTSetOperationColumnMatchModeProto, ASTSetOperationColumnMatchModeProto__Output as _zetasql_ASTSetOperationColumnMatchModeProto__Output } from '../zetasql/ASTSetOperationColumnMatchModeProto';
import type { ASTSetOperationColumnPropagationModeProto as _zetasql_ASTSetOperationColumnPropagationModeProto, ASTSetOperationColumnPropagationModeProto__Output as _zetasql_ASTSetOperationColumnPropagationModeProto__Output } from '../zetasql/ASTSetOperationColumnPropagationModeProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';

export interface ASTSetOperationMetadataProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'opType'?: (_zetasql_ASTSetOperationTypeProto | null);
  'allOrDistinct'?: (_zetasql_ASTSetOperationAllOrDistinctProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'columnMatchMode'?: (_zetasql_ASTSetOperationColumnMatchModeProto | null);
  'columnPropagationMode'?: (_zetasql_ASTSetOperationColumnPropagationModeProto | null);
  'correspondingByColumnList'?: (_zetasql_ASTColumnListProto | null);
}

export interface ASTSetOperationMetadataProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'opType': (_zetasql_ASTSetOperationTypeProto__Output | null);
  'allOrDistinct': (_zetasql_ASTSetOperationAllOrDistinctProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'columnMatchMode': (_zetasql_ASTSetOperationColumnMatchModeProto__Output | null);
  'columnPropagationMode': (_zetasql_ASTSetOperationColumnPropagationModeProto__Output | null);
  'correspondingByColumnList': (_zetasql_ASTColumnListProto__Output | null);
}
