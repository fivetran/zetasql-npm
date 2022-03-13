#!/bin/bash

expectedResult="Running server on 0.0.0.0:50005...
Server listening on 0.0.0.0:50005
Init...
Testing...
Tests passed
Terminating..."

actualResult=$(node lib/TestZetaSqlServer.js)
if [[ "${expectedResult}" == "${actualResult}" ]]; then
    printf "e2e test passed successfully!"
    exit 0;
fi

printf "e2e test error!"
printf "Expected result is:\n ${expectedResult}\n\n"
printf "Actual result is:\n ${actualResult}\n\n"
exit 1;
