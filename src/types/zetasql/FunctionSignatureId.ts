// Original file: src/protos/zetasql/public/builtin_function.proto

export enum FunctionSignatureId {
  __FunctionSignatureId__switch_must_have_a_default__ = -1,
  FN_INVALID_FUNCTION_ID = 1,
  FN_ADD_DOUBLE = 2,
  FN_ADD_INT64 = 4,
  FN_ADD_UINT64 = 119,
  FN_ADD_NUMERIC = 248,
  FN_ADD_BIGNUMERIC = 261,
  FN_ADD_DATE_INT64 = 266,
  FN_ADD_INT64_DATE = 267,
  FN_ADD_TIMESTAMP_INTERVAL = 280,
  FN_ADD_INTERVAL_TIMESTAMP = 281,
  FN_ADD_DATE_INTERVAL = 282,
  FN_ADD_INTERVAL_DATE = 283,
  FN_ADD_DATETIME_INTERVAL = 284,
  FN_ADD_INTERVAL_DATETIME = 285,
  FN_ADD_INTERVAL_INTERVAL = 289,
  FN_AND = 5,
  FN_CASE_NO_VALUE = 6,
  FN_CASE_WITH_VALUE = 7,
  FN_DIVIDE_DOUBLE = 40,
  FN_DIVIDE_NUMERIC = 250,
  FN_DIVIDE_BIGNUMERIC = 263,
  FN_DIVIDE_INTERVAL_INT64 = 301,
  FN_GREATER = 107,
  FN_GREATER_INT64_UINT64 = 222,
  FN_GREATER_UINT64_INT64 = 223,
  FN_GREATER_OR_EQUAL = 108,
  FN_GREATER_OR_EQUAL_INT64_UINT64 = 224,
  FN_GREATER_OR_EQUAL_UINT64_INT64 = 225,
  FN_LESS = 105,
  FN_LESS_INT64_UINT64 = 226,
  FN_LESS_UINT64_INT64 = 227,
  FN_LESS_OR_EQUAL = 106,
  FN_LESS_OR_EQUAL_INT64_UINT64 = 228,
  FN_LESS_OR_EQUAL_UINT64_INT64 = 229,
  FN_EQUAL = 42,
  FN_EQUAL_INT64_UINT64 = 230,
  FN_EQUAL_UINT64_INT64 = 231,
  FN_STRING_ARRAY_LIKE_ANY = 291,
  FN_STRING_ARRAY_LIKE_ALL = 292,
  FN_STRING_LIKE = 97,
  FN_STRING_LIKE_ANY = 293,
  FN_STRING_LIKE_ALL = 294,
  FN_BYTE_ARRAY_LIKE_ANY = 295,
  FN_BYTE_ARRAY_LIKE_ALL = 296,
  FN_BYTE_LIKE = 98,
  FN_BYTE_LIKE_ANY = 297,
  FN_BYTE_LIKE_ALL = 298,
  FN_IN = 100,
  FN_IN_ARRAY = 219,
  FN_BETWEEN = 110,
  FN_BETWEEN_INT64_UINT64_UINT64 = 254,
  FN_BETWEEN_INT64_UINT64_INT64 = 255,
  FN_BETWEEN_INT64_INT64_UINT64 = 256,
  FN_BETWEEN_UINT64_INT64_INT64 = 257,
  FN_BETWEEN_UINT64_UINT64_INT64 = 258,
  FN_BETWEEN_UINT64_INT64_UINT64 = 259,
  FN_IS_NULL = 101,
  FN_IS_TRUE = 102,
  FN_IS_FALSE = 103,
  FN_MULTIPLY_DOUBLE = 41,
  FN_MULTIPLY_INT64 = 44,
  FN_MULTIPLY_UINT64 = 114,
  FN_MULTIPLY_NUMERIC = 251,
  FN_MULTIPLY_BIGNUMERIC = 264,
  FN_MULTIPLY_INTERVAL_INT64 = 299,
  FN_MULTIPLY_INT64_INTERVAL = 300,
  FN_NOT = 45,
  FN_NOT_EQUAL = 109,
  FN_NOT_EQUAL_INT64_UINT64 = 232,
  FN_NOT_EQUAL_UINT64_INT64 = 233,
  FN_OR = 46,
  FN_SUBTRACT_DOUBLE = 115,
  FN_SUBTRACT_INT64 = 48,
  FN_SUBTRACT_UINT64 = 117,
  FN_SUBTRACT_NUMERIC = 249,
  FN_SUBTRACT_BIGNUMERIC = 262,
  FN_SUBTRACT_DATE_INT64 = 268,
  FN_SUBTRACT_DATE = 276,
  FN_SUBTRACT_TIMESTAMP = 277,
  FN_SUBTRACT_DATETIME = 278,
  FN_SUBTRACT_TIME = 279,
  FN_SUBTRACT_TIMESTAMP_INTERVAL = 286,
  FN_SUBTRACT_DATE_INTERVAL = 287,
  FN_SUBTRACT_DATETIME_INTERVAL = 288,
  FN_SUBTRACT_INTERVAL_INTERVAL = 290,
  FN_UNARY_MINUS_INT32 = 83,
  FN_UNARY_MINUS_INT64 = 84,
  FN_UNARY_MINUS_FLOAT = 87,
  FN_UNARY_MINUS_DOUBLE = 88,
  FN_UNARY_MINUS_NUMERIC = 252,
  FN_UNARY_MINUS_BIGNUMERIC = 265,
  FN_UNARY_MINUS_INTERVAL = 275,
  FN_DISTINCT = 269,
  FN_DISTINCT_INT64_UINT64 = 270,
  FN_DISTINCT_UINT64_INT64 = 271,
  FN_NOT_DISTINCT = 272,
  FN_NOT_DISTINCT_INT64_UINT64 = 273,
  FN_NOT_DISTINCT_UINT64_INT64 = 274,
  FN_BITWISE_NOT_INT32 = 120,
  FN_BITWISE_NOT_INT64 = 121,
  FN_BITWISE_NOT_UINT32 = 122,
  FN_BITWISE_NOT_UINT64 = 123,
  FN_BITWISE_NOT_BYTES = 241,
  FN_BITWISE_OR_INT32 = 124,
  FN_BITWISE_OR_INT64 = 125,
  FN_BITWISE_OR_UINT32 = 126,
  FN_BITWISE_OR_UINT64 = 127,
  FN_BITWISE_OR_BYTES = 242,
  FN_BITWISE_XOR_INT32 = 128,
  FN_BITWISE_XOR_INT64 = 129,
  FN_BITWISE_XOR_UINT32 = 130,
  FN_BITWISE_XOR_UINT64 = 131,
  FN_BITWISE_XOR_BYTES = 243,
  FN_BITWISE_AND_INT32 = 132,
  FN_BITWISE_AND_INT64 = 133,
  FN_BITWISE_AND_UINT32 = 134,
  FN_BITWISE_AND_UINT64 = 135,
  FN_BITWISE_AND_BYTES = 244,
  FN_BITWISE_LEFT_SHIFT_INT32 = 136,
  FN_BITWISE_LEFT_SHIFT_INT64 = 137,
  FN_BITWISE_LEFT_SHIFT_UINT32 = 138,
  FN_BITWISE_LEFT_SHIFT_UINT64 = 139,
  FN_BITWISE_LEFT_SHIFT_BYTES = 245,
  FN_BITWISE_RIGHT_SHIFT_INT32 = 140,
  FN_BITWISE_RIGHT_SHIFT_INT64 = 141,
  FN_BITWISE_RIGHT_SHIFT_UINT32 = 142,
  FN_BITWISE_RIGHT_SHIFT_UINT64 = 143,
  FN_BITWISE_RIGHT_SHIFT_BYTES = 246,
  FN_BIT_COUNT_INT32 = 144,
  FN_BIT_COUNT_INT64 = 145,
  FN_BIT_COUNT_UINT64 = 146,
  FN_BIT_COUNT_BYTES = 247,
  FN_TYPEOF = 1699,
  FN_ERROR = 253,
  FN_COUNT_STAR = 57,
  FN_CONCAT_STRING = 1000,
  FN_CONCAT_BYTES = 1001,
  FN_CONCAT_OP_STRING = 1063,
  FN_CONCAT_OP_BYTES = 1064,
  FN_STRPOS_STRING = 1002,
  FN_STRPOS_BYTES = 1003,
  FN_INSTR_STRING = 1070,
  FN_INSTR_BYTES = 1071,
  FN_LOWER_STRING = 1006,
  FN_LOWER_BYTES = 1007,
  FN_UPPER_STRING = 1008,
  FN_UPPER_BYTES = 1009,
  FN_LENGTH_STRING = 1010,
  FN_LENGTH_BYTES = 1011,
  FN_STARTS_WITH_STRING = 1012,
  FN_STARTS_WITH_BYTES = 1013,
  FN_ENDS_WITH_STRING = 1014,
  FN_ENDS_WITH_BYTES = 1015,
  FN_SUBSTR_STRING = 1016,
  FN_SUBSTR_BYTES = 1017,
  FN_TRIM_STRING = 1018,
  FN_TRIM_BYTES = 1019,
  FN_LTRIM_STRING = 1020,
  FN_LTRIM_BYTES = 1021,
  FN_RTRIM_STRING = 1022,
  FN_RTRIM_BYTES = 1023,
  FN_REPLACE_STRING = 1024,
  FN_REPLACE_BYTES = 1025,
  FN_REGEXP_MATCH_STRING = 1026,
  FN_REGEXP_MATCH_BYTES = 1027,
  FN_REGEXP_EXTRACT_STRING = 1028,
  FN_REGEXP_EXTRACT_BYTES = 1029,
  FN_REGEXP_REPLACE_STRING = 1030,
  FN_REGEXP_REPLACE_BYTES = 1031,
  FN_REGEXP_EXTRACT_ALL_STRING = 1032,
  FN_REGEXP_EXTRACT_ALL_BYTES = 1033,
  FN_BYTE_LENGTH_STRING = 1034,
  FN_BYTE_LENGTH_BYTES = 1035,
  FN_CHAR_LENGTH_STRING = 1036,
  FN_FORMAT_STRING = 1037,
  FN_SPLIT_STRING = 1038,
  FN_SPLIT_BYTES = 1039,
  FN_REGEXP_CONTAINS_STRING = 1040,
  FN_REGEXP_CONTAINS_BYTES = 1041,
  FN_SAFE_CONVERT_BYTES_TO_STRING = 1042,
  FN_NORMALIZE_STRING = 1043,
  FN_NORMALIZE_AND_CASEFOLD_STRING = 1044,
  FN_TO_BASE64 = 1045,
  FN_FROM_BASE64 = 1046,
  FN_TO_HEX = 1059,
  FN_FROM_HEX = 1060,
  FN_TO_BASE32 = 1061,
  FN_FROM_BASE32 = 1062,
  FN_TO_CODE_POINTS_STRING = 1047,
  FN_TO_CODE_POINTS_BYTES = 1048,
  FN_CODE_POINTS_TO_STRING = 1049,
  FN_CODE_POINTS_TO_BYTES = 1050,
  FN_LPAD_BYTES = 1051,
  FN_LPAD_STRING = 1052,
  FN_RPAD_BYTES = 1053,
  FN_RPAD_STRING = 1054,
  FN_LEFT_STRING = 1065,
  FN_LEFT_BYTES = 1066,
  FN_RIGHT_STRING = 1067,
  FN_RIGHT_BYTES = 1068,
  FN_REPEAT_BYTES = 1055,
  FN_REPEAT_STRING = 1056,
  FN_REVERSE_STRING = 1057,
  FN_REVERSE_BYTES = 1058,
  FN_SOUNDEX_STRING = 1069,
  FN_ASCII_STRING = 1072,
  FN_ASCII_BYTES = 1073,
  FN_TRANSLATE_STRING = 1074,
  FN_TRANSLATE_BYTES = 1075,
  FN_INITCAP_STRING = 1076,
  FN_UNICODE_STRING = 1077,
  FN_CHR_STRING = 1078,
  FN_COLLATE = 1082,
  FN_REGEXP_INSTR_STRING = 1079,
  FN_REGEXP_INSTR_BYTES = 1080,
  FN_IF = 1100,
  FN_COALESCE = 1101,
  FN_IFNULL = 1102,
  FN_NULLIF = 1103,
  FN_CURRENT_DATE = 1200,
  FN_CURRENT_DATETIME = 1804,
  FN_CURRENT_TIME = 1805,
  FN_CURRENT_TIMESTAMP = 1260,
  FN_DATE_ADD_DATE = 1205,
  FN_DATETIME_ADD = 1812,
  FN_TIME_ADD = 1813,
  FN_TIMESTAMP_ADD = 1261,
  FN_DATE_DIFF_DATE = 1210,
  FN_DATETIME_DIFF = 1816,
  FN_TIME_DIFF = 1817,
  FN_TIMESTAMP_DIFF = 1262,
  FN_DATE_SUB_DATE = 1215,
  FN_DATETIME_SUB = 1814,
  FN_TIME_SUB = 1815,
  FN_TIMESTAMP_SUB = 1263,
  FN_DATE_TRUNC_DATE = 1220,
  FN_DATETIME_TRUNC = 1818,
  FN_TIME_TRUNC = 1819,
  FN_TIMESTAMP_TRUNC = 1264,
  FN_DATE_FROM_UNIX_DATE = 1225,
  FN_TIMESTAMP_FROM_INT64_SECONDS = 1289,
  FN_TIMESTAMP_FROM_INT64_MILLIS = 1290,
  FN_TIMESTAMP_FROM_INT64_MICROS = 1291,
  FN_TIMESTAMP_FROM_UNIX_SECONDS_INT64 = 1827,
  FN_TIMESTAMP_FROM_UNIX_SECONDS_TIMESTAMP = 1828,
  FN_TIMESTAMP_FROM_UNIX_MILLIS_INT64 = 1829,
  FN_TIMESTAMP_FROM_UNIX_MILLIS_TIMESTAMP = 1830,
  FN_TIMESTAMP_FROM_UNIX_MICROS_INT64 = 1831,
  FN_TIMESTAMP_FROM_UNIX_MICROS_TIMESTAMP = 1832,
  FN_UNIX_DATE = 1230,
  FN_UNIX_SECONDS_FROM_TIMESTAMP = 1268,
  FN_UNIX_MILLIS_FROM_TIMESTAMP = 1269,
  FN_UNIX_MICROS_FROM_TIMESTAMP = 1270,
  FN_DATE_FROM_TIMESTAMP = 1271,
  FN_DATE_FROM_DATETIME = 1826,
  FN_DATE_FROM_DATE = 1833,
  FN_DATE_FROM_STRING = 1837,
  FN_DATE_FROM_YEAR_MONTH_DAY = 1297,
  FN_TIMESTAMP_FROM_STRING = 1272,
  FN_TIMESTAMP_FROM_DATE = 1273,
  FN_TIMESTAMP_FROM_DATETIME = 1801,
  FN_TIMESTAMP_FROM_TIMESTAMP = 1834,
  FN_TIME_FROM_HOUR_MINUTE_SECOND = 1298,
  FN_TIME_FROM_TIMESTAMP = 1802,
  FN_TIME_FROM_DATETIME = 1825,
  FN_TIME_FROM_TIME = 1836,
  FN_TIME_FROM_STRING = 1838,
  FN_DATETIME_FROM_DATE_AND_TIME = 1299,
  FN_DATETIME_FROM_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND = 1800,
  FN_DATETIME_FROM_TIMESTAMP = 1803,
  FN_DATETIME_FROM_DATE = 1824,
  FN_DATETIME_FROM_DATETIME = 1835,
  FN_DATETIME_FROM_STRING = 1839,
  FN_STRING_FROM_DATE = 1840,
  FN_STRING_FROM_TIMESTAMP = 1274,
  FN_STRING_FROM_DATETIME = 1841,
  FN_STRING_FROM_TIME = 1842,
  FN_EXTRACT_FROM_DATE = 1251,
  FN_EXTRACT_FROM_DATETIME = 1806,
  FN_EXTRACT_FROM_TIME = 1807,
  FN_EXTRACT_FROM_TIMESTAMP = 1275,
  FN_EXTRACT_FROM_INTERVAL = 1857,
  FN_EXTRACT_DATE_FROM_DATETIME = 1808,
  FN_EXTRACT_DATE_FROM_TIMESTAMP = 1276,
  FN_EXTRACT_TIME_FROM_DATETIME = 1809,
  FN_EXTRACT_TIME_FROM_TIMESTAMP = 1810,
  FN_EXTRACT_DATETIME_FROM_TIMESTAMP = 1811,
  FN_FORMAT_DATE = 1293,
  FN_FORMAT_DATETIME = 1820,
  FN_FORMAT_TIME = 1821,
  FN_FORMAT_TIMESTAMP = 1294,
  FN_PARSE_DATE = 1295,
  FN_PARSE_DATETIME = 1822,
  FN_PARSE_TIME = 1823,
  FN_PARSE_TIMESTAMP = 1296,
  FN_LAST_DAY_DATE = 1843,
  FN_LAST_DAY_DATETIME = 1844,
  FN_INTERVAL_CONSTRUCTOR = 1855,
  FN_MAKE_INTERVAL = 1856,
  FN_JUSTIFY_HOURS = 1858,
  FN_JUSTIFY_DAYS = 1859,
  FN_JUSTIFY_INTERVAL = 1860,
  FN_ABS_INT32 = 1300,
  FN_ABS_INT64 = 1301,
  FN_ABS_UINT32 = 1346,
  FN_ABS_UINT64 = 1347,
  FN_ABS_FLOAT = 1302,
  FN_ABS_DOUBLE = 1303,
  FN_ABS_NUMERIC = 1359,
  FN_ABS_BIGNUMERIC = 1395,
  FN_SIGN_INT32 = 1341,
  FN_SIGN_INT64 = 1342,
  FN_SIGN_UINT32 = 1356,
  FN_SIGN_UINT64 = 1357,
  FN_SIGN_FLOAT = 1343,
  FN_SIGN_DOUBLE = 1344,
  FN_SIGN_NUMERIC = 1360,
  FN_SIGN_BIGNUMERIC = 1396,
  FN_ROUND_DOUBLE = 1305,
  FN_ROUND_FLOAT = 1306,
  FN_ROUND_NUMERIC = 1363,
  FN_ROUND_BIGNUMERIC = 1397,
  FN_ROUND_WITH_DIGITS_DOUBLE = 1307,
  FN_ROUND_WITH_DIGITS_FLOAT = 1308,
  FN_ROUND_WITH_DIGITS_NUMERIC = 1364,
  FN_ROUND_WITH_DIGITS_BIGNUMERIC = 1398,
  FN_TRUNC_DOUBLE = 1309,
  FN_TRUNC_FLOAT = 1310,
  FN_TRUNC_NUMERIC = 1365,
  FN_TRUNC_BIGNUMERIC = 1399,
  FN_TRUNC_WITH_DIGITS_DOUBLE = 1311,
  FN_TRUNC_WITH_DIGITS_FLOAT = 1312,
  FN_TRUNC_WITH_DIGITS_NUMERIC = 1366,
  FN_TRUNC_WITH_DIGITS_BIGNUMERIC = 2300,
  FN_CEIL_DOUBLE = 1313,
  FN_CEIL_FLOAT = 1314,
  FN_CEIL_NUMERIC = 1368,
  FN_CEIL_BIGNUMERIC = 1393,
  FN_FLOOR_DOUBLE = 1315,
  FN_FLOOR_FLOAT = 1316,
  FN_FLOOR_NUMERIC = 1369,
  FN_FLOOR_BIGNUMERIC = 1394,
  FN_MOD_INT64 = 1349,
  FN_MOD_UINT64 = 1351,
  FN_MOD_NUMERIC = 1367,
  FN_MOD_BIGNUMERIC = 2301,
  FN_DIV_INT64 = 1353,
  FN_DIV_UINT64 = 1355,
  FN_DIV_NUMERIC = 1362,
  FN_DIV_BIGNUMERIC = 2302,
  FN_IS_INF = 1317,
  FN_IS_NAN = 1318,
  FN_IEEE_DIVIDE_DOUBLE = 1319,
  FN_IEEE_DIVIDE_FLOAT = 1320,
  FN_SAFE_DIVIDE_DOUBLE = 1358,
  FN_SAFE_DIVIDE_NUMERIC = 1361,
  FN_SAFE_DIVIDE_BIGNUMERIC = 1388,
  FN_SAFE_ADD_INT64 = 1371,
  FN_SAFE_ADD_UINT64 = 1372,
  FN_SAFE_ADD_DOUBLE = 1373,
  FN_SAFE_ADD_NUMERIC = 1374,
  FN_SAFE_ADD_BIGNUMERIC = 1389,
  FN_SAFE_SUBTRACT_INT64 = 1375,
  FN_SAFE_SUBTRACT_UINT64 = 1376,
  FN_SAFE_SUBTRACT_DOUBLE = 1377,
  FN_SAFE_SUBTRACT_NUMERIC = 1378,
  FN_SAFE_SUBTRACT_BIGNUMERIC = 1390,
  FN_SAFE_MULTIPLY_INT64 = 1379,
  FN_SAFE_MULTIPLY_UINT64 = 1380,
  FN_SAFE_MULTIPLY_DOUBLE = 1381,
  FN_SAFE_MULTIPLY_NUMERIC = 1382,
  FN_SAFE_MULTIPLY_BIGNUMERIC = 1391,
  FN_SAFE_UNARY_MINUS_INT32 = 1383,
  FN_SAFE_UNARY_MINUS_INT64 = 1384,
  FN_SAFE_UNARY_MINUS_FLOAT = 1385,
  FN_SAFE_UNARY_MINUS_DOUBLE = 1386,
  FN_SAFE_UNARY_MINUS_NUMERIC = 1387,
  FN_SAFE_UNARY_MINUS_BIGNUMERIC = 1392,
  FN_GREATEST = 1321,
  FN_LEAST = 1322,
  FN_SQRT_DOUBLE = 1323,
  FN_SQRT_NUMERIC = 2308,
  FN_SQRT_BIGNUMERIC = 2309,
  FN_POW_DOUBLE = 1324,
  FN_POW_NUMERIC = 1370,
  FN_POW_BIGNUMERIC = 2303,
  FN_EXP_DOUBLE = 1325,
  FN_EXP_NUMERIC = 2304,
  FN_EXP_BIGNUMERIC = 2305,
  FN_NATURAL_LOGARITHM_DOUBLE = 1326,
  FN_NATURAL_LOGARITHM_NUMERIC = 2306,
  FN_NATURAL_LOGARITHM_BIGNUMERIC = 2307,
  FN_DECIMAL_LOGARITHM_DOUBLE = 1345,
  FN_DECIMAL_LOGARITHM_NUMERIC = 2310,
  FN_DECIMAL_LOGARITHM_BIGNUMERIC = 2311,
  FN_LOGARITHM_DOUBLE = 1327,
  FN_LOGARITHM_NUMERIC = 2312,
  FN_LOGARITHM_BIGNUMERIC = 2313,
  FN_PARSE_NUMERIC = 2314,
  FN_PARSE_BIGNUMERIC = 2315,
  FN_COS_DOUBLE = 1328,
  FN_COSH_DOUBLE = 1329,
  FN_ACOS_DOUBLE = 1330,
  FN_ACOSH_DOUBLE = 1331,
  FN_SIN_DOUBLE = 1332,
  FN_SINH_DOUBLE = 1333,
  FN_ASIN_DOUBLE = 1334,
  FN_ASINH_DOUBLE = 1335,
  FN_TAN_DOUBLE = 1336,
  FN_TANH_DOUBLE = 1337,
  FN_ATAN_DOUBLE = 1338,
  FN_ATANH_DOUBLE = 1339,
  FN_ATAN2_DOUBLE = 1340,
  FN_ANY_VALUE = 1400,
  FN_ARRAY_AGG = 1401,
  FN_ARRAY_CONCAT_AGG = 1442,
  FN_AVG_INT64 = 1402,
  FN_AVG_UINT64 = 1403,
  FN_AVG_DOUBLE = 1404,
  FN_AVG_NUMERIC = 1468,
  FN_AVG_BIGNUMERIC = 1479,
  FN_AVG_INTERVAL = 1490,
  FN_COUNT = 1405,
  FN_MAX = 1406,
  FN_MIN = 1407,
  FN_STRING_AGG_STRING = 1408,
  FN_STRING_AGG_DELIM_STRING = 1409,
  FN_STRING_AGG_BYTES = 1413,
  FN_STRING_AGG_DELIM_BYTES = 1414,
  FN_SUM_INT64 = 1410,
  FN_SUM_UINT64 = 1411,
  FN_SUM_DOUBLE = 1412,
  FN_SUM_NUMERIC = 1467,
  FN_SUM_BIGNUMERIC = 1478,
  FN_SUM_INTERVAL = 1489,
  FN_BIT_AND_INT32 = 1415,
  FN_BIT_AND_INT64 = 1416,
  FN_BIT_AND_UINT32 = 1417,
  FN_BIT_AND_UINT64 = 1418,
  FN_BIT_OR_INT32 = 1419,
  FN_BIT_OR_INT64 = 1420,
  FN_BIT_OR_UINT32 = 1421,
  FN_BIT_OR_UINT64 = 1422,
  FN_BIT_XOR_INT32 = 1423,
  FN_BIT_XOR_INT64 = 1424,
  FN_BIT_XOR_UINT32 = 1425,
  FN_BIT_XOR_UINT64 = 1426,
  FN_LOGICAL_AND = 1427,
  FN_LOGICAL_OR = 1428,
  FN_APPROX_COUNT_DISTINCT = 1429,
  FN_APPROX_QUANTILES = 1430,
  FN_APPROX_TOP_COUNT = 1431,
  FN_APPROX_TOP_SUM_INT64 = 1432,
  FN_APPROX_TOP_SUM_UINT64 = 1433,
  FN_APPROX_TOP_SUM_DOUBLE = 1434,
  FN_APPROX_TOP_SUM_NUMERIC = 1469,
  FN_APPROX_TOP_SUM_BIGNUMERIC = 1480,
  FN_HLL_COUNT_MERGE = 1444,
  FN_HLL_COUNT_EXTRACT = 1445,
  FN_HLL_COUNT_INIT_INT64 = 1446,
  FN_HLL_COUNT_INIT_UINT64 = 1447,
  FN_HLL_COUNT_INIT_NUMERIC = 1470,
  FN_HLL_COUNT_INIT_BIGNUMERIC = 1481,
  FN_HLL_COUNT_INIT_STRING = 1448,
  FN_HLL_COUNT_INIT_BYTES = 1449,
  FN_HLL_COUNT_MERGE_PARTIAL = 1450,
  FN_CORR = 1435,
  FN_CORR_NUMERIC = 1471,
  FN_CORR_BIGNUMERIC = 1488,
  FN_COVAR_POP = 1436,
  FN_COVAR_POP_NUMERIC = 1472,
  FN_COVAR_POP_BIGNUMERIC = 1486,
  FN_COVAR_SAMP = 1437,
  FN_COVAR_SAMP_NUMERIC = 1473,
  FN_COVAR_SAMP_BIGNUMERIC = 1487,
  FN_STDDEV_POP = 1438,
  FN_STDDEV_POP_NUMERIC = 1474,
  FN_STDDEV_POP_BIGNUMERIC = 1482,
  FN_STDDEV_SAMP = 1439,
  FN_STDDEV_SAMP_NUMERIC = 1475,
  FN_STDDEV_SAMP_BIGNUMERIC = 1483,
  FN_VAR_POP = 1440,
  FN_VAR_POP_NUMERIC = 1476,
  FN_VAR_POP_BIGNUMERIC = 1484,
  FN_VAR_SAMP = 1441,
  FN_VAR_SAMP_NUMERIC = 1477,
  FN_VAR_SAMP_BIGNUMERIC = 1485,
  FN_COUNTIF = 1443,
  FN_KLL_QUANTILES_INIT_INT64 = 1451,
  FN_KLL_QUANTILES_INIT_UINT64 = 1452,
  FN_KLL_QUANTILES_INIT_DOUBLE = 1453,
  FN_KLL_QUANTILES_MERGE_PARTIAL = 1454,
  FN_KLL_QUANTILES_MERGE_INT64 = 1455,
  FN_KLL_QUANTILES_MERGE_UINT64 = 1456,
  FN_KLL_QUANTILES_MERGE_DOUBLE = 1457,
  FN_KLL_QUANTILES_EXTRACT_INT64 = 1458,
  FN_KLL_QUANTILES_EXTRACT_UINT64 = 1459,
  FN_KLL_QUANTILES_EXTRACT_DOUBLE = 1460,
  FN_KLL_QUANTILES_MERGE_POINT_INT64 = 1461,
  FN_KLL_QUANTILES_MERGE_POINT_UINT64 = 1462,
  FN_KLL_QUANTILES_MERGE_POINT_DOUBLE = 1463,
  FN_KLL_QUANTILES_EXTRACT_POINT_INT64 = 1464,
  FN_KLL_QUANTILES_EXTRACT_POINT_UINT64 = 1465,
  FN_KLL_QUANTILES_EXTRACT_POINT_DOUBLE = 1466,
  FN_DENSE_RANK = 1500,
  FN_RANK = 1501,
  FN_ROW_NUMBER = 1502,
  FN_PERCENT_RANK = 1503,
  FN_CUME_DIST = 1504,
  FN_NTILE = 1505,
  FN_LEAD = 1506,
  FN_LAG = 1507,
  FN_FIRST_VALUE = 1508,
  FN_LAST_VALUE = 1509,
  FN_NTH_VALUE = 1510,
  FN_PERCENTILE_CONT = 1511,
  FN_PERCENTILE_CONT_NUMERIC = 1513,
  FN_PERCENTILE_CONT_BIGNUMERIC = 1515,
  FN_PERCENTILE_DISC = 1512,
  FN_PERCENTILE_DISC_NUMERIC = 1514,
  FN_PERCENTILE_DISC_BIGNUMERIC = 1516,
  FN_BIT_CAST_INT32_TO_INT32 = 1604,
  FN_BIT_CAST_UINT32_TO_INT32 = 1605,
  FN_BIT_CAST_INT64_TO_INT64 = 1606,
  FN_BIT_CAST_UINT64_TO_INT64 = 1607,
  FN_BIT_CAST_UINT32_TO_UINT32 = 1608,
  FN_BIT_CAST_INT32_TO_UINT32 = 1609,
  FN_BIT_CAST_UINT64_TO_UINT64 = 1610,
  FN_BIT_CAST_INT64_TO_UINT64 = 1611,
  FN_SESSION_USER = 1612,
  FN_GENERATE_ARRAY_INT64 = 1613,
  FN_GENERATE_ARRAY_UINT64 = 1614,
  FN_GENERATE_ARRAY_NUMERIC = 1625,
  FN_GENERATE_ARRAY_BIGNUMERIC = 1683,
  FN_GENERATE_ARRAY_DOUBLE = 1615,
  FN_GENERATE_DATE_ARRAY = 1616,
  FN_GENERATE_TIMESTAMP_ARRAY = 1617,
  FN_ARRAY_REVERSE = 1621,
  FN_RANGE_BUCKET = 1680,
  FN_RAND = 1618,
  FN_GENERATE_UUID = 1679,
  FN_JSON_EXTRACT = 1619,
  FN_JSON_EXTRACT_JSON = 1684,
  FN_JSON_EXTRACT_SCALAR = 1620,
  FN_JSON_EXTRACT_SCALAR_JSON = 1685,
  FN_JSON_EXTRACT_ARRAY = 1681,
  FN_JSON_EXTRACT_ARRAY_JSON = 1691,
  FN_JSON_EXTRACT_STRING_ARRAY = 1688,
  FN_JSON_EXTRACT_STRING_ARRAY_JSON = 1692,
  FN_JSON_QUERY_ARRAY = 1693,
  FN_JSON_QUERY_ARRAY_JSON = 1694,
  FN_JSON_VALUE_ARRAY = 1695,
  FN_JSON_VALUE_ARRAY_JSON = 1696,
  FN_JSON_SUBSCRIPT_INT64 = 1689,
  FN_JSON_SUBSCRIPT_STRING = 1690,
  FN_TO_JSON_STRING = 1622,
  FN_TO_JSON = 1697,
  FN_JSON_QUERY = 1623,
  FN_JSON_QUERY_JSON = 1686,
  FN_JSON_VALUE = 1624,
  FN_JSON_VALUE_JSON = 1687,
  FN_PARSE_JSON = 1698,
  FN_FROM_PROTO_TIMESTAMP = 1626,
  FN_FROM_PROTO_DATE = 1627,
  FN_FROM_PROTO_TIME_OF_DAY = 1628,
  FN_FROM_PROTO_DOUBLE = 1630,
  FN_FROM_PROTO_FLOAT = 1631,
  FN_FROM_PROTO_INT64 = 1632,
  FN_FROM_PROTO_UINT64 = 1633,
  FN_FROM_PROTO_INT32 = 1634,
  FN_FROM_PROTO_UINT32 = 1635,
  FN_FROM_PROTO_BOOL = 1636,
  FN_FROM_PROTO_BYTES = 1637,
  FN_FROM_PROTO_STRING = 1638,
  FN_FROM_PROTO_IDEMPOTENT_TIMESTAMP = 1639,
  FN_FROM_PROTO_IDEMPOTENT_DATE = 1640,
  FN_FROM_PROTO_IDEMPOTENT_TIME = 1641,
  FN_FROM_PROTO_IDEMPOTENT_DOUBLE = 1643,
  FN_FROM_PROTO_IDEMPOTENT_FLOAT = 1644,
  FN_FROM_PROTO_IDEMPOTENT_INT64 = 1645,
  FN_FROM_PROTO_IDEMPOTENT_UINT64 = 1646,
  FN_FROM_PROTO_IDEMPOTENT_INT32 = 1647,
  FN_FROM_PROTO_IDEMPOTENT_UINT32 = 1648,
  FN_FROM_PROTO_IDEMPOTENT_BOOL = 1649,
  FN_FROM_PROTO_IDEMPOTENT_BYTES = 1650,
  FN_FROM_PROTO_IDEMPOTENT_STRING = 1651,
  FN_TO_PROTO_TIMESTAMP = 1652,
  FN_TO_PROTO_DATE = 1653,
  FN_TO_PROTO_TIME = 1654,
  FN_TO_PROTO_DOUBLE = 1656,
  FN_TO_PROTO_FLOAT = 1657,
  FN_TO_PROTO_INT64 = 1658,
  FN_TO_PROTO_UINT64 = 1659,
  FN_TO_PROTO_INT32 = 1660,
  FN_TO_PROTO_UINT32 = 1661,
  FN_TO_PROTO_BOOL = 1662,
  FN_TO_PROTO_BYTES = 1663,
  FN_TO_PROTO_STRING = 1664,
  FN_TO_PROTO_IDEMPOTENT_TIMESTAMP = 1665,
  FN_TO_PROTO_IDEMPOTENT_DATE = 1666,
  FN_TO_PROTO_IDEMPOTENT_TIME_OF_DAY = 1667,
  FN_TO_PROTO_IDEMPOTENT_DOUBLE = 1669,
  FN_TO_PROTO_IDEMPOTENT_FLOAT = 1670,
  FN_TO_PROTO_IDEMPOTENT_INT64 = 1671,
  FN_TO_PROTO_IDEMPOTENT_UINT64 = 1672,
  FN_TO_PROTO_IDEMPOTENT_INT32 = 1673,
  FN_TO_PROTO_IDEMPOTENT_UINT32 = 1674,
  FN_TO_PROTO_IDEMPOTENT_BOOL = 1675,
  FN_TO_PROTO_IDEMPOTENT_BYTES = 1676,
  FN_TO_PROTO_IDEMPOTENT_STRING = 1677,
  FN_PROTO_DEFAULT_IF_NULL = 1678,
  FN_ENUM_VALUE_DESCRIPTOR_PROTO = 1682,
  FN_NET_FORMAT_IP = 1700,
  FN_NET_PARSE_IP = 1701,
  FN_NET_FORMAT_PACKED_IP = 1702,
  FN_NET_PARSE_PACKED_IP = 1703,
  FN_NET_IP_IN_NET = 1704,
  FN_NET_MAKE_NET = 1705,
  FN_NET_HOST = 1706,
  FN_NET_REG_DOMAIN = 1707,
  FN_NET_PUBLIC_SUFFIX = 1708,
  FN_NET_IP_FROM_STRING = 1709,
  FN_NET_SAFE_IP_FROM_STRING = 1710,
  FN_NET_IP_TO_STRING = 1711,
  FN_NET_IP_NET_MASK = 1712,
  FN_NET_IP_TRUNC = 1713,
  FN_NET_IPV4_FROM_INT64 = 1714,
  FN_NET_IPV4_TO_INT64 = 1715,
  FN_MD5_BYTES = 1900,
  FN_MD5_STRING = 1901,
  FN_SHA1_BYTES = 1902,
  FN_SHA1_STRING = 1903,
  FN_SHA256_BYTES = 1904,
  FN_SHA256_STRING = 1905,
  FN_SHA512_BYTES = 1906,
  FN_SHA512_STRING = 1907,
  FN_FARM_FINGERPRINT_BYTES = 1908,
  FN_FARM_FINGERPRINT_STRING = 1909,
  FN_KEYS_NEW_KEYSET = 1910,
  FN_KEYS_ADD_KEY_FROM_RAW_BYTES = 1911,
  FN_KEYS_ROTATE_KEYSET = 1912,
  FN_KEYS_KEYSET_LENGTH = 1913,
  FN_KEYS_KEYSET_TO_JSON = 1914,
  FN_KEYS_KEYSET_FROM_JSON = 1915,
  FN_KEYS_KEYSET_CHAIN_STRING_BYTES_BYTES = 1928,
  FN_KEYS_KEYSET_CHAIN_STRING_BYTES = 1929,
  FN_KMS_ENCRYPT_STRING = 1920,
  FN_KMS_ENCRYPT_BYTES = 1921,
  FN_KMS_DECRYPT_STRING = 1922,
  FN_KMS_DECRYPT_BYTES = 1923,
  FN_AEAD_ENVELOPE_ENCRYPT_STRING = 1924,
  FN_AEAD_ENVELOPE_ENCRYPT_BYTES = 1925,
  FN_AEAD_ENVELOPE_DECRYPT_STRING = 1926,
  FN_AEAD_ENVELOPE_DECRYPT_BYTES = 1927,
  FN_AEAD_ENCRYPT_STRING = 1916,
  FN_AEAD_ENCRYPT_BYTES = 1917,
  FN_AEAD_ENCRYPT_STRUCT_STRING = 1930,
  FN_AEAD_ENCRYPT_STRUCT_BYTES = 1931,
  FN_AEAD_DECRYPT_STRING = 1918,
  FN_AEAD_DECRYPT_BYTES = 1919,
  FN_AEAD_DECRYPT_STRUCT_STRING = 1932,
  FN_AEAD_DECRYPT_STRUCT_BYTES = 1933,
  FN_DETERMINISTIC_ENCRYPT_STRING = 1934,
  FN_DETERMINISTIC_ENCRYPT_BYTES = 1935,
  FN_DETERMINISTIC_DECRYPT_STRING = 1936,
  FN_DETERMINISTIC_DECRYPT_BYTES = 1937,
  FN_DETERMINISTIC_ENCRYPT_STRUCT_STRING = 1938,
  FN_DETERMINISTIC_ENCRYPT_STRUCT_BYTES = 1939,
  FN_DETERMINISTIC_DECRYPT_STRUCT_STRING = 1940,
  FN_DETERMINISTIC_DECRYPT_STRUCT_BYTES = 1941,
  FN_ST_GEOG_POINT = 2000,
  FN_ST_MAKE_LINE = 2001,
  FN_ST_MAKE_LINE_ARRAY = 2002,
  FN_ST_MAKE_POLYGON = 2003,
  FN_ST_MAKE_POLYGON_ORIENTED = 2004,
  FN_ST_INTERSECTION = 2007,
  FN_ST_UNION = 2008,
  FN_ST_UNION_ARRAY = 2009,
  FN_ST_DIFFERENCE = 2010,
  FN_ST_UNARY_UNION = 2011,
  FN_ST_CENTROID = 2012,
  FN_ST_BUFFER = 2013,
  FN_ST_BUFFER_WITH_TOLERANCE = 2014,
  FN_ST_SIMPLIFY = 2015,
  FN_ST_SNAP_TO_GRID = 2016,
  FN_ST_CLOSEST_POINT = 2017,
  FN_ST_BOUNDARY = 2018,
  FN_ST_CONVEXHULL = 2065,
  FN_ST_EXTERIORRING = 2078,
  FN_ST_INTERIORRINGS = 2079,
  FN_ST_EQUALS = 2020,
  FN_ST_INTERSECTS = 2021,
  FN_ST_CONTAINS = 2022,
  FN_ST_COVERS = 2023,
  FN_ST_DISJOINT = 2024,
  FN_ST_INTERSECTS_BOX = 2025,
  FN_ST_DWITHIN = 2026,
  FN_ST_WITHIN = 2027,
  FN_ST_COVEREDBY = 2028,
  FN_ST_TOUCHES = 2029,
  FN_ST_IS_EMPTY = 2030,
  FN_ST_IS_COLLECTION = 2031,
  FN_ST_DIMENSION = 2032,
  FN_ST_NUM_POINTS = 2033,
  FN_ST_NUM_GEOMETRIES = 2034,
  FN_ST_GEOMETRY_TYPE = 2035,
  FN_ST_DUMP = 2064,
  FN_ST_POINT_N = 2075,
  FN_ST_START_POINT = 2076,
  FN_ST_END_POINT = 2077,
  FN_ST_LENGTH = 2040,
  FN_ST_PERIMETER = 2041,
  FN_ST_AREA = 2042,
  FN_ST_DISTANCE = 2043,
  FN_ST_MAX_DISTANCE = 2044,
  FN_ST_AZIMUTH = 2080,
  FN_ST_ANGLE = 2081,
  FN_ST_GEOG_FROM_TEXT = 2050,
  FN_ST_GEOG_FROM_TEXT_EXT = 2060,
  FN_ST_GEOG_FROM_KML = 2051,
  FN_ST_GEOG_FROM_GEO_JSON = 2052,
  FN_ST_GEOG_FROM_GEO_JSON_EXT = 2068,
  FN_ST_GEOG_FROM_WKB = 2056,
  FN_ST_GEOG_FROM_WKB_HEX = 2072,
  FN_ST_GEOG_FROM_STRING = 2073,
  FN_ST_GEOG_FROM_BYTES = 2074,
  FN_ST_AS_TEXT = 2053,
  FN_ST_AS_KML = 2054,
  FN_ST_AS_GEO_JSON = 2055,
  FN_ST_AS_BINARY = 2057,
  FN_ST_GEOHASH = 2058,
  FN_ST_GEOG_POINT_FROM_GEOHASH = 2059,
  FN_ST_UNION_AGG = 2061,
  FN_ST_ACCUM = 2062,
  FN_ST_CENTROID_AGG = 2063,
  FN_ST_NEAREST_NEIGHBORS = 2067,
  FN_ST_EXTENT = 2083,
  FN_S2_COVERINGCELLIDS = 2082,
  FN_S2_CELLIDFROMPOINT = 2085,
  FN_ST_X = 2070,
  FN_ST_Y = 2071,
  FN_ST_CLUSTERDBSCAN = 2066,
  FN_ST_BOUNDING_BOX = 2084,
  FN_ANON_COUNT = 2200,
  FN_ANON_COUNT_STAR = 2201,
  FN_ANON_SUM_INT64 = 2202,
  FN_ANON_SUM_UINT64 = 2203,
  FN_ANON_SUM_DOUBLE = 2204,
  FN_ANON_SUM_NUMERIC = 2205,
  FN_ANON_AVG_DOUBLE = 2206,
  FN_ANON_AVG_NUMERIC = 2207,
  FN_ANON_VAR_POP_DOUBLE = 2208,
  FN_ANON_VAR_POP_DOUBLE_ARRAY = 2209,
  FN_ANON_STDDEV_POP_DOUBLE = 2210,
  FN_ANON_STDDEV_POP_DOUBLE_ARRAY = 2211,
  FN_ANON_PERCENTILE_CONT_DOUBLE = 2212,
  FN_ANON_PERCENTILE_CONT_DOUBLE_ARRAY = 2213,
  FN_FLATTEN = 2500,
  FN_ARRAY_AT_OFFSET = 234,
  FN_ARRAY_AT_ORDINAL = 235,
  FN_ARRAY_CONCAT = 236,
  FN_ARRAY_CONCAT_OP = 260,
  FN_ARRAY_LENGTH = 220,
  FN_ARRAY_TO_BYTES = 238,
  FN_ARRAY_TO_STRING = 237,
  FN_MAKE_ARRAY = 218,
  FN_SAFE_ARRAY_AT_OFFSET = 239,
  FN_SAFE_ARRAY_AT_ORDINAL = 240,
  FN_ARRAY_IS_DISTINCT = 2501,
  FN_PROTO_MAP_AT_KEY = 2502,
  FN_SAFE_PROTO_MAP_AT_KEY = 2503,
  FN_MODIFY_MAP = 2510,
  FN_ARRAY_FILTER = 2504,
  FN_ARRAY_FILTER_WITH_INDEX = 2505,
  FN_ARRAY_TRANSFORM = 2506,
  FN_ARRAY_TRANSFORM_WITH_INDEX = 2507,
  FN_CONTAINS_KEY = 2508,
  FN_ARRAY_INCLUDES = 2511,
  FN_ARRAY_INCLUDES_LAMBDA = 2512,
  FN_ARRAY_INCLUDES_ANY = 2513,
  FN_JSON_TO_INT64 = 2600,
  FN_JSON_TO_BOOL = 2601,
  FN_JSON_TO_STRING = 2602,
  FN_JSON_TYPE = 2603,
  FN_JSON_TO_DOUBLE = 2604,
}
