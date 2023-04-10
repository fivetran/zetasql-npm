// Original file: src/zetasql-snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTStatementProto as _zetasql_ASTStatementProto, ASTStatementProto__Output as _zetasql_ASTStatementProto__Output } from '../zetasql/ASTStatementProto';
import type { ASTPathExpressionProto as _zetasql_ASTPathExpressionProto, ASTPathExpressionProto__Output as _zetasql_ASTPathExpressionProto__Output } from '../zetasql/ASTPathExpressionProto';
import type { ASTTVFArgumentProto as _zetasql_ASTTVFArgumentProto, ASTTVFArgumentProto__Output as _zetasql_ASTTVFArgumentProto__Output } from '../zetasql/ASTTVFArgumentProto';

export interface ASTCallStatementProto {
  'parent'?: (_zetasql_ASTStatementProto | null);
  'procedureName'?: (_zetasql_ASTPathExpressionProto | null);
  'arguments'?: (_zetasql_ASTTVFArgumentProto)[];
}

export interface ASTCallStatementProto__Output {
  'parent': (_zetasql_ASTStatementProto__Output | null);
  'procedureName': (_zetasql_ASTPathExpressionProto__Output | null);
  'arguments': (_zetasql_ASTTVFArgumentProto__Output)[];
}
