// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTStringLiteralProto as _zetasql_ASTStringLiteralProto, ASTStringLiteralProto__Output as _zetasql_ASTStringLiteralProto__Output } from '../zetasql/ASTStringLiteralProto';
import type { ASTIntLiteralProto as _zetasql_ASTIntLiteralProto, ASTIntLiteralProto__Output as _zetasql_ASTIntLiteralProto__Output } from '../zetasql/ASTIntLiteralProto';

export interface ASTUnpivotInItemLabelProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'stringLabel'?: (_zetasql_ASTStringLiteralProto | null);
  'intLabel'?: (_zetasql_ASTIntLiteralProto | null);
}

export interface ASTUnpivotInItemLabelProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'stringLabel': (_zetasql_ASTStringLiteralProto__Output | null);
  'intLabel': (_zetasql_ASTIntLiteralProto__Output | null);
}
