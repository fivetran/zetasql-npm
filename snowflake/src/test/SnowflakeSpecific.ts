import { runServer, terminateServer, TypeKind, ZetaSQLClient } from '..';
import { LanguageOptions } from '../LanguageOptions';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { SimpleCatalogProto } from '../types/zetasql/SimpleCatalogProto';
import { SimpleColumnProto } from '../types/zetasql/SimpleColumnProto';
import { SimpleTableProto } from '../types/zetasql/SimpleTableProto';

const catalog: SimpleCatalogProto = {
  name: 'catalog',
};
let languageOptions: LanguageOptions | undefined;

async function runTest(): Promise<void> {
  const port = 50005;

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  await registerAllLanguageFeatures();

  try {
    await analyze(
      `select *,
       array_construct(1),
       's'::varchar,
       try_cast('s' as int64),
       as_boolean(true),
       try_parse_json('{}'), parse_json('{"a":"b"}'):a,
       -'1', +'1', 1 + '5', 3 % 2, null / 2,
       pi(), truncate(12.2, 2), datediff(year, '2021-01-01', '2021-02-28'),
       from table_a as A inner join lateral (select * from table_b as B);`,
    );
    console.log('Tests passed');
  } catch (e) {
    console.log('Tests failed');
    console.error(e);
  }
  terminateServer();
}

async function analyze(sqlStatement: string): Promise<AnalyzeResponse__Output> {
  const request = {
    sqlStatement,
    simpleCatalog: catalog,
    options: {
      languageOptions: languageOptions?.serialize(),
    },
  };

  const response = await ZetaSQLClient.getInstance().analyze(request);
  if (!response) {
    throw new Error('Analyze failed');
  }
  return response;
}

async function registerAllLanguageFeatures(): Promise<void> {
  if (!catalog.builtinFunctionOptions) {
    languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();
    catalog.builtinFunctionOptions = {
      languageOptions: languageOptions.serialize(),
    };

    const simpleTableA: SimpleTableProto = { name: 'table_a' };
    const column1: SimpleColumnProto = {
      name: 'id',
      type: { typeKind: TypeKind.TYPE_STRING },
    };
    simpleTableA.column = [column1];

    const simpleTableB: SimpleTableProto = { name: 'table_b' };
    const column2: SimpleColumnProto = {
      name: 'id',
      type: { typeKind: TypeKind.TYPE_STRING },
    };
    simpleTableB.column = [column2];

    catalog.table = [simpleTableA, simpleTableB];
  }
}

runTest().catch(e => console.error(e));
