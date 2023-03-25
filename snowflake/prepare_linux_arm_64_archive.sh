#!/bin/bash

cp ../../zetasql/out/linux/arm64/libremote_server.so libremote_server_arm.so
tar -zcf snowflake-bin/linux-arm-64/libremote_server_arm.so.tar.gz libremote_server_arm.so
rm libremote_server_arm.so
