// Original file: src/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedStatementProto as _zetasql_ResolvedStatementProto, ResolvedStatementProto__Output as _zetasql_ResolvedStatementProto__Output } from '../zetasql/ResolvedStatementProto';
import type { _zetasql_ResolvedImportStmtEnums_ImportKind, _zetasql_ResolvedImportStmtEnums_ImportKind__Output } from '../zetasql/ResolvedImportStmtEnums';
import type { ResolvedOptionProto as _zetasql_ResolvedOptionProto, ResolvedOptionProto__Output as _zetasql_ResolvedOptionProto__Output } from '../zetasql/ResolvedOptionProto';

export interface ResolvedImportStmtProto {
  'parent'?: (_zetasql_ResolvedStatementProto | null);
  'importKind'?: (_zetasql_ResolvedImportStmtEnums_ImportKind);
  'namePath'?: (string)[];
  'filePath'?: (string);
  'aliasPath'?: (string)[];
  'optionList'?: (_zetasql_ResolvedOptionProto)[];
  'intoAliasPath'?: (string)[];
}

export interface ResolvedImportStmtProto__Output {
  'parent': (_zetasql_ResolvedStatementProto__Output | null);
  'importKind': (_zetasql_ResolvedImportStmtEnums_ImportKind__Output);
  'namePath': (string)[];
  'filePath': (string);
  'aliasPath': (string)[];
  'optionList': (_zetasql_ResolvedOptionProto__Output)[];
  'intoAliasPath': (string)[];
}
