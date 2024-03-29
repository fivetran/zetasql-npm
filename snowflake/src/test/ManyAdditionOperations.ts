import { runServer, terminateServer, ZetaSQLClient } from '..';
import { LanguageOptions } from '../LanguageOptions';
import { AnalyzeResponse__Output } from '../types/zetasql/local_service/AnalyzeResponse';
import { SimpleCatalogProto } from '../types/zetasql/SimpleCatalogProto';

const simpleCatalog: SimpleCatalogProto = {
  name: 'catalog',
};

async function runTest(): Promise<void> {
  const port = 50005;

  runServer(port).catch(err => console.error(err));

  ZetaSQLClient.init(port);
  await ZetaSQLClient.getInstance().testConnection();

  await registerAllLanguageFeatures();

  try {
    await analyze(
      `with table_a as (
  select
    1 as a1,
    1 as a2,
    1 as a3,
    1 as a4,
    1 as a5,
    1 as a6,
    1 as a7,
    1 as a8,
    1 as a9,
    1 as a10,
    1 as a11,
    1 as a12,
    1 as a13,
    1 as a14,
    1 as a15,
    1 as a16,
    1 as a17
)
select  
    a1 + 
    a2 + 
    a3 + 
    a4 + 
    a5 + 
    a6 + 
    a7 + 
    a8 + 
    a9 + 
    a10 + 
    a11 + 
    a12 + 
    a13 + 
    a14 + 
    a15 + 
    a16 +
    a17 
from table_a`,
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
    simpleCatalog,
  };

  const response = await ZetaSQLClient.getInstance().analyze(request);
  if (!response) {
    throw new Error('Analyze failed');
  }
  return response;
}

async function registerAllLanguageFeatures(): Promise<void> {
  const languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();
  simpleCatalog.builtinFunctionOptions = {
    languageOptions: languageOptions.serialize(),
  };
}

runTest().catch(e => console.error(e));
