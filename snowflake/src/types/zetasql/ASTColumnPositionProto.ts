// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIdentifierProto as _zetasql_ASTIdentifierProto, ASTIdentifierProto__Output as _zetasql_ASTIdentifierProto__Output } from '../zetasql/ASTIdentifierProto';
import type { _zetasql_ASTColumnPositionEnums_RelativePositionType, _zetasql_ASTColumnPositionEnums_RelativePositionType__Output } from '../zetasql/ASTColumnPositionEnums';

export interface ASTColumnPositionProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'identifier'?: (_zetasql_ASTIdentifierProto | null);
  'type'?: (_zetasql_ASTColumnPositionEnums_RelativePositionType);
}

export interface ASTColumnPositionProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'identifier': (_zetasql_ASTIdentifierProto__Output | null);
  'type': (_zetasql_ASTColumnPositionEnums_RelativePositionType__Output);
}
