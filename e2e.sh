#!/bin/bash

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

# TODO: fix this test on mac
# expectedResult="Running server on 0.0.0.0:50005...
# Server listening on 0.0.0.0:50005
# Tests passed"
# actualResult=$(node lib/test/ManyJoins.js)

# if [[ "${expectedResult}" != "${actualResult}" ]]; then
#     printf "TestQuery error!\n"
#     printf "Expected result is:\n ${expectedResult}\n\n"
#     printf "Actual result is:\n ${actualResult}\n\n"
#     exit 1;
# fi

printf "e2e tests passed successfully!\n"
exit 0;
