#!/bin/bash

cp ../../zetasql-snowflake/bazel-bin/zetasql/local_service/libremote_server.dylib libremote_server_arm.dylib
install_name_tool -id "@loader_path/libremote_server_arm.dylib" libremote_server_arm.dylib
tar -zcf snowflake-bin/darwin-arm-64/libremote_server_arm.dylib.tar.gz libremote_server_arm.dylib
rm libremote_server_arm.dylib
