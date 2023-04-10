// Original file: src/snowflake/protos/zetasql/public/options.proto

export const ProductMode = {
  PRODUCT_INTERNAL: 0,
  PRODUCT_EXTERNAL: 1,
} as const;

export type ProductMode =
  | 'PRODUCT_INTERNAL'
  | 0
  | 'PRODUCT_EXTERNAL'
  | 1

export type ProductMode__Output = typeof ProductMode[keyof typeof ProductMode]
