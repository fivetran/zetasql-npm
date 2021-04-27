import {
  runServer,
  Client,
  AnalyzeRequest,
  SimpleCatalog,
  SimpleColumn,
  SimpleTable,
  SimpleType,
  TypeKind,
} from './index';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
  runServer().catch(err => console.error(err));
  await delay(2000);

  testFormatSql();
  testAnalyze();
}

function testFormatSql() {
  const formatSqlRequest = {
    sql: 'seLect foo  , bar from some_table where something limiT      10',
  };
  Client.api.formatSql(formatSqlRequest, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.sql);
    }
  });
}

function testAnalyze() {
  const catalog: SimpleCatalog = new SimpleCatalog('test-catalog');
  catalog.addSimpleTable(
    new SimpleTable('customers', null, [
      new SimpleColumn('customers', 'id', new SimpleType(TypeKind.TYPE_BIGNUMERIC)),
      new SimpleColumn('customers', 'name', new SimpleType(TypeKind.TYPE_STRING)),
    ]),
  );

  const analyzeRequest: AnalyzeRequest = {
    sqlStatement: 'select idd from `customers` limit 7;',
    simpleCatalog: catalog.serialize(),
  };

  console.log(JSON.stringify(analyzeRequest));

  Client.api.analyze(analyzeRequest, (err, response) => {
    if (err) {
      console.log(JSON.stringify(err, null, 4));
    } else {
      console.log(JSON.stringify(response, null, 4));
    }
  });
}

test();
