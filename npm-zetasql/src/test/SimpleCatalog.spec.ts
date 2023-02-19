import { ok } from 'assert';
import { assertThat } from 'hamjest';
import { SimpleCatalog } from '../SimpleCatalog';
import { SimpleTable } from '../SimpleTable';

describe('SimpleCatalogTest', () => {
  it('serialize', () => {
    const catalog = new SimpleCatalog('catalog1');
    catalog.addSimpleTable('table1', new SimpleTable('table1'));

    const result = catalog.serialize();

    assertThat(result.name, 'catalog1');
    const tables = result.table;
    ok(tables);
    assertThat(tables.length, 1);
    assertThat(tables[0].name, 'table1');
  });
});
