// Original file: src/zetasql/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { _zetasql_ASTDropStatementEnums_DropMode, _zetasql_ASTDropStatementEnums_DropMode__Output } from '../zetasql/ASTDropStatementEnums';
import type { SchemaObjectKind as _zetasql_SchemaObjectKind, SchemaObjectKind__Output as _zetasql_SchemaObjectKind__Output } from '../zetasql/SchemaObjectKind';

export interface ASTDropStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'dropMode'?: (_zetasql_ASTDropStatementEnums_DropMode);
  'isIfExists'?: (boolean);
  'schemaObjectKind'?: (_zetasql_SchemaObjectKind);
}

export interface ASTDropStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'dropMode': (_zetasql_ASTDropStatementEnums_DropMode__Output);
  'isIfExists': (boolean);
  'schemaObjectKind': (_zetasql_SchemaObjectKind__Output);
}
