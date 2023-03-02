import { Type } from './Type';

export interface Column {
  /**
   * The column name.  Columns must have non-empty names.  Anonymous columns
   * are not supported.
   */
  getName(): string;

  /**
   * The fully-qualified name, including the table name.
   */
  getFullName(): string;

  getType(): Type;

  /**
   * Pseudo-columns can be selected explicitly but do not show up in SELECT *. This can be used for
   * any hidden or virtual column or lazily computed value in a table.
   *
   * <p>Pseudo-columns can be used on value tables to provide additional named values outside the
   * content of the row value.
   *
   * <p>Pseudo-columns are normally not writable in INSERTs or UPDATEs, but this is up to the engine
   * and not checked by ZetaSQL.
   *
   * <p>Pseudo-columns are specified in more detail in the value tables spec:
   * (broken link)
   */
  isPseudoColumn(): boolean;

  /** Returns true if the column is writable. */
  isWritableColumn(): boolean;
}
