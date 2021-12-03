import * as Long from 'long';
import { SimpleColumn } from '../SimpleColumn';
import { SimpleTable } from '../SimpleTable';
import { SimpleType } from '../SimpleType';
import { SimpleColumnProto } from '../types/zetasql/SimpleColumnProto';
import { TypeKind } from '../types/zetasql/TypeKind';

describe('SimpleTableTest', () => {
  it('serialize', () => {
    const simpleTable = new SimpleTable('table1');
    const column1 = new SimpleColumn('table1', 'col1', new SimpleType(TypeKind.TYPE_BIGNUMERIC));
    const column2 = new SimpleColumn('table1', 'col2', new SimpleType(TypeKind.TYPE_STRING));
    simpleTable.addSimpleColumn(column1);
    simpleTable.addSimpleColumn(column2);

    const result = simpleTable.serialize();

    expect(result.name).toBe('table1');
    expect(result.isValueTable).toBeFalsy();
    expect(result.serializationId).toStrictEqual(new Long(2));
    expect(result.allowAnonymousColumnName).toBeFalsy();
    expect(result.allowDuplicateColumnNames).toBeFalsy();
    assertColumn(result.column[0], 'col1');
    assertColumn(result.column[1], 'col2');
  });

  function assertColumn(column: SimpleColumnProto, name: string) {
    expect(column.name).toBe(name);
  }
});
