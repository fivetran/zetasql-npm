// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTAlterActionProto as _zetasql_ASTAlterActionProto, ASTAlterActionProto__Output as _zetasql_ASTAlterActionProto__Output } from '../zetasql/ASTAlterActionProto';
import type { ASTJSONLiteralProto as _zetasql_ASTJSONLiteralProto, ASTJSONLiteralProto__Output as _zetasql_ASTJSONLiteralProto__Output } from '../zetasql/ASTJSONLiteralProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';

export interface ASTSetAsActionProto {
  'parent'?: (_zetasql_ASTAlterActionProto | null);
  'jsonBody'?: (_zetasql_ASTJSONLiteralProto | null);
  'textBody'?: (_zetasql_ASTStringLiteralProto | null);
}

export interface ASTSetAsActionProto__Output {
  'parent': (_zetasql_ASTAlterActionProto__Output | null);
  'jsonBody': (_zetasql_ASTJSONLiteralProto__Output | null);
  'textBody': (_zetasql_ASTStringLiteralProto__Output | null);
}
