#!/bin/bash

cp ../zetasql/out/libremote_server_arm.so libremote_server_arm.so
tar -zcf zetasql/linux-arm-64/libremote_server_arm.so.tar.gz libremote_server_arm.so
rm libremote_server_arm.so
