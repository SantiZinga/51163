grammar Decision;

programa
  : instruccion* EOF
  ;

instruccion
  : decision
  ;

decision
  : 'si' condicion 'entonces' LLA_ABRE sentencias LLA_CIERRA
  ;

sentencias
  : (sentencia)*
  ;

sentencia
  : salida
  | 'salir' PUNTOCOMA
  ;

salida
  : 'imprimir' PAR_ABRE CADENA PAR_CIERRA PUNTOCOMA
  ;

condicion
  : VERDADERO
  | FALSO
  ;

SI         : 'si' ;
ENTONCES   : 'entonces' ;
IMPRIMIR   : 'imprimir' ;
VERDADERO  : 'verdadero' ;
FALSO      : 'falso' ;
TERMINAR   : 'salir' ;
LLA_ABRE   : '{' ;
LLA_CIERRA : '}' ;
PAR_ABRE   : '(' ;
PAR_CIERRA : ')' ;
PUNTOCOMA  : ';' ;


CADENA : '"' (~["\r\n])* '"' ;

fragment LETRA   : [a-zA-Z] ;
fragment DIGITO  : [0-9] ;
fragment SIMBOLO : . ;

WS : [ \t\r\n]+ -> skip ;
