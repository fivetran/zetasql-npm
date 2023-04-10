// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedCreateViewBaseProto as _zetasql_ResolvedCreateViewBaseProto, ResolvedCreateViewBaseProto__Output as _zetasql_ResolvedCreateViewBaseProto__Output } from '../zetasql/ResolvedCreateViewBaseProto';
import type { ResolvedColumnDefinitionProto as _zetasql_ResolvedColumnDefinitionProto, ResolvedColumnDefinitionProto__Output as _zetasql_ResolvedColumnDefinitionProto__Output } from '../zetasql/ResolvedColumnDefinitionProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';

export interface ResolvedCreateMaterializedViewStmtProto {
  'parent'?: (_zetasql_ResolvedCreateViewBaseProto | null);
  'columnDefinitionList'?: (_zetasql_ResolvedColumnDefinitionProto)[];
  'partitionByList'?: (_zetasql_AnyResolvedExprProto)[];
  'clusterByList'?: (_zetasql_AnyResolvedExprProto)[];
}

export interface ResolvedCreateMaterializedViewStmtProto__Output {
  'parent': (_zetasql_ResolvedCreateViewBaseProto__Output | null);
  'columnDefinitionList': (_zetasql_ResolvedColumnDefinitionProto__Output)[];
  'partitionByList': (_zetasql_AnyResolvedExprProto__Output)[];
  'clusterByList': (_zetasql_AnyResolvedExprProto__Output)[];
}
