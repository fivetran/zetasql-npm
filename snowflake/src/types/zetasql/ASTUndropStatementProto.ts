// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTDdlStatementProto as _zetasql_ASTDdlStatementProto, ASTDdlStatementProto__Output as _zetasql_ASTDdlStatementProto__Output } from '../zetasql/ASTDdlStatementProto';
import type { SchemaObjectKind as _zetasql_SchemaObjectKind, SchemaObjectKind__Output as _zetasql_SchemaObjectKind__Output } from '../zetasql/SchemaObjectKind';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTForSystemTimeProto as _zetasql_ASTForSystemTimeProto, ASTForSystemTimeProto__Output as _zetasql_ASTForSystemTimeProto__Output } from '../zetasql/ASTForSystemTimeProto';

export interface ASTUndropStatementProto {
  'parent'?: (_zetasql_ASTDdlStatementProto | null);
  'schemaObjectKind'?: (_zetasql_SchemaObjectKind);
  'name'?: (_zetasql_ASTPathExpressionProto | null);
  'isIfNotExists'?: (boolean);
  'forSystemTime'?: (_zetasql_ASTForSystemTimeProto | null);
}

export interface ASTUndropStatementProto__Output {
  'parent': (_zetasql_ASTDdlStatementProto__Output | null);
  'schemaObjectKind': (_zetasql_SchemaObjectKind__Output);
  'name': (_zetasql_ASTPathExpressionProto__Output | null);
  'isIfNotExists': (boolean);
  'forSystemTime': (_zetasql_ASTForSystemTimeProto__Output | null);
}
