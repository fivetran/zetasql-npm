// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTSetOperationMetadataProto as _zetasql_ASTSetOperationMetadataProto, ASTSetOperationMetadataProto__Output as _zetasql_ASTSetOperationMetadataProto__Output } from '../zetasql/ASTSetOperationMetadataProto';

export interface ASTSetOperationMetadataListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'setOperationMetadataList'?: (_zetasql_ASTSetOperationMetadataProto)[];
}

export interface ASTSetOperationMetadataListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'setOperationMetadataList': (_zetasql_ASTSetOperationMetadataProto__Output)[];
}
