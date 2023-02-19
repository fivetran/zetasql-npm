// Original file: src/protos/zetasql/proto/function.proto

import type { TVFArgumentProto as _zetasql_TVFArgumentProto, TVFArgumentProto__Output as _zetasql_TVFArgumentProto__Output } from '../zetasql/TVFArgumentProto';
import type { TVFRelationProto as _zetasql_TVFRelationProto, TVFRelationProto__Output as _zetasql_TVFRelationProto__Output } from '../zetasql/TVFRelationProto';
import type { TVFSignatureOptionsProto as _zetasql_TVFSignatureOptionsProto, TVFSignatureOptionsProto__Output as _zetasql_TVFSignatureOptionsProto__Output } from '../zetasql/TVFSignatureOptionsProto';

export interface TVFSignatureProto {
  'argument'?: (_zetasql_TVFArgumentProto)[];
  'outputSchema'?: (_zetasql_TVFRelationProto | null);
  'options'?: (_zetasql_TVFSignatureOptionsProto | null);
}

export interface TVFSignatureProto__Output {
  'argument': (_zetasql_TVFArgumentProto__Output)[];
  'outputSchema': (_zetasql_TVFRelationProto__Output | null);
  'options': (_zetasql_TVFSignatureOptionsProto__Output | null);
}
