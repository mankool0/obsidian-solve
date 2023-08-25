'use strict';const {makeRecipe}=require('ohm-js');const result=makeRecipe(["grammar",{"source":"BasicArithmetic {\r\n  Expression\r\n    = LogicalShift\r\n\r\n  LogicalShift\r\n    = LogicalShift \"<<\" LogicalShift -- left\r\n    | LogicalShift \">>\" LogicalShift -- right\r\n    | AS \r\n\r\n  // Addition or Subtraction\r\n  AS\r\n    = AS add MD  -- addition\r\n    | AS subtract MD  -- subtraction\r\n    | MD\r\n\r\n  // Multiply or Divide\r\n  MD\r\n    = MD multiply E  -- multiplication\r\n    | MD divide E  -- division\r\n    | MD modulo E  -- modulo\r\n    | E\r\n\r\n  // Exponent\r\n  E\r\n    = P exponent E  -- exponent\r\n    | P\r\n\r\n  // Parenthesis\r\n  P\r\n    = \"(\" Expression \")\"  -- parenthesis\r\n    | Primitive\r\n    \r\n  Primitive\r\n    = \"+\" Primitive -- positive\r\n    | \"-\" Primitive -- negative\r\n    | constant\r\n    | hex\r\n    | number\r\n \r\n  // Lexical Rules\r\n  add \r\n  \t= \"+\"\r\n    | caseInsensitive<\"plus\">\r\n  \t| caseInsensitive<\"add\">\r\n    | caseInsensitive<\"and\">\r\n    \r\n  subtract \r\n    = \"-\"\r\n    | caseInsensitive<\"minus\">\r\n    | caseInsensitive<\"subtract\">\r\n    | caseInsensitive<\"remove\">\r\n    | caseInsensitive<\"take\">\r\n      \r\n  multiply \r\n    = \"*\"\r\n    | caseInsensitive<\"times by\">\r\n    | caseInsensitive<\"times\">\r\n    | caseInsensitive<\"multiply by\">\r\n    | caseInsensitive<\"multiply\">\r\n      \r\n  divide\r\n    = \"/\"\r\n    | caseInsensitive<\"divide by\">\r\n    | caseInsensitive<\"divide\">\r\n\r\n  modulo\r\n    = \"%\"\r\n    | caseInsensitive<\"modulo\">\r\n    | caseInsensitive<\"mod\">\r\n\r\n  exponent\r\n    = \"^\"\r\n    | caseInsensitive<\"to the power of\">\r\n    | caseInsensitive<\"power of\">\r\n    | caseInsensitive<\"exponent\">\r\n    | caseInsensitive<\"prime\">\r\n\r\n  constant  \r\n  \t= caseInsensitive<\"PI\"> \r\n    | caseInsensitive<\"E\">\r\n\r\n  number\r\n    = digit* \".\" digit+  -- fract\r\n    | digit+             -- whole\r\n  \r\n  hex\r\n    = \"0x\" hexDigit+\r\n    | hexDigit+ \"h\"\r\n}"},"BasicArithmetic",null,"Expression",{"Expression":["define",{"sourceInterval":[21,51]},null,[],["app",{"sourceInterval":[39,51]},"LogicalShift",[]]],"LogicalShift_left":["define",{"sourceInterval":[77,115]},null,[],["seq",{"sourceInterval":[77,107]},["app",{"sourceInterval":[77,89]},"LogicalShift",[]],["terminal",{"sourceInterval":[90,94]},"<<"],["app",{"sourceInterval":[95,107]},"LogicalShift",[]]]],"LogicalShift_right":["define",{"sourceInterval":[123,162]},null,[],["seq",{"sourceInterval":[123,153]},["app",{"sourceInterval":[123,135]},"LogicalShift",[]],["terminal",{"sourceInterval":[136,140]},">>"],["app",{"sourceInterval":[141,153]},"LogicalShift",[]]]],"LogicalShift":["define",{"sourceInterval":[57,172]},null,[],["alt",{"sourceInterval":[77,172]},["app",{"sourceInterval":[77,107]},"LogicalShift_left",[]],["app",{"sourceInterval":[123,153]},"LogicalShift_right",[]],["app",{"sourceInterval":[170,172]},"AS",[]]]],"AS_addition":["define",{"sourceInterval":[219,241]},null,[],["seq",{"sourceInterval":[219,228]},["app",{"sourceInterval":[219,221]},"AS",[]],["app",{"sourceInterval":[222,225]},"add",[]],["app",{"sourceInterval":[226,228]},"MD",[]]]],"AS_subtraction":["define",{"sourceInterval":[249,279]},null,[],["seq",{"sourceInterval":[249,263]},["app",{"sourceInterval":[249,251]},"AS",[]],["app",{"sourceInterval":[252,260]},"subtract",[]],["app",{"sourceInterval":[261,263]},"MD",[]]]],"AS":["define",{"sourceInterval":[209,289]},null,[],["alt",{"sourceInterval":[219,289]},["app",{"sourceInterval":[219,228]},"AS_addition",[]],["app",{"sourceInterval":[249,263]},"AS_subtraction",[]],["app",{"sourceInterval":[287,289]},"MD",[]]]],"MD_multiplication":["define",{"sourceInterval":[330,362]},null,[],["seq",{"sourceInterval":[330,343]},["app",{"sourceInterval":[330,332]},"MD",[]],["app",{"sourceInterval":[333,341]},"multiply",[]],["app",{"sourceInterval":[342,343]},"E",[]]]],"MD_division":["define",{"sourceInterval":[370,394]},null,[],["seq",{"sourceInterval":[370,381]},["app",{"sourceInterval":[370,372]},"MD",[]],["app",{"sourceInterval":[373,379]},"divide",[]],["app",{"sourceInterval":[380,381]},"E",[]]]],"MD_modulo":["define",{"sourceInterval":[402,424]},null,[],["seq",{"sourceInterval":[402,413]},["app",{"sourceInterval":[402,404]},"MD",[]],["app",{"sourceInterval":[405,411]},"modulo",[]],["app",{"sourceInterval":[412,413]},"E",[]]]],"MD":["define",{"sourceInterval":[320,433]},null,[],["alt",{"sourceInterval":[330,433]},["app",{"sourceInterval":[330,343]},"MD_multiplication",[]],["app",{"sourceInterval":[370,381]},"MD_division",[]],["app",{"sourceInterval":[402,413]},"MD_modulo",[]],["app",{"sourceInterval":[432,433]},"E",[]]]],"E_exponent":["define",{"sourceInterval":[463,488]},null,[],["seq",{"sourceInterval":[463,475]},["app",{"sourceInterval":[463,464]},"P",[]],["app",{"sourceInterval":[465,473]},"exponent",[]],["app",{"sourceInterval":[474,475]},"E",[]]]],"E":["define",{"sourceInterval":[454,497]},null,[],["alt",{"sourceInterval":[463,497]},["app",{"sourceInterval":[463,475]},"E_exponent",[]],["app",{"sourceInterval":[496,497]},"P",[]]]],"P_parenthesis":["define",{"sourceInterval":[530,564]},null,[],["seq",{"sourceInterval":[530,548]},["terminal",{"sourceInterval":[530,533]},"("],["app",{"sourceInterval":[534,544]},"Expression",[]],["terminal",{"sourceInterval":[545,548]},")"]]],"P":["define",{"sourceInterval":[521,581]},null,[],["alt",{"sourceInterval":[530,581]},["app",{"sourceInterval":[530,548]},"P_parenthesis",[]],["app",{"sourceInterval":[572,581]},"Primitive",[]]]],"Primitive_positive":["define",{"sourceInterval":[608,633]},null,[],["seq",{"sourceInterval":[608,621]},["terminal",{"sourceInterval":[608,611]},"+"],["app",{"sourceInterval":[612,621]},"Primitive",[]]]],"Primitive_negative":["define",{"sourceInterval":[641,666]},null,[],["seq",{"sourceInterval":[641,654]},["terminal",{"sourceInterval":[641,644]},"-"],["app",{"sourceInterval":[645,654]},"Primitive",[]]]],"Primitive":["define",{"sourceInterval":[591,707]},null,[],["alt",{"sourceInterval":[608,707]},["app",{"sourceInterval":[608,621]},"Primitive_positive",[]],["app",{"sourceInterval":[641,654]},"Primitive_negative",[]],["app",{"sourceInterval":[674,682]},"constant",[]],["app",{"sourceInterval":[690,693]},"hex",[]],["app",{"sourceInterval":[701,707]},"number",[]]]],"add":["define",{"sourceInterval":[734,838]},null,[],["alt",{"sourceInterval":[745,838]},["terminal",{"sourceInterval":[745,748]},"+"],["app",{"sourceInterval":[756,779]},"caseInsensitive",[["terminal",{"sourceInterval":[772,778]},"plus"]]],["app",{"sourceInterval":[786,808]},"caseInsensitive",[["terminal",{"sourceInterval":[802,807]},"add"]]],["app",{"sourceInterval":[816,838]},"caseInsensitive",[["terminal",{"sourceInterval":[832,837]},"and"]]]]],"subtract":["define",{"sourceInterval":[848,999]},null,[],["alt",{"sourceInterval":[865,999]},["terminal",{"sourceInterval":[865,868]},"-"],["app",{"sourceInterval":[876,900]},"caseInsensitive",[["terminal",{"sourceInterval":[892,899]},"minus"]]],["app",{"sourceInterval":[908,935]},"caseInsensitive",[["terminal",{"sourceInterval":[924,934]},"subtract"]]],["app",{"sourceInterval":[943,968]},"caseInsensitive",[["terminal",{"sourceInterval":[959,967]},"remove"]]],["app",{"sourceInterval":[976,999]},"caseInsensitive",[["terminal",{"sourceInterval":[992,998]},"take"]]]]],"multiply":["define",{"sourceInterval":[1011,1171]},null,[],["alt",{"sourceInterval":[1028,1171]},["terminal",{"sourceInterval":[1028,1031]},"*"],["app",{"sourceInterval":[1039,1066]},"caseInsensitive",[["terminal",{"sourceInterval":[1055,1065]},"times by"]]],["app",{"sourceInterval":[1074,1098]},"caseInsensitive",[["terminal",{"sourceInterval":[1090,1097]},"times"]]],["app",{"sourceInterval":[1106,1136]},"caseInsensitive",[["terminal",{"sourceInterval":[1122,1135]},"multiply by"]]],["app",{"sourceInterval":[1144,1171]},"caseInsensitive",[["terminal",{"sourceInterval":[1160,1170]},"multiply"]]]]],"divide":["define",{"sourceInterval":[1183,1269]},null,[],["alt",{"sourceInterval":[1197,1269]},["terminal",{"sourceInterval":[1197,1200]},"/"],["app",{"sourceInterval":[1208,1236]},"caseInsensitive",[["terminal",{"sourceInterval":[1224,1235]},"divide by"]]],["app",{"sourceInterval":[1244,1269]},"caseInsensitive",[["terminal",{"sourceInterval":[1260,1268]},"divide"]]]]],"modulo":["define",{"sourceInterval":[1275,1355]},null,[],["alt",{"sourceInterval":[1289,1355]},["terminal",{"sourceInterval":[1289,1292]},"%"],["app",{"sourceInterval":[1300,1325]},"caseInsensitive",[["terminal",{"sourceInterval":[1316,1324]},"modulo"]]],["app",{"sourceInterval":[1333,1355]},"caseInsensitive",[["terminal",{"sourceInterval":[1349,1354]},"mod"]]]]],"exponent":["define",{"sourceInterval":[1361,1524]},null,[],["alt",{"sourceInterval":[1377,1524]},["terminal",{"sourceInterval":[1377,1380]},"^"],["app",{"sourceInterval":[1388,1422]},"caseInsensitive",[["terminal",{"sourceInterval":[1404,1421]},"to the power of"]]],["app",{"sourceInterval":[1430,1457]},"caseInsensitive",[["terminal",{"sourceInterval":[1446,1456]},"power of"]]],["app",{"sourceInterval":[1465,1492]},"caseInsensitive",[["terminal",{"sourceInterval":[1481,1491]},"exponent"]]],["app",{"sourceInterval":[1500,1524]},"caseInsensitive",[["terminal",{"sourceInterval":[1516,1523]},"prime"]]]]],"constant":["define",{"sourceInterval":[1530,1597]},null,[],["alt",{"sourceInterval":[1547,1597]},["app",{"sourceInterval":[1547,1568]},"caseInsensitive",[["terminal",{"sourceInterval":[1563,1567]},"PI"]]],["app",{"sourceInterval":[1577,1597]},"caseInsensitive",[["terminal",{"sourceInterval":[1593,1596]},"E"]]]]],"number_fract":["define",{"sourceInterval":[1617,1644]},null,[],["seq",{"sourceInterval":[1617,1634]},["star",{"sourceInterval":[1617,1623]},["app",{"sourceInterval":[1617,1622]},"digit",[]]],["terminal",{"sourceInterval":[1624,1627]},"."],["plus",{"sourceInterval":[1628,1634]},["app",{"sourceInterval":[1628,1633]},"digit",[]]]]],"number_whole":["define",{"sourceInterval":[1652,1679]},null,[],["plus",{"sourceInterval":[1652,1658]},["app",{"sourceInterval":[1652,1657]},"digit",[]]]],"number":["define",{"sourceInterval":[1603,1679]},null,[],["alt",{"sourceInterval":[1617,1679]},["app",{"sourceInterval":[1617,1634]},"number_fract",[]],["app",{"sourceInterval":[1652,1658]},"number_whole",[]]]],"hex":["define",{"sourceInterval":[1687,1733]},null,[],["alt",{"sourceInterval":[1698,1733]},["seq",{"sourceInterval":[1698,1712]},["terminal",{"sourceInterval":[1698,1702]},"0x"],["plus",{"sourceInterval":[1703,1712]},["app",{"sourceInterval":[1703,1711]},"hexDigit",[]]]],["seq",{"sourceInterval":[1720,1733]},["plus",{"sourceInterval":[1720,1729]},["app",{"sourceInterval":[1720,1728]},"hexDigit",[]]],["terminal",{"sourceInterval":[1730,1733]},"h"]]]]}]);module.exports=result;