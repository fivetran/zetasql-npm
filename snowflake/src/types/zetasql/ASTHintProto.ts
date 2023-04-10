// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTIntLiteralProto as _zetasql_ASTIntLiteralProto, ASTIntLiteralProto__Output as _zetasql_ASTIntLiteralProto__Output } from '../zetasql/ASTIntLiteralProto';
import type { ASTHintEntryProto as _zetasql_ASTHintEntryProto, ASTHintEntryProto__Output as _zetasql_ASTHintEntryProto__Output } from '../zetasql/ASTHintEntryProto';

export interface ASTHintProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'numShardsHint'?: (_zetasql_ASTIntLiteralProto | null);
  'hintEntries'?: (_zetasql_ASTHintEntryProto)[];
}

export interface ASTHintProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'numShardsHint': (_zetasql_ASTIntLiteralProto__Output | null);
  'hintEntries': (_zetasql_ASTHintEntryProto__Output)[];
}
