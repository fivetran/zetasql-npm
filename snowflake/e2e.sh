#!/bin/bash
printf "Running e2e tests.\n"

SCRIPT_DIR=$(dirname "$0")
cd ${SCRIPT_DIR}
echo 'Running from folder '${PWD}

TESTS_DIR=lib/test


expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Init...
Testing...
Tests passed
Terminating...
Terminated"

actualResult=$(node ${TESTS_DIR}/TestZetaSqlServer.js)
if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "TestZetaSqlServer error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Tests passed"
actualResult=$(node ${TESTS_DIR}/TestQuery.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "TestQuery error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Tests passed"
actualResult=$(node ${TESTS_DIR}/ManyJoins.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "ManyJoins error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Tests passed"
actualResult=$(node ${TESTS_DIR}/ManyAdditionOperations.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "ManyAdditionOperations error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Tests passed"
actualResult=$(node ${TESTS_DIR}/SnowflakeSpecific.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "SnowflakeSpecific error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

expectedResult="Running server on localhost:50005...
Server listening on localhost:50005
Tests passed"
actualResult=$(node ${TESTS_DIR}/SnowflakeTypes.js)

if [[ "${expectedResult}" != "${actualResult}" ]]; then
    printf "SnowflakeTypes error!\n"
    printf "Expected result is:\n ${expectedResult}\n\n"
    printf "Actual result is:\n ${actualResult}\n\n"
    exit 1;
fi

printf "e2e tests passed successfully!\n"
exit 0;
