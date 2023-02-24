// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { _zetasql_ASTHavingModifierEnums_ModifierKind, _zetasql_ASTHavingModifierEnums_ModifierKind__Output } from '../zetasql/ASTHavingModifierEnums';

export interface ASTHavingModifierProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'expr'?: (_zetasql_AnyASTExpressionProto | null);
  'modifierKind'?: (_zetasql_ASTHavingModifierEnums_ModifierKind);
}

export interface ASTHavingModifierProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'expr': (_zetasql_AnyASTExpressionProto__Output | null);
  'modifierKind': (_zetasql_ASTHavingModifierEnums_ModifierKind__Output);
}
