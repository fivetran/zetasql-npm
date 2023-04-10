// Original file: src/zetasql/protos/zetasql/resolved_ast/resolved_ast.proto

import type { ResolvedScanProto as _zetasql_ResolvedScanProto, ResolvedScanProto__Output as _zetasql_ResolvedScanProto__Output } from '../zetasql/ResolvedScanProto';
import type { AnyResolvedScanProto as _zetasql_AnyResolvedScanProto, AnyResolvedScanProto__Output as _zetasql_AnyResolvedScanProto__Output } from '../zetasql/AnyResolvedScanProto';
import type { AnyResolvedExprProto as _zetasql_AnyResolvedExprProto, AnyResolvedExprProto__Output as _zetasql_AnyResolvedExprProto__Output } from '../zetasql/AnyResolvedExprProto';
import type { ResolvedColumnProto as _zetasql_ResolvedColumnProto, ResolvedColumnProto__Output as _zetasql_ResolvedColumnProto__Output } from '../zetasql/ResolvedColumnProto';
import type { ResolvedColumnHolderProto as _zetasql_ResolvedColumnHolderProto, ResolvedColumnHolderProto__Output as _zetasql_ResolvedColumnHolderProto__Output } from '../zetasql/ResolvedColumnHolderProto';

export interface ResolvedArrayScanProto {
  'parent'?: (_zetasql_ResolvedScanProto | null);
  'inputScan'?: (_zetasql_AnyResolvedScanProto | null);
  'arrayExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'elementColumn'?: (_zetasql_ResolvedColumnProto | null);
  'arrayOffsetColumn'?: (_zetasql_ResolvedColumnHolderProto | null);
  'joinExpr'?: (_zetasql_AnyResolvedExprProto | null);
  'isOuter'?: (boolean);
}

export interface ResolvedArrayScanProto__Output {
  'parent': (_zetasql_ResolvedScanProto__Output | null);
  'inputScan': (_zetasql_AnyResolvedScanProto__Output | null);
  'arrayExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'elementColumn': (_zetasql_ResolvedColumnProto__Output | null);
  'arrayOffsetColumn': (_zetasql_ResolvedColumnHolderProto__Output | null);
  'joinExpr': (_zetasql_AnyResolvedExprProto__Output | null);
  'isOuter': (boolean);
}
