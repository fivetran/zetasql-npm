// Original file: src/zetasql/protos/zetasql/public/options.proto

import type { Long } from '@grpc/proto-loader';

export interface GroupingSetRewriteOptions {
  'maxGroupingSets'?: (number | string | Long);
  'maxColumnsInGroupingSet'?: (number | string | Long);
}

export interface GroupingSetRewriteOptions__Output {
  'maxGroupingSets': (Long);
  'maxColumnsInGroupingSet': (Long);
}
