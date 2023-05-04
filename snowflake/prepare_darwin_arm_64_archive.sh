#!/bin/bash

cp ../../zetasql-snowflake/bazel-bin/zetasql/local_service/remote_server_executable remote_server_arm
tar -zcf bin/darwin-arm-64/remote_server_arm.tar.gz remote_server_arm
rm remote_server_arm
