// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTNodeProto as _zetasql_ASTNodeProto, ASTNodeProto__Output as _zetasql_ASTNodeProto__Output } from '../zetasql/ASTNodeProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTColumnListProto as _zetasql_ASTColumnListProto, ASTColumnListProto__Output as _zetasql_ASTColumnListProto__Output } from '../zetasql/ASTColumnListProto';
import type { ASTForeignKeyActionsProto as _zetasql_ASTForeignKeyActionsProto, ASTForeignKeyActionsProto__Output as _zetasql_ASTForeignKeyActionsProto__Output } from '../zetasql/ASTForeignKeyActionsProto';
import type { _zetasql_ASTForeignKeyReferenceEnums_Match, _zetasql_ASTForeignKeyReferenceEnums_Match__Output } from '../zetasql/ASTForeignKeyReferenceEnums';

export interface ASTForeignKeyReferenceProto {
  'parent'?: (_zetasql_ASTNodeProto | null);
  'tableName'?: (_zetasql_ASTPathExpressionProto | null);
  'columnList'?: (_zetasql_ASTColumnListProto | null);
  'actions'?: (_zetasql_ASTForeignKeyActionsProto | null);
  'match'?: (_zetasql_ASTForeignKeyReferenceEnums_Match);
  'enforced'?: (boolean);
}

export interface ASTForeignKeyReferenceProto__Output {
  'parent': (_zetasql_ASTNodeProto__Output | null);
  'tableName': (_zetasql_ASTPathExpressionProto__Output | null);
  'columnList': (_zetasql_ASTColumnListProto__Output | null);
  'actions': (_zetasql_ASTForeignKeyActionsProto__Output | null);
  'match': (_zetasql_ASTForeignKeyReferenceEnums_Match__Output);
  'enforced': (boolean);
}
