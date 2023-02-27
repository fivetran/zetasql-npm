#!/bin/bash
printf "Running e2e tests.\n"

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Init...
Testing...
Tests passed
Terminating..."

actualResult=$(node lib/test/TestZetaSqlServer.js)
if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "TestZetaSqlServer error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Tests passed"
actualResult=$(node lib/test/TestQuery.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "TestQuery error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Tests passed"
actualResult=$(node lib/test/ManyJoins.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "ManyJoins error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Tests passed"
actualResult=$(node lib/test/ManyAdditionOperations.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "ManyAdditionOperations error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Tests passed"
actualResult=$(node lib/test/SnowflakeSpecific.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "SnowflakeSpecific error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Tests passed"
actualResult=$(node lib/test/SnowflakeTypes.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "SnowflakeTypes error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

printf "e2e tests passed successfully!\n"
exit 0;
