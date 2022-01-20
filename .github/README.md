# zetasql-npm

The repository contains npm package for [zetasql](https://github.com/google/zetasql) gRPC server and client.
ZetaSQL can be used to provide consistent behavior for all semantic analysis, name resolution, type checking, implicit casting, etc.

## Table of contents

* [Installation](#installation)
* [Example Usage](#example-usage)
    * [Start server](#start-server)
    * [Enable Language Features](#enable-language-features)
    * [Register tables](#register-tables)
    * [Register catalog](#register-catalog)
    * [Retrieve table names from SQL statement](#retrieve-table-names-from-sql-statement)
    * [Analyze request](#analyze-request)
* [How to build](#how-to-build)

## Installation

```sh
> npm i @fivetrandevelopers/zetasql 
```

## Example Usage

Please follow to demo project to see full [ZetaSQL usage examples](https://github.com/fivetran/zetasql-npm-examples).

### Start server

```typescript
const ZETA_SQL_PORT = 50005;
...
let zetaSQLClient: ZetaSQLClient;
...
runServer(ZETA_SQL_PORT).catch(err => console.error(err));
ZetaSQLClient.init(ZETA_SQL_PORT);
zetaSQLClient = await ZetaSQLClient.getInstance();
```

### Enable Language Features

```typescript
const catalog = new SimpleCatalog('catalog');
...
const languageOptions = await new LanguageOptions().enableMaximumLanguageFeatures();
await catalog.addZetaSQLFunctions(new ZetaSQLBuiltinFunctionOptions(languageOptions));
```

### Register tables

```typescript
...
const projectCatalog = new SimpleCatalog('<todo: project id>');
catalog.addSimpleCatalog(projectCatalog);
...
const datasetCatalog = new SimpleCatalog('<todo: dataset>');
projectCatalog.addSimpleCatalog(datasetCatalog);
...
const simpleTable = new SimpleTable('<todo: table name>');
datasetCatalog.addSimpleTable('<todo: table name>', simpleTable);
...
const simpleColumn = new SimpleColumn('<todo: table name>', '<todo: column name>', new SimpleType(<todo: column type, e.g. TypeKind.TYPE_INT64>));
simpleTable.addSimpleColumn(simpleColumn);
```

### Register catalog

```typescript
await catalog.register();
```

### Retrieve table names from SQL statement

```typescript
try {
    const extractResult = await zetaSQLClient.extractTableNamesFromStatement({
        sqlStatement: VALID_SQL_STATEMENT,
    });
    console.log(extractResult.tableName);
} catch (e) {
    console.log(e);
}
```

### Analyze request

```typescript
const analyzeRequest: AnalyzeRequest = {
    sqlStatement: sqlStatement,
    registeredCatalogId: catalog.registeredId,

    options: {
        parseLocationRecordType: ParseLocationRecordType.PARSE_LOCATION_RECORD_CODE_SEARCH,
        errorMessageMode: ErrorMessageMode.ERROR_MESSAGE_ONE_LINE,
        languageOptions: catalog.builtinFunctionOptions.languageOptions,
    },
};

...

try {
    const analyzeResponse = await ZetaSQLClient.getInstance().analyze(analyzeRequest);
    console.log('Analyze response was successfully received');
    console.log(analyzeResponse);
} catch (e: any) {
    console.log('There was an error wile parsing SQL query');
    ...
}
```

## How to build

To build it locally you need to have `npm` installed.

Run the following commands in the root directory

```sh
> npm install
> npm run build:all
```
