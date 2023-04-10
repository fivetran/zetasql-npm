// Original file: src/snowflake/protos/zetasql/parser/parse_tree.proto

import type { ASTColumnSchemaProto as _zetasql_ASTColumnSchemaProto, ASTColumnSchemaProto__Output as _zetasql_ASTColumnSchemaProto__Output } from '../zetasql/ASTColumnSchemaProto';
import type { ASTStructColumnFieldProto as _zetasql_ASTStructColumnFieldProto, ASTStructColumnFieldProto__Output as _zetasql_ASTStructColumnFieldProto__Output } from '../zetasql/ASTStructColumnFieldProto';

export interface ASTStructColumnSchemaProto {
  'parent'?: (_zetasql_ASTColumnSchemaProto | null);
  'structFields'?: (_zetasql_ASTStructColumnFieldProto)[];
}

export interface ASTStructColumnSchemaProto__Output {
  'parent': (_zetasql_ASTColumnSchemaProto__Output | null);
  'structFields': (_zetasql_ASTStructColumnFieldProto__Output)[];
}
