// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTExpressionProto as _zetasql_ASTExpressionProto, ASTExpressionProto__Output as _zetasql_ASTExpressionProto__Output } from '../zetasql/ASTExpressionProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { AnyASTExpressionProto as _zetasql_AnyASTExpressionProto, AnyASTExpressionProto__Output as _zetasql_AnyASTExpressionProto__Output } from '../zetasql/AnyASTExpressionProto';
import type { ASTHavingModifierProto as _zetasql_ASTHavingModifierProto, ASTHavingModifierProto__Output as _zetasql_ASTHavingModifierProto__Output } from '../zetasql/ASTHavingModifierProto';
import type { ASTClampedBetweenModifierProto as _zetasql_ASTClampedBetweenModifierProto, ASTClampedBetweenModifierProto__Output as _zetasql_ASTClampedBetweenModifierProto__Output } from '../zetasql/ASTClampedBetweenModifierProto';
import type { ASTOrderByProto as _zetasql_ASTOrderByProto, ASTOrderByProto__Output as _zetasql_ASTOrderByProto__Output } from '../zetasql/ASTOrderByProto';
import type { ASTLimitOffsetProto as _zetasql_ASTLimitOffsetProto, ASTLimitOffsetProto__Output as _zetasql_ASTLimitOffsetProto__Output } from '../zetasql/ASTLimitOffsetProto';
import type { ASTHintProto as _zetasql_ASTHintProto, ASTHintProto__Output as _zetasql_ASTHintProto__Output } from '../zetasql/ASTHintProto';
import type { ASTWithGroupRowsProto as _zetasql_ASTWithGroupRowsProto, ASTWithGroupRowsProto__Output as _zetasql_ASTWithGroupRowsProto__Output } from '../zetasql/ASTWithGroupRowsProto';
import type { _zetasql_ASTFunctionCallEnums_NullHandlingModifier, _zetasql_ASTFunctionCallEnums_NullHandlingModifier__Output } from '../zetasql/ASTFunctionCallEnums';
import type { ASTWithReportModifierProto as _zetasql_ASTWithReportModifierProto, ASTWithReportModifierProto__Output as _zetasql_ASTWithReportModifierProto__Output } from '../zetasql/ASTWithReportModifierProto';

export interface ASTFunctionCallProto {
  'parent'?: (_zetasql_ASTExpressionProto | null);
  'function'?: (_zetasql_ASTPathExpressionProto | null);
  'arguments'?: (_zetasql_AnyASTExpressionProto)[];
  'havingModifier'?: (_zetasql_ASTHavingModifierProto | null);
  'clampedBetweenModifier'?: (_zetasql_ASTClampedBetweenModifierProto | null);
  'orderBy'?: (_zetasql_ASTOrderByProto | null);
  'limitOffset'?: (_zetasql_ASTLimitOffsetProto | null);
  'hint'?: (_zetasql_ASTHintProto | null);
  'withGroupRows'?: (_zetasql_ASTWithGroupRowsProto | null);
  'nullHandlingModifier'?: (_zetasql_ASTFunctionCallEnums_NullHandlingModifier);
  'distinct'?: (boolean);
  'isCurrentDateTimeWithoutParentheses'?: (boolean);
  'withReportModifier'?: (_zetasql_ASTWithReportModifierProto | null);
}

export interface ASTFunctionCallProto__Output {
  'parent': (_zetasql_ASTExpressionProto__Output | null);
  'function': (_zetasql_ASTPathExpressionProto__Output | null);
  'arguments': (_zetasql_AnyASTExpressionProto__Output)[];
  'havingModifier': (_zetasql_ASTHavingModifierProto__Output | null);
  'clampedBetweenModifier': (_zetasql_ASTClampedBetweenModifierProto__Output | null);
  'orderBy': (_zetasql_ASTOrderByProto__Output | null);
  'limitOffset': (_zetasql_ASTLimitOffsetProto__Output | null);
  'hint': (_zetasql_ASTHintProto__Output | null);
  'withGroupRows': (_zetasql_ASTWithGroupRowsProto__Output | null);
  'nullHandlingModifier': (_zetasql_ASTFunctionCallEnums_NullHandlingModifier__Output);
  'distinct': (boolean);
  'isCurrentDateTimeWithoutParentheses': (boolean);
  'withReportModifier': (_zetasql_ASTWithReportModifierProto__Output | null);
}
