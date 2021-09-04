import { ProductMode } from './types/zetasql/ProductMode';
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

  /**
   * Returns the SQL name for this type, which will be reparseable as part
   * of a query.  For proto-based types, this just returns the type name, which
   * does not easily distinguish PROTOs from ENUMs.
   *
   * @param productMode
   * @return The SQL name for this type.
   */
  abstract typeName(productMode: ProductMode): string;

  getTypeName(): string {
    return this.typeName(ProductMode.PRODUCT_INTERNAL);
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
  ];
}
