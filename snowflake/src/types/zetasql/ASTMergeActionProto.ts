// Original file: src/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';
import type { ASTInsertValuesRowProto as _zetasql_ASTInsertValuesRowProto, ASTInsertValuesRowProto__Output as _zetasql_ASTInsertValuesRowProto__Output } from '../zetasql/ASTInsertValuesRowProto';
import type { ASTUpdateItemListProto as _zetasql_ASTUpdateItemListProto, ASTUpdateItemListProto__Output as _zetasql_ASTUpdateItemListProto__Output } from '../zetasql/ASTUpdateItemListProto';
import type { _zetasql_ASTMergeActionEnums_ActionType, _zetasql_ASTMergeActionEnums_ActionType__Output } from '../zetasql/ASTMergeActionEnums';

export interface ASTMergeActionProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'insertColumnList'?: (_zetasql_ASTColumnListProto | null);
  'insertRow'?: (_zetasql_ASTInsertValuesRowProto | null);
  'updateItemList'?: (_zetasql_ASTUpdateItemListProto | null);
  'actionType'?: (_zetasql_ASTMergeActionEnums_ActionType);
}

export interface ASTMergeActionProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'insertColumnList': (_zetasql_ASTColumnListProto__Output | null);
  'insertRow': (_zetasql_ASTInsertValuesRowProto__Output | null);
  'updateItemList': (_zetasql_ASTUpdateItemListProto__Output | null);
  'actionType': (_zetasql_ASTMergeActionEnums_ActionType__Output);
}
