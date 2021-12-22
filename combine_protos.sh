#!/bin/bash

function copy() {
    mkdir -p `dirname $2`
    cp $1 $2
}

copy bazel-bin/external/com_google_protobuf/_virtual_imports/descriptor_proto/google/protobuf/descriptor.proto protos/zetasql/descriptor_proto/google/protobuf/descriptor.proto
copy bazel-bin/external/com_google_protobuf/_virtual_imports/empty_proto/google/protobuf/empty.proto protos/zetasql/empty_proto/google/protobuf/empty.proto
copy bazel-bin/external/com_google_protobuf/_virtual_imports/timestamp_proto/google/protobuf/timestamp.proto protos/zetasql/timestamp_proto/google/protobuf/timestamp.proto
copy bazel-bin/zetasql/resolved_ast/_virtual_imports/resolved_ast_proto/zetasql/resolved_ast/resolved_ast.proto protos/zetasql/resolved_ast/resolved_ast.proto
copy bazel-bin/zetasql/resolved_ast/_virtual_imports/resolved_node_kind_proto/zetasql/resolved_ast/resolved_node_kind.proto protos/zetasql/resolved_ast/resolved_node_kind.proto
copy bazel-bin/zetasql/parser/parse_tree.proto protos/zetasql/parser/parse_tree.proto
copy zetasql/parser/ast_enums.proto protos/zetasql/parser/ast_enums.proto
copy zetasql/local_service/local_service.proto protos/local_service.proto
copy zetasql/proto/function.proto protos/zetasql/proto/function.proto
copy zetasql/proto/options.proto protos/zetasql/proto/options.proto
copy zetasql/proto/simple_catalog.proto protos/zetasql/proto/simple_catalog.proto
copy zetasql/public/annotation.proto protos/zetasql/public/annotation.proto
copy zetasql/public/builtin_function.proto protos/zetasql/public/builtin_function.proto
copy zetasql/public/deprecation_warning.proto protos/zetasql/public/deprecation_warning.proto
copy zetasql/public/error_location.proto protos/zetasql/public/error_location.proto
copy zetasql/public/function.proto protos/zetasql/public/function.proto
copy zetasql/public/options.proto protos/zetasql/public/options.proto
copy zetasql/public/parse_location_range.proto protos/zetasql/public/parse_location_range.proto
copy zetasql/public/parse_resume_location.proto protos/zetasql/public/parse_resume_location.proto
copy zetasql/public/proto/type_annotation.proto protos/zetasql/public/proto/type_annotation.proto
copy zetasql/public/proto/wire_format_annotation.proto protos/zetasql/public/proto/wire_format_annotation.proto
copy zetasql/public/simple_constant.proto protos/zetasql/public/simple_constant.proto
copy zetasql/public/simple_table.proto protos/zetasql/public/simple_table.proto
copy zetasql/public/simple_value.proto protos/zetasql/public/simple_value.proto
copy zetasql/public/type_annotation.proto protos/zetasql/public/type_annotation.proto
copy zetasql/public/type_parameters.proto protos/zetasql/public/type_parameters.proto
copy zetasql/public/type.proto protos/zetasql/public/type.proto
copy zetasql/public/value.proto protos/zetasql/public/value.proto
copy zetasql/resolved_ast/resolved_ast_enums.proto protos/zetasql/resolved_ast/resolved_ast_enums.proto
copy zetasql/resolved_ast/serialization.proto protos/zetasql/resolved_ast/serialization.proto
chmod -R 755 protos
