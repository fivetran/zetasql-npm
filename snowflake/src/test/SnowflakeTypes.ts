import {
  runServer,
  SimpleCatalog,
  SimpleColumn,
  SimpleTable,
  SimpleType,
  terminateServer,
  TypeKind,
  ZetaSQLClient,
} from '..';
import { LanguageOptions } from '../LanguageOptions';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ProductMode } from '../types/zetasql/ProductMode';
import { ResolvedNodeKind } from '../types/zetasql/ResolvedNodeKind';
import { ZetaSQLBuiltinFunctionOptions } from '../ZetaSQLBuiltinFunctionOptions';

const catalog = new SimpleCatalog('catalog');
let languageOptions: LanguageOptions | undefined;

async function runTest(): Promise<void> {
  const port = 50005;

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  await registerAllLanguageFeatures();

  try {
    await analyze(
      'select \n' +
        'cast(1 AS INT),\n' +
        'cast(1 AS INTEGER),\n' +
        'cast(1 AS BIGINT),\n' +
        'cast(1 AS SMALLINT),\n' +
        'cast(1 AS TINYINT),\n' +
        'cast(1 AS BYTEINT),\n' +
        'cast(1 AS FLOAT4),\n' +
        'cast(1 AS FLOAT8),\n' +
        'cast(1 AS DOUBLE PRECISION),\n' +
        'cast(1 AS REAL)\n',
    );
    console.log('Tests passed');
  } catch (e) {
    console.log('Tests failed');
    console.error(e);
  }
  await terminateServer();
}

async function analyze(sqlStatement: string): Promise<AnalyzeResponse__Output> {
  const request = {
    sqlStatement,
    simpleCatalog: catalog.serialize(),
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

    languageOptions.options.errorOnDeprecatedSyntax = false;
    languageOptions.options.productMode = ProductMode.PRODUCT_INTERNAL;
    languageOptions.options.supportedStatementKinds = [ResolvedNodeKind.RESOLVED_QUERY_STMT];
    await catalog.addZetaSQLFunctions(new ZetaSQLBuiltinFunctionOptions(languageOptions));

    const simpleTableA = new SimpleTable('table_a');
    const column1 = new SimpleColumn('table_a', 'id', new SimpleType(TypeKind.TYPE_STRING));
    simpleTableA.addSimpleColumn(column1);

    const simpleTableB = new SimpleTable('table_b');
    const column2 = new SimpleColumn('table_b', 'id', new SimpleType(TypeKind.TYPE_STRING));
    simpleTableB.addSimpleColumn(column2);

    catalog.addSimpleTable('table_a', simpleTableA);
    catalog.addSimpleTable('table_b', simpleTableB);
  }
}

runTest().catch(e => console.error(e));
