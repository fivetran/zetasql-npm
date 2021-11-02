// Original file: src/protos/zetasql/proto/function.proto

import type { ValueWithTypeProto as _zetasql_ValueWithTypeProto, ValueWithTypeProto__Output as _zetasql_ValueWithTypeProto__Output } from '../zetasql/ValueWithTypeProto';
import type { TVFRelationProto as _zetasql_TVFRelationProto, TVFRelationProto__Output as _zetasql_TVFRelationProto__Output } from '../zetasql/TVFRelationProto';
import type { TVFModelProto as _zetasql_TVFModelProto, TVFModelProto__Output as _zetasql_TVFModelProto__Output } from '../zetasql/TVFModelProto';
import type { TVFConnectionProto as _zetasql_TVFConnectionProto, TVFConnectionProto__Output as _zetasql_TVFConnectionProto__Output } from '../zetasql/TVFConnectionProto';
import type { TVFDescriptorProto as _zetasql_TVFDescriptorProto, TVFDescriptorProto__Output as _zetasql_TVFDescriptorProto__Output } from '../zetasql/TVFDescriptorProto';

export interface TVFArgumentProto {
  'scalarArgument'?: (_zetasql_ValueWithTypeProto | null);
  'relationArgument'?: (_zetasql_TVFRelationProto | null);
  'modelArgument'?: (_zetasql_TVFModelProto | null);
  'connectionArgument'?: (_zetasql_TVFConnectionProto | null);
  'descriptorArgument'?: (_zetasql_TVFDescriptorProto | null);
}

export interface TVFArgumentProto__Output {
  'scalarArgument': (_zetasql_ValueWithTypeProto__Output | null);
  'relationArgument': (_zetasql_TVFRelationProto__Output | null);
  'modelArgument': (_zetasql_TVFModelProto__Output | null);
  'connectionArgument': (_zetasql_TVFConnectionProto__Output | null);
  'descriptorArgument': (_zetasql_TVFDescriptorProto__Output | null);
}
