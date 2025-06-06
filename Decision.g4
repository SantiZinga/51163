grammar Decision;

program
    : simpleStatement*
    ;

simpleStatement
    : assignmentStatement
    | outputStatement
    ;

assignmentStatement
    : Identifier '=' constant ';'
    ;

outputStatement
    : 'output' '(' TextLiteral ')' ';'
    ;

constant
    : Number
    | TextLiteral
    ;

Identifier
    : LETTER (LETTER | DIGIT | '_')*
    ;

Number
    : DIGIT+
    ;

TextLiteral
    : '"' (~["\r\n])* '"'
    ;
fragment LETTER : [a-zA-Z] ;
fragment DIGIT  : [0-9] ;

WS
    : [ \t\r\n]+ -> skip
    ;
