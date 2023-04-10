// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionListProto as _zetasql_ASTPathExpressionListProto, ASTPathExpressionListProto__Output as _zetasql_ASTPathExpressionListProto__Output } from '../zetasql/ASTPathExpressionListProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTUnpivotInItemListProto as _zetasql_ASTUnpivotInItemListProto, ASTUnpivotInItemListProto__Output as _zetasql_ASTUnpivotInItemListProto__Output } from '../zetasql/ASTUnpivotInItemListProto';
import type { ASTAliasProto as _zetasql_ASTAliasProto, ASTAliasProto__Output as _zetasql_ASTAliasProto__Output } from '../zetasql/ASTAliasProto';
import type { _zetasql_ASTUnpivotClauseEnums_NullFilter, _zetasql_ASTUnpivotClauseEnums_NullFilter__Output } from '../zetasql/ASTUnpivotClauseEnums';

export interface ASTUnpivotClauseProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'unpivotOutputValueColumns'?: (_zetasql_ASTPathExpressionListProto | null);
  'unpivotOutputNameColumn'?: (_zetasql_ASTPathExpressionProto | null);
  'unpivotInItems'?: (_zetasql_ASTUnpivotInItemListProto | null);
  'outputAlias'?: (_zetasql_ASTAliasProto | null);
  'nullFilter'?: (_zetasql_ASTUnpivotClauseEnums_NullFilter);
}

export interface ASTUnpivotClauseProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'unpivotOutputValueColumns': (_zetasql_ASTPathExpressionListProto__Output | null);
  'unpivotOutputNameColumn': (_zetasql_ASTPathExpressionProto__Output | null);
  'unpivotInItems': (_zetasql_ASTUnpivotInItemListProto__Output | null);
  'outputAlias': (_zetasql_ASTAliasProto__Output | null);
  'nullFilter': (_zetasql_ASTUnpivotClauseEnums_NullFilter__Output);
}
