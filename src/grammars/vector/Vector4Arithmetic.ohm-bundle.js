'use strict';const {makeRecipe}=require('ohm-js');const result={};result.BasicArithmetic=makeRecipe(["grammar",{"source":"BasicArithmetic {\r\n  Expression\r\n    = LogicalShift\r\n\r\n  LogicalShift\r\n    = LogicalShift \"<<\" LogicalShift -- left\r\n    | LogicalShift \">>\" LogicalShift -- right\r\n    | AS \r\n\r\n  // Addition or Subtraction\r\n  AS\r\n    = AS add MD  -- addition\r\n    | AS subtract MD  -- subtraction\r\n    | MD\r\n\r\n  // Multiply or Divide\r\n  MD\r\n    = MD multiply E  -- multiplication\r\n    | MD divide E  -- division\r\n    | MD modulo E  -- modulo\r\n    | E\r\n\r\n  // Exponent\r\n  E\r\n    = P exponent E  -- exponent\r\n    | P\r\n\r\n  // Parenthesis\r\n  P\r\n    = \"(\" Expression \")\"  -- parenthesis\r\n    | Primitive\r\n    \r\n  Primitive\r\n    = \"+\" Primitive -- positive\r\n    | \"-\" Primitive -- negative\r\n    | constant\r\n    | hex\r\n    | number\r\n \r\n  // Lexical Rules\r\n  add \r\n  \t= \"+\"\r\n    | caseInsensitive<\"plus\">\r\n  \t| caseInsensitive<\"add\">\r\n    | caseInsensitive<\"and\">\r\n    \r\n  subtract \r\n    = \"-\"\r\n    | caseInsensitive<\"minus\">\r\n    | caseInsensitive<\"subtract\">\r\n    | caseInsensitive<\"remove\">\r\n    | caseInsensitive<\"take\">\r\n      \r\n  multiply \r\n    = \"*\"\r\n    | \"\\\\*\" // Escaped \\* for markdown\r\n    | \"\\u{00D7}\" // ×\r\n    | caseInsensitive<\"x\">\r\n    | caseInsensitive<\"times by\">\r\n    | caseInsensitive<\"times\">\r\n    | caseInsensitive<\"multiply by\">\r\n    | caseInsensitive<\"multiply\">\r\n      \r\n  divide\r\n    = \"/\"\r\n    | \"\\u{00F7}\" // ÷\r\n    | caseInsensitive<\"divide by\">\r\n    | caseInsensitive<\"divide\">\r\n\r\n  modulo\r\n    = \"%\"\r\n    | caseInsensitive<\"modulo\">\r\n    | caseInsensitive<\"mod\">\r\n\r\n  exponent\r\n    = \"^\"\r\n    | caseInsensitive<\"to the power of\">\r\n    | caseInsensitive<\"power of\">\r\n    | caseInsensitive<\"exponent\">\r\n    | caseInsensitive<\"prime\">\r\n\r\n  constant  \r\n  \t= caseInsensitive<\"PI\"> \r\n    | caseInsensitive<\"E\">\r\n\r\n  // Lazy: It will match anything like 1214.200.2442,200 the visitor decides how to interpret\r\n  number\r\n    = (separator? digit)+\r\n\r\n  // The separator can be a comma or a period, detected in the visitor\r\n  separator\r\n    = \".\" | \",\"\r\n\r\n  whole\r\n    = digit+\r\n\r\n  hex\r\n    = \"0x\" hexDigit+\r\n    | hexDigit+ \"h\"\r\n}"},"BasicArithmetic",null,"Expression",{"Expression":["define",{"sourceInterval":[21,51]},null,[],["app",{"sourceInterval":[39,51]},"LogicalShift",[]]],"LogicalShift_left":["define",{"sourceInterval":[77,115]},null,[],["seq",{"sourceInterval":[77,107]},["app",{"sourceInterval":[77,89]},"LogicalShift",[]],["terminal",{"sourceInterval":[90,94]},"<<"],["app",{"sourceInterval":[95,107]},"LogicalShift",[]]]],"LogicalShift_right":["define",{"sourceInterval":[123,162]},null,[],["seq",{"sourceInterval":[123,153]},["app",{"sourceInterval":[123,135]},"LogicalShift",[]],["terminal",{"sourceInterval":[136,140]},">>"],["app",{"sourceInterval":[141,153]},"LogicalShift",[]]]],"LogicalShift":["define",{"sourceInterval":[57,172]},null,[],["alt",{"sourceInterval":[77,172]},["app",{"sourceInterval":[77,107]},"LogicalShift_left",[]],["app",{"sourceInterval":[123,153]},"LogicalShift_right",[]],["app",{"sourceInterval":[170,172]},"AS",[]]]],"AS_addition":["define",{"sourceInterval":[219,241]},null,[],["seq",{"sourceInterval":[219,228]},["app",{"sourceInterval":[219,221]},"AS",[]],["app",{"sourceInterval":[222,225]},"add",[]],["app",{"sourceInterval":[226,228]},"MD",[]]]],"AS_subtraction":["define",{"sourceInterval":[249,279]},null,[],["seq",{"sourceInterval":[249,263]},["app",{"sourceInterval":[249,251]},"AS",[]],["app",{"sourceInterval":[252,260]},"subtract",[]],["app",{"sourceInterval":[261,263]},"MD",[]]]],"AS":["define",{"sourceInterval":[209,289]},null,[],["alt",{"sourceInterval":[219,289]},["app",{"sourceInterval":[219,228]},"AS_addition",[]],["app",{"sourceInterval":[249,263]},"AS_subtraction",[]],["app",{"sourceInterval":[287,289]},"MD",[]]]],"MD_multiplication":["define",{"sourceInterval":[330,362]},null,[],["seq",{"sourceInterval":[330,343]},["app",{"sourceInterval":[330,332]},"MD",[]],["app",{"sourceInterval":[333,341]},"multiply",[]],["app",{"sourceInterval":[342,343]},"E",[]]]],"MD_division":["define",{"sourceInterval":[370,394]},null,[],["seq",{"sourceInterval":[370,381]},["app",{"sourceInterval":[370,372]},"MD",[]],["app",{"sourceInterval":[373,379]},"divide",[]],["app",{"sourceInterval":[380,381]},"E",[]]]],"MD_modulo":["define",{"sourceInterval":[402,424]},null,[],["seq",{"sourceInterval":[402,413]},["app",{"sourceInterval":[402,404]},"MD",[]],["app",{"sourceInterval":[405,411]},"modulo",[]],["app",{"sourceInterval":[412,413]},"E",[]]]],"MD":["define",{"sourceInterval":[320,433]},null,[],["alt",{"sourceInterval":[330,433]},["app",{"sourceInterval":[330,343]},"MD_multiplication",[]],["app",{"sourceInterval":[370,381]},"MD_division",[]],["app",{"sourceInterval":[402,413]},"MD_modulo",[]],["app",{"sourceInterval":[432,433]},"E",[]]]],"E_exponent":["define",{"sourceInterval":[463,488]},null,[],["seq",{"sourceInterval":[463,475]},["app",{"sourceInterval":[463,464]},"P",[]],["app",{"sourceInterval":[465,473]},"exponent",[]],["app",{"sourceInterval":[474,475]},"E",[]]]],"E":["define",{"sourceInterval":[454,497]},null,[],["alt",{"sourceInterval":[463,497]},["app",{"sourceInterval":[463,475]},"E_exponent",[]],["app",{"sourceInterval":[496,497]},"P",[]]]],"P_parenthesis":["define",{"sourceInterval":[530,564]},null,[],["seq",{"sourceInterval":[530,548]},["terminal",{"sourceInterval":[530,533]},"("],["app",{"sourceInterval":[534,544]},"Expression",[]],["terminal",{"sourceInterval":[545,548]},")"]]],"P":["define",{"sourceInterval":[521,581]},null,[],["alt",{"sourceInterval":[530,581]},["app",{"sourceInterval":[530,548]},"P_parenthesis",[]],["app",{"sourceInterval":[572,581]},"Primitive",[]]]],"Primitive_positive":["define",{"sourceInterval":[608,633]},null,[],["seq",{"sourceInterval":[608,621]},["terminal",{"sourceInterval":[608,611]},"+"],["app",{"sourceInterval":[612,621]},"Primitive",[]]]],"Primitive_negative":["define",{"sourceInterval":[641,666]},null,[],["seq",{"sourceInterval":[641,654]},["terminal",{"sourceInterval":[641,644]},"-"],["app",{"sourceInterval":[645,654]},"Primitive",[]]]],"Primitive":["define",{"sourceInterval":[591,707]},null,[],["alt",{"sourceInterval":[608,707]},["app",{"sourceInterval":[608,621]},"Primitive_positive",[]],["app",{"sourceInterval":[641,654]},"Primitive_negative",[]],["app",{"sourceInterval":[674,682]},"constant",[]],["app",{"sourceInterval":[690,693]},"hex",[]],["app",{"sourceInterval":[701,707]},"number",[]]]],"add":["define",{"sourceInterval":[734,838]},null,[],["alt",{"sourceInterval":[745,838]},["terminal",{"sourceInterval":[745,748]},"+"],["app",{"sourceInterval":[756,779]},"caseInsensitive",[["terminal",{"sourceInterval":[772,778]},"plus"]]],["app",{"sourceInterval":[786,808]},"caseInsensitive",[["terminal",{"sourceInterval":[802,807]},"add"]]],["app",{"sourceInterval":[816,838]},"caseInsensitive",[["terminal",{"sourceInterval":[832,837]},"and"]]]]],"subtract":["define",{"sourceInterval":[848,999]},null,[],["alt",{"sourceInterval":[865,999]},["terminal",{"sourceInterval":[865,868]},"-"],["app",{"sourceInterval":[876,900]},"caseInsensitive",[["terminal",{"sourceInterval":[892,899]},"minus"]]],["app",{"sourceInterval":[908,935]},"caseInsensitive",[["terminal",{"sourceInterval":[924,934]},"subtract"]]],["app",{"sourceInterval":[943,968]},"caseInsensitive",[["terminal",{"sourceInterval":[959,967]},"remove"]]],["app",{"sourceInterval":[976,999]},"caseInsensitive",[["terminal",{"sourceInterval":[992,998]},"take"]]]]],"multiply":["define",{"sourceInterval":[1011,1262]},null,[],["alt",{"sourceInterval":[1028,1262]},["terminal",{"sourceInterval":[1028,1031]},"*"],["terminal",{"sourceInterval":[1039,1044]},"\\*"],["terminal",{"sourceInterval":[1079,1089]},"×"],["app",{"sourceInterval":[1102,1122]},"caseInsensitive",[["terminal",{"sourceInterval":[1118,1121]},"x"]]],["app",{"sourceInterval":[1130,1157]},"caseInsensitive",[["terminal",{"sourceInterval":[1146,1156]},"times by"]]],["app",{"sourceInterval":[1165,1189]},"caseInsensitive",[["terminal",{"sourceInterval":[1181,1188]},"times"]]],["app",{"sourceInterval":[1197,1227]},"caseInsensitive",[["terminal",{"sourceInterval":[1213,1226]},"multiply by"]]],["app",{"sourceInterval":[1235,1262]},"caseInsensitive",[["terminal",{"sourceInterval":[1251,1261]},"multiply"]]]]],"divide":["define",{"sourceInterval":[1274,1383]},null,[],["alt",{"sourceInterval":[1288,1383]},["terminal",{"sourceInterval":[1288,1291]},"/"],["terminal",{"sourceInterval":[1299,1309]},"÷"],["app",{"sourceInterval":[1322,1350]},"caseInsensitive",[["terminal",{"sourceInterval":[1338,1349]},"divide by"]]],["app",{"sourceInterval":[1358,1383]},"caseInsensitive",[["terminal",{"sourceInterval":[1374,1382]},"divide"]]]]],"modulo":["define",{"sourceInterval":[1389,1469]},null,[],["alt",{"sourceInterval":[1403,1469]},["terminal",{"sourceInterval":[1403,1406]},"%"],["app",{"sourceInterval":[1414,1439]},"caseInsensitive",[["terminal",{"sourceInterval":[1430,1438]},"modulo"]]],["app",{"sourceInterval":[1447,1469]},"caseInsensitive",[["terminal",{"sourceInterval":[1463,1468]},"mod"]]]]],"exponent":["define",{"sourceInterval":[1475,1638]},null,[],["alt",{"sourceInterval":[1491,1638]},["terminal",{"sourceInterval":[1491,1494]},"^"],["app",{"sourceInterval":[1502,1536]},"caseInsensitive",[["terminal",{"sourceInterval":[1518,1535]},"to the power of"]]],["app",{"sourceInterval":[1544,1571]},"caseInsensitive",[["terminal",{"sourceInterval":[1560,1570]},"power of"]]],["app",{"sourceInterval":[1579,1606]},"caseInsensitive",[["terminal",{"sourceInterval":[1595,1605]},"exponent"]]],["app",{"sourceInterval":[1614,1638]},"caseInsensitive",[["terminal",{"sourceInterval":[1630,1637]},"prime"]]]]],"constant":["define",{"sourceInterval":[1644,1711]},null,[],["alt",{"sourceInterval":[1661,1711]},["app",{"sourceInterval":[1661,1682]},"caseInsensitive",[["terminal",{"sourceInterval":[1677,1681]},"PI"]]],["app",{"sourceInterval":[1691,1711]},"caseInsensitive",[["terminal",{"sourceInterval":[1707,1710]},"E"]]]]],"number":["define",{"sourceInterval":[1812,1845]},null,[],["plus",{"sourceInterval":[1826,1845]},["seq",{"sourceInterval":[1827,1843]},["opt",{"sourceInterval":[1827,1837]},["app",{"sourceInterval":[1827,1836]},"separator",[]]],["app",{"sourceInterval":[1838,1843]},"digit",[]]]]],"separator":["define",{"sourceInterval":[1923,1949]},null,[],["alt",{"sourceInterval":[1940,1949]},["terminal",{"sourceInterval":[1940,1943]},"."],["terminal",{"sourceInterval":[1946,1949]},","]]],"whole":["define",{"sourceInterval":[1955,1974]},null,[],["plus",{"sourceInterval":[1968,1974]},["app",{"sourceInterval":[1968,1973]},"digit",[]]]],"hex":["define",{"sourceInterval":[1980,2026]},null,[],["alt",{"sourceInterval":[1991,2026]},["seq",{"sourceInterval":[1991,2005]},["terminal",{"sourceInterval":[1991,1995]},"0x"],["plus",{"sourceInterval":[1996,2005]},["app",{"sourceInterval":[1996,2004]},"hexDigit",[]]]],["seq",{"sourceInterval":[2013,2026]},["plus",{"sourceInterval":[2013,2022]},["app",{"sourceInterval":[2013,2021]},"hexDigit",[]]],["terminal",{"sourceInterval":[2023,2026]},"h"]]]]}]);result.Vector4Arithmetic=makeRecipe(["grammar",{"source":"Vector4Arithmetic <: BasicArithmetic {\r\n  // Remove support for logical shift\r\n  Expression \r\n  \t:=  AS\r\n\r\n  P\r\n    := \"(\" Expression \")\"  -- parenthesis\r\n    | Vector4\r\n    | Function\r\n    | Primitive\r\n\r\n  // Remove modulo support for vector\r\n  MD\r\n    := MD multiply E  -- multiplication\r\n    | MD divide E  -- division\r\n    | E\r\n\r\n  Vector4\r\n    = vector4? \"(\" Expression \",\" Expression \",\" Expression \",\" Expression \")\" -- parse\r\n\r\n  Function\r\n   = LengthSq\r\n   | DistanceSq\r\n   | Length\r\n   | Distance\r\n   | Normalise\r\n   | Dot\r\n   | AngleBetween\r\n   | Lerp\r\n\r\n  LengthSq  = lengthSq \"(\" Vector4 \")\" -- function\r\n  DistanceSq  = distanceSq \"(\" Vector4 \",\" Vector4 \")\" -- function\r\n  Length  = length \"(\" Vector4 \")\" -- function\r\n  Distance  = distance \"(\" Vector4 \",\" Vector4 \")\" -- function\r\n  Normalise = normalise \"(\" Vector4 \")\" -- function\r\n  Dot = dot \"(\" Vector4 \",\" Vector4 \")\" -- function\r\n  AngleBetween = angleBetween \"(\" Vector4 \",\" Vector4 \")\" -- function\r\n  Lerp = lerp \"(\" Vector4 \",\" Vector4 \",\" number \")\" -- function\r\n\r\n  vector4 \r\n \t  = caseInsensitive<\"Vector4\">\r\n    | caseInsensitive<\"Vec4\">\r\n\r\n  lengthSq \r\n \t  = caseInsensitive<\"lengthSq\">\r\n    | caseInsensitive<\"magnitudeSq\">\r\n\r\n  distanceSq\r\n    = caseInsensitive<\"distanceSq\">\r\n\r\n  length\r\n \t  = caseInsensitive<\"length\">\r\n    | caseInsensitive<\"magnitude\">\r\n\r\n  distance\r\n    = caseInsensitive<\"distance\">\r\n\r\n  normalise \r\n \t  = caseInsensitive<\"normalise\">\r\n \t  | caseInsensitive<\"normalize\">\r\n\r\n  dot\r\n    = caseInsensitive<\"dotproduct\">\r\n    | caseInsensitive<\"dot\">\r\n\r\n  angleBetween\r\n    = caseInsensitive<\"angleBetween\">\r\n\r\n  lerp\r\n    = caseInsensitive<\"lerp\">\r\n}"},"Vector4Arithmetic",result.BasicArithmetic,"Expression",{"Expression":["override",{"sourceInterval":[81,103]},null,[],["app",{"sourceInterval":[101,103]},"AS",[]]],"P_parenthesis":["override",{"sourceInterval":[119,153]},null,[],["seq",{"sourceInterval":[119,137]},["terminal",{"sourceInterval":[119,122]},"("],["app",{"sourceInterval":[123,133]},"Expression",[]],["terminal",{"sourceInterval":[134,137]},")"]]],"P":["override",{"sourceInterval":[109,201]},null,[],["alt",{"sourceInterval":[119,201]},["app",{"sourceInterval":[119,137]},"P_parenthesis",[]],["app",{"sourceInterval":[161,168]},"Vector4",[]],["app",{"sourceInterval":[176,184]},"Function",[]],["app",{"sourceInterval":[192,201]},"Primitive",[]]]],"MD_multiplication":["override",{"sourceInterval":[257,289]},null,[],["seq",{"sourceInterval":[257,270]},["app",{"sourceInterval":[257,259]},"MD",[]],["app",{"sourceInterval":[260,268]},"multiply",[]],["app",{"sourceInterval":[269,270]},"E",[]]]],"MD_division":["override",{"sourceInterval":[297,321]},null,[],["seq",{"sourceInterval":[297,308]},["app",{"sourceInterval":[297,299]},"MD",[]],["app",{"sourceInterval":[300,306]},"divide",[]],["app",{"sourceInterval":[307,308]},"E",[]]]],"MD":["override",{"sourceInterval":[246,330]},null,[],["alt",{"sourceInterval":[257,330]},["app",{"sourceInterval":[257,270]},"MD_multiplication",[]],["app",{"sourceInterval":[297,308]},"MD_division",[]],["app",{"sourceInterval":[329,330]},"E",[]]]],"Vector4_parse":["define",{"sourceInterval":[351,432]},null,[],["seq",{"sourceInterval":[351,423]},["opt",{"sourceInterval":[351,359]},["app",{"sourceInterval":[351,358]},"vector4",[]]],["terminal",{"sourceInterval":[360,363]},"("],["app",{"sourceInterval":[364,374]},"Expression",[]],["terminal",{"sourceInterval":[375,378]},","],["app",{"sourceInterval":[379,389]},"Expression",[]],["terminal",{"sourceInterval":[390,393]},","],["app",{"sourceInterval":[394,404]},"Expression",[]],["terminal",{"sourceInterval":[405,408]},","],["app",{"sourceInterval":[409,419]},"Expression",[]],["terminal",{"sourceInterval":[420,423]},")"]]],"Vector4":["define",{"sourceInterval":[336,432]},null,[],["app",{"sourceInterval":[351,432]},"Vector4_parse",[]]],"Function":["define",{"sourceInterval":[438,562]},null,[],["alt",{"sourceInterval":[453,562]},["app",{"sourceInterval":[453,461]},"LengthSq",[]],["app",{"sourceInterval":[468,478]},"DistanceSq",[]],["app",{"sourceInterval":[485,491]},"Length",[]],["app",{"sourceInterval":[498,506]},"Distance",[]],["app",{"sourceInterval":[513,522]},"Normalise",[]],["app",{"sourceInterval":[529,532]},"Dot",[]],["app",{"sourceInterval":[539,551]},"AngleBetween",[]],["app",{"sourceInterval":[558,562]},"Lerp",[]]]],"LengthSq_function":["define",{"sourceInterval":[580,616]},null,[],["seq",{"sourceInterval":[580,604]},["app",{"sourceInterval":[580,588]},"lengthSq",[]],["terminal",{"sourceInterval":[589,592]},"("],["app",{"sourceInterval":[593,600]},"Vector4",[]],["terminal",{"sourceInterval":[601,604]},")"]]],"LengthSq":["define",{"sourceInterval":[568,616]},null,[],["app",{"sourceInterval":[580,616]},"LengthSq_function",[]]],"DistanceSq_function":["define",{"sourceInterval":[634,684]},null,[],["seq",{"sourceInterval":[634,672]},["app",{"sourceInterval":[634,644]},"distanceSq",[]],["terminal",{"sourceInterval":[645,648]},"("],["app",{"sourceInterval":[649,656]},"Vector4",[]],["terminal",{"sourceInterval":[657,660]},","],["app",{"sourceInterval":[661,668]},"Vector4",[]],["terminal",{"sourceInterval":[669,672]},")"]]],"DistanceSq":["define",{"sourceInterval":[620,684]},null,[],["app",{"sourceInterval":[634,684]},"DistanceSq_function",[]]],"Length_function":["define",{"sourceInterval":[698,732]},null,[],["seq",{"sourceInterval":[698,720]},["app",{"sourceInterval":[698,704]},"length",[]],["terminal",{"sourceInterval":[705,708]},"("],["app",{"sourceInterval":[709,716]},"Vector4",[]],["terminal",{"sourceInterval":[717,720]},")"]]],"Length":["define",{"sourceInterval":[688,732]},null,[],["app",{"sourceInterval":[698,732]},"Length_function",[]]],"Distance_function":["define",{"sourceInterval":[748,796]},null,[],["seq",{"sourceInterval":[748,784]},["app",{"sourceInterval":[748,756]},"distance",[]],["terminal",{"sourceInterval":[757,760]},"("],["app",{"sourceInterval":[761,768]},"Vector4",[]],["terminal",{"sourceInterval":[769,772]},","],["app",{"sourceInterval":[773,780]},"Vector4",[]],["terminal",{"sourceInterval":[781,784]},")"]]],"Distance":["define",{"sourceInterval":[736,796]},null,[],["app",{"sourceInterval":[748,796]},"Distance_function",[]]],"Normalise_function":["define",{"sourceInterval":[812,849]},null,[],["seq",{"sourceInterval":[812,837]},["app",{"sourceInterval":[812,821]},"normalise",[]],["terminal",{"sourceInterval":[822,825]},"("],["app",{"sourceInterval":[826,833]},"Vector4",[]],["terminal",{"sourceInterval":[834,837]},")"]]],"Normalise":["define",{"sourceInterval":[800,849]},null,[],["app",{"sourceInterval":[812,849]},"Normalise_function",[]]],"Dot_function":["define",{"sourceInterval":[859,902]},null,[],["seq",{"sourceInterval":[859,890]},["app",{"sourceInterval":[859,862]},"dot",[]],["terminal",{"sourceInterval":[863,866]},"("],["app",{"sourceInterval":[867,874]},"Vector4",[]],["terminal",{"sourceInterval":[875,878]},","],["app",{"sourceInterval":[879,886]},"Vector4",[]],["terminal",{"sourceInterval":[887,890]},")"]]],"Dot":["define",{"sourceInterval":[853,902]},null,[],["app",{"sourceInterval":[859,902]},"Dot_function",[]]],"AngleBetween_function":["define",{"sourceInterval":[921,973]},null,[],["seq",{"sourceInterval":[921,961]},["app",{"sourceInterval":[921,933]},"angleBetween",[]],["terminal",{"sourceInterval":[934,937]},"("],["app",{"sourceInterval":[938,945]},"Vector4",[]],["terminal",{"sourceInterval":[946,949]},","],["app",{"sourceInterval":[950,957]},"Vector4",[]],["terminal",{"sourceInterval":[958,961]},")"]]],"AngleBetween":["define",{"sourceInterval":[906,973]},null,[],["app",{"sourceInterval":[921,973]},"AngleBetween_function",[]]],"Lerp_function":["define",{"sourceInterval":[984,1039]},null,[],["seq",{"sourceInterval":[984,1027]},["app",{"sourceInterval":[984,988]},"lerp",[]],["terminal",{"sourceInterval":[989,992]},"("],["app",{"sourceInterval":[993,1000]},"Vector4",[]],["terminal",{"sourceInterval":[1001,1004]},","],["app",{"sourceInterval":[1005,1012]},"Vector4",[]],["terminal",{"sourceInterval":[1013,1016]},","],["app",{"sourceInterval":[1017,1023]},"number",[]],["terminal",{"sourceInterval":[1024,1027]},")"]]],"Lerp":["define",{"sourceInterval":[977,1039]},null,[],["app",{"sourceInterval":[984,1039]},"Lerp_function",[]]],"vector4":["define",{"sourceInterval":[1045,1118]},null,[],["alt",{"sourceInterval":[1061,1118]},["app",{"sourceInterval":[1061,1087]},"caseInsensitive",[["terminal",{"sourceInterval":[1077,1086]},"Vector4"]]],["app",{"sourceInterval":[1095,1118]},"caseInsensitive",[["terminal",{"sourceInterval":[1111,1117]},"Vec4"]]]]],"lengthSq":["define",{"sourceInterval":[1124,1206]},null,[],["alt",{"sourceInterval":[1141,1206]},["app",{"sourceInterval":[1141,1168]},"caseInsensitive",[["terminal",{"sourceInterval":[1157,1167]},"lengthSq"]]],["app",{"sourceInterval":[1176,1206]},"caseInsensitive",[["terminal",{"sourceInterval":[1192,1205]},"magnitudeSq"]]]]],"distanceSq":["define",{"sourceInterval":[1212,1259]},null,[],["app",{"sourceInterval":[1230,1259]},"caseInsensitive",[["terminal",{"sourceInterval":[1246,1258]},"distanceSq"]]]],"length":["define",{"sourceInterval":[1265,1340]},null,[],["alt",{"sourceInterval":[1279,1340]},["app",{"sourceInterval":[1279,1304]},"caseInsensitive",[["terminal",{"sourceInterval":[1295,1303]},"length"]]],["app",{"sourceInterval":[1312,1340]},"caseInsensitive",[["terminal",{"sourceInterval":[1328,1339]},"magnitude"]]]]],"distance":["define",{"sourceInterval":[1346,1389]},null,[],["app",{"sourceInterval":[1362,1389]},"caseInsensitive",[["terminal",{"sourceInterval":[1378,1388]},"distance"]]]],"normalise":["define",{"sourceInterval":[1395,1477]},null,[],["alt",{"sourceInterval":[1413,1477]},["app",{"sourceInterval":[1413,1441]},"caseInsensitive",[["terminal",{"sourceInterval":[1429,1440]},"normalise"]]],["app",{"sourceInterval":[1449,1477]},"caseInsensitive",[["terminal",{"sourceInterval":[1465,1476]},"normalize"]]]]],"dot":["define",{"sourceInterval":[1483,1553]},null,[],["alt",{"sourceInterval":[1494,1553]},["app",{"sourceInterval":[1494,1523]},"caseInsensitive",[["terminal",{"sourceInterval":[1510,1522]},"dotproduct"]]],["app",{"sourceInterval":[1531,1553]},"caseInsensitive",[["terminal",{"sourceInterval":[1547,1552]},"dot"]]]]],"angleBetween":["define",{"sourceInterval":[1559,1610]},null,[],["app",{"sourceInterval":[1579,1610]},"caseInsensitive",[["terminal",{"sourceInterval":[1595,1609]},"angleBetween"]]]],"lerp":["define",{"sourceInterval":[1616,1651]},null,[],["app",{"sourceInterval":[1628,1651]},"caseInsensitive",[["terminal",{"sourceInterval":[1644,1650]},"lerp"]]]]}]);module.exports=result;