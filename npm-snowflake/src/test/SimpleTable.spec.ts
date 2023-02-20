import { ok } from 'assert';
import { assertThat, falsy, greaterThan } from 'hamjest';
import * as Long from 'long';
import { SimpleColumn } from '../SimpleColumn';
import { SimpleTable } from '../SimpleTable';
import { SimpleType } from '../SimpleType';
import { TypeKind } from '../types/zetasql/TypeKind';

describe('SimpleTableTest', () => {
  it('serialize', () => {
    const simpleTable = new SimpleTable('table1');
    const column1 = new SimpleColumn('table1', 'col1', new SimpleType(TypeKind.TYPE_BIGNUMERIC));
    const column2 = new SimpleColumn('table1', 'col2', new SimpleType(TypeKind.TYPE_STRING));
    simpleTable.addSimpleColumn(column1);
    simpleTable.addSimpleColumn(column2);

    const result = simpleTable.serialize();

    assertThat(result.name, 'table1');
    assertThat(result.isValueTable, falsy());
    assertThat((result.serializationId as Long).high, 0);
    assertThat((result.serializationId as Long).low, greaterThan(0));
    assertThat(result.allowAnonymousColumnName, falsy());
    assertThat(result.allowDuplicateColumnNames, falsy());
    ok(result.column);
    assertThat(result.column.length, 2);
    assertThat(result.column[0].name, 'col1');
    assertThat(result.column[1].name, 'col2');
  });
});
