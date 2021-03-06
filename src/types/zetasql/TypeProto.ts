// Original file: src/protos/zetasql/public/type.proto

import type { TypeKind as _zetasql_TypeKind } from '../zetasql/TypeKind';
import type { ArrayTypeProto as _zetasql_ArrayTypeProto, ArrayTypeProto__Output as _zetasql_ArrayTypeProto__Output } from '../zetasql/ArrayTypeProto';
import type { StructTypeProto as _zetasql_StructTypeProto, StructTypeProto__Output as _zetasql_StructTypeProto__Output } from '../zetasql/StructTypeProto';
import type { ProtoTypeProto as _zetasql_ProtoTypeProto, ProtoTypeProto__Output as _zetasql_ProtoTypeProto__Output } from '../zetasql/ProtoTypeProto';
import type { EnumTypeProto as _zetasql_EnumTypeProto, EnumTypeProto__Output as _zetasql_EnumTypeProto__Output } from '../zetasql/EnumTypeProto';
import type { FileDescriptorSet as _google_protobuf_FileDescriptorSet, FileDescriptorSet__Output as _google_protobuf_FileDescriptorSet__Output } from '../google/protobuf/FileDescriptorSet';

export interface TypeProto {
  'typeKind'?: (_zetasql_TypeKind | keyof typeof _zetasql_TypeKind);
  'arrayType'?: (_zetasql_ArrayTypeProto | null);
  'structType'?: (_zetasql_StructTypeProto | null);
  'protoType'?: (_zetasql_ProtoTypeProto | null);
  'enumType'?: (_zetasql_EnumTypeProto | null);
  'fileDescriptorSet'?: (_google_protobuf_FileDescriptorSet)[];
  'extendedTypeName'?: (string);
}

export interface TypeProto__Output {
  'typeKind': (_zetasql_TypeKind);
  'arrayType': (_zetasql_ArrayTypeProto__Output | null);
  'structType': (_zetasql_StructTypeProto__Output | null);
  'protoType': (_zetasql_ProtoTypeProto__Output | null);
  'enumType': (_zetasql_EnumTypeProto__Output | null);
  'fileDescriptorSet': (_google_protobuf_FileDescriptorSet__Output)[];
  'extendedTypeName': (string);
}
