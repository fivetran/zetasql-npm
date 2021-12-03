import { SimpleCatalog } from '../SimpleCatalog';
import { SimpleTable } from '../SimpleTable';

describe('SimpleCatalogTest', () => {
  it('serialize', () => {
    const catalog = new SimpleCatalog('catalog1');
    catalog.addSimpleTable('table1', new SimpleTable('table1'));

    const result = catalog.serialize();

    expect(result.name).toBe('catalog1');
    expect(result.table.length).toBe(1);
    expect(result.table[0].name).toBe('table1');
  });
});
