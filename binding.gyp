{
  "targets": [
    {
      "target_name": "server",
      "sources": [ "server.cc" ],
      "conditions": [
        ["OS==\"linux\"", {
          "libraries": [
            "-Wl,-rpath,'$$ORIGIN'",
            "-L./Release/ -lremote_server",
          ],
        }],
        ["OS==\"mac\"", {
          "libraries": [
            "-lremote_server",
            "-Wl,-rpath,@loader_path",
          ],
        }],
      ],
    },
    {
      "target_name": "copy_zetasql_before_build",
      "type": "none",
      "copies": [{
        "files": [
          "<(module_root_dir)/zetasql/linux-x86-64/libremote_server.so",
          "<(module_root_dir)/zetasql/darwin-x86-64/libremote_server.dylib"
        ],
        "destination": "<(PRODUCT_DIR)",
      }],
    },
  ],
}
