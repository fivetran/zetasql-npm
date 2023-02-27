import { TypeKind } from './types/zetasql/TypeKind';
import { TypeProto } from './types/zetasql/TypeProto';

export abstract class Type {
  kind: TypeKind;

  constructor(kind: TypeKind) {
    this.kind = kind;
  }

  getKind(): TypeKind {
    return this.kind;
  }

  serialize(): TypeProto {
    return {
      typeKind: this.getKind(),
    };
  }

  static TYPE_KIND_NAMES: string[] = [
    'UNKNOWN', // Not a valid type.
    'INT32',
    'INT64',
    'UINT32',
    'UINT64',
    'BOOL',
    'FLOAT',
    'DOUBLE',
    'STRING',
    'BYTES',
    'DATE',
    'TIMESTAMP_SECONDS',
    'TIMESTAMP_MILLIS',
    'TIMESTAMP_MICROS',
    '', // Used to be TIMESTAMP_NANOS, removed.
    'ENUM',
    'ARRAY',
    'STRUCT',
    'PROTO',
    'TIMESTAMP',
    'TIME',
    'DATETIME',
    'GEOGRAPHY',
    'NUMERIC',
    'BIGNUMERIC',
    'EXTENDED',
    'JSON',
    'INTERVAL',
    'TOKENLIST',

    // Snowflake types
    'INT',
    'INTEGER',
    'BIGINT',
    'SMALLINT',
    'TINYINT',
    'BYTEINT',
    'FLOAT4',
    'FLOAT8',
    'DOUBLE PRECISION',
    'REAL',
  ];
}
