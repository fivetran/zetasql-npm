// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnSchemaProto as _zetasql_ASTColumnSchemaProto, ASTColumnSchemaProto__Output as _zetasql_ASTColumnSchemaProto__Output } from '../zetasql/ASTColumnSchemaProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';

export interface ASTSimpleColumnSchemaProto {
  'parent'?: (_zetasql_ASTColumnSchemaProto | null);
  'typeName'?: (_zetasql_ASTPathExpressionProto | null);
}

export interface ASTSimpleColumnSchemaProto__Output {
  'parent': (_zetasql_ASTColumnSchemaProto__Output | null);
  'typeName': (_zetasql_ASTPathExpressionProto__Output | null);
}
