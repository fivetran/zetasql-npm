import { assertThat, falsy } from 'hamjest';
import { SimpleColumn } from '../SimpleColumn';
import { SimpleType } from '../SimpleType';
import { TypeFactory } from '../TypeFactory';
import { TypeKind } from '../types/zetasql/TypeKind';

describe('SimpleColumnTest', () => {
  it('testSimpleTypeColumn', () => {
    const type = TypeFactory.createSimpleType(TypeKind.TYPE_BOOL);
    if (!type) {
      throw new Error('Simple type expected');
    }
    const column1 = new SimpleColumn('t1', 'c1', type);

    assertThat(column1.getName(), 'c1');
    assertThat(column1.getFullName(), 't1.c1');
    assertThat(type, column1.getType());
    assertThat(column1.isPseudoColumn(), falsy());
  });

  it('serialize', () => {
    const column = new SimpleColumn('table1', 'col1', new SimpleType(TypeKind.TYPE_STRING));

    const result = column.serialize();

    assertThat(result.name, 'col1');
    assertThat(result.type?.typeKind, TypeKind.TYPE_STRING);
    assertThat(result.isPseudoColumn, falsy());
    assertThat(result.isWritableColumn, falsy());
  });
});
