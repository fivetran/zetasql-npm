// Original file: src/snowflake/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { TableRefProto as _zetasql_TableRefProto, TableRefProto__Output as _zetasql_TableRefProto__Output } from '../zetasql/TableRefProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { Long } from '@grpc/proto-loader';

export interface ResolvedTableScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'table'?: (_zetasql_TableRefProto | null);
  'forSystemTimeExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'columnIndexList'?: (number | string | Long)[];
  'alias'?: (string);
}

export interface ResolvedTableScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'table': (_zetasql_TableRefProto__Output | null);
  'forSystemTimeExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'columnIndexList': (Long)[];
  'alias': (string);
}
