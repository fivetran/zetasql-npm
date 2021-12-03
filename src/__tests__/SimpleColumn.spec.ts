import { SimpleColumn } from '../SimpleColumn';
import { SimpleType } from '../SimpleType';
import { TypeFactory } from '../TypeFactory';
import { TypeKind } from '../types/zetasql/TypeKind';

describe('SimpleColumnTest', () => {
  it('testSimpleTypeColumn', () => {
    const type = TypeFactory.createSimpleType(TypeKind.TYPE_BOOL);
    const column1 = new SimpleColumn('t1', 'c1', type);

    expect(column1.getName()).toBe('c1');
    expect(column1.getFullName()).toBe('t1.c1');
    expect(type).toBe(column1.getType());
    expect(column1.isPseudoColumn()).toBeFalsy();
  });

  it('serialize', () => {
    const column1 = new SimpleColumn('table1', 'col1', new SimpleType(TypeKind.TYPE_STRING));

    const result = column1.serialize();

    expect(result.name).toBe('col1');
    expect(result.type.typeKind).toBe(TypeKind.TYPE_STRING);
    expect(result.isPseudoColumn).toBeFalsy();
    expect(result.isWritableColumn).toBeFalsy();
  });
});
