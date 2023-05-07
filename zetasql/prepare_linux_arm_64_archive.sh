#!/bin/bash

cp ../../zetasql/out/linux/arm64/remote_server_executable remote_server_arm.so
tar -zcf bin/linux-arm-64/remote_server_arm.so.tar.gz remote_server_arm.so
rm remote_server_arm.so
