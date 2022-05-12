import { LanguageOptions } from '../LanguageOptions';
import { runServer, terminateServer } from '../server';
import { SimpleCatalog } from '../SimpleCatalog';
import { SimpleColumn } from '../SimpleColumn';
import { SimpleTable } from '../SimpleTable';
import { SimpleType } from '../SimpleType';
import { ErrorMessageMode } from '../types/zetasql/ErrorMessageMode';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { ParseLocationRecordType } from '../types/zetasql/ParseLocationRecordType';
import { TypeKind } from '../types/zetasql/TypeKind';
import { ZetaSQLBuiltinFunctionOptions } from '../ZetaSQLBuiltinFunctionOptions';
import { ZetaSQLClient } from '../ZetaSQLClient';

const catalog = new SimpleCatalog('catalog');

async function runTest(): Promise<void> {
  const port = 50005;
  const tableName = 'users';

  runServer(port).catch(err => console.error(err));
  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  const projectCatalog = new SimpleCatalog('test_project');
  catalog.addSimpleCatalog(projectCatalog);

  const dataSetCatalog = new SimpleCatalog('data_set');
  projectCatalog.addSimpleCatalog(dataSetCatalog);

  const usersTable = new SimpleTable(tableName);
  dataSetCatalog.addSimpleTable(tableName, usersTable);

  const column = new SimpleColumn(tableName, 'id', new SimpleType(TypeKind.TYPE_STRING));
  usersTable.addSimpleColumn(column);

  await registerAllLanguageFeatures();

  try {
    await catalog.register();
  } catch (e) {
    console.error(e);
    console.log('Tests failed');
  }

  try {
    await analyze('SELECT * FROM `test_project`.data_set.users where id = "1"');
    console.log('Tests passed');
  } catch (e) {
    console.error(e);
    console.log('Tests failed');
  }
  await terminateServer();
}

async function analyze(sqlStatement: string): Promise<AnalyzeResponse__Output> {
  const response = await ZetaSQLClient.getInstance().analyze({
    sqlStatement,
    registeredCatalogId: catalog.registeredId,

    options: {
      parseLocationRecordType: ParseLocationRecordType.PARSE_LOCATION_RECORD_CODE_SEARCH,

      errorMessageMode: ErrorMessageMode.ERROR_MESSAGE_ONE_LINE,
      languageOptions: catalog.builtinFunctionOptions?.languageOptions,
    },
  });

  if (!response) {
    throw new Error('Analyze failed');
  }
  return response;
}

async function registerAllLanguageFeatures(): Promise<void> {
  if (!catalog.builtinFunctionOptions) {
    const languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();
    await catalog.addZetaSQLFunctions(new ZetaSQLBuiltinFunctionOptions(languageOptions));
  }
}

runTest().catch(e => console.error(e));
