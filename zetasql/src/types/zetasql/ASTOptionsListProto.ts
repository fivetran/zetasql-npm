// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTOptionsEntryProto as _zetasql_ASTOptionsEntryProto, ASTOptionsEntryProto__Output as _zetasql_ASTOptionsEntryProto__Output } from '../zetasql/ASTOptionsEntryProto';

export interface ASTOptionsListProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'optionsEntries'?: (_zetasql_ASTOptionsEntryProto)[];
}

export interface ASTOptionsListProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'optionsEntries': (_zetasql_ASTOptionsEntryProto__Output)[];
}
