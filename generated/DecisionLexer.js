// Generated from c:/Users/molin/Desktop/Tarea analizador/analizador sintaxis/Decision.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,108,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,
1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,5,11,89,8,11,10,11,12,11,92,9,11,
1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,15,103,8,15,11,15,12,15,104,
1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,25,0,27,0,29,0,31,13,1,0,4,3,0,10,10,13,13,34,34,2,0,65,90,97,122,1,0,
48,57,3,0,9,10,13,13,32,32,106,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,36,1,0,
0,0,5,45,1,0,0,0,7,54,1,0,0,0,9,64,1,0,0,0,11,70,1,0,0,0,13,76,1,0,0,0,15,
78,1,0,0,0,17,80,1,0,0,0,19,82,1,0,0,0,21,84,1,0,0,0,23,86,1,0,0,0,25,95,
1,0,0,0,27,97,1,0,0,0,29,99,1,0,0,0,31,102,1,0,0,0,33,34,5,115,0,0,34,35,
5,105,0,0,35,2,1,0,0,0,36,37,5,101,0,0,37,38,5,110,0,0,38,39,5,116,0,0,39,
40,5,111,0,0,40,41,5,110,0,0,41,42,5,99,0,0,42,43,5,101,0,0,43,44,5,115,
0,0,44,4,1,0,0,0,45,46,5,105,0,0,46,47,5,109,0,0,47,48,5,112,0,0,48,49,5,
114,0,0,49,50,5,105,0,0,50,51,5,109,0,0,51,52,5,105,0,0,52,53,5,114,0,0,
53,6,1,0,0,0,54,55,5,118,0,0,55,56,5,101,0,0,56,57,5,114,0,0,57,58,5,100,
0,0,58,59,5,97,0,0,59,60,5,100,0,0,60,61,5,101,0,0,61,62,5,114,0,0,62,63,
5,111,0,0,63,8,1,0,0,0,64,65,5,102,0,0,65,66,5,97,0,0,66,67,5,108,0,0,67,
68,5,115,0,0,68,69,5,111,0,0,69,10,1,0,0,0,70,71,5,115,0,0,71,72,5,97,0,
0,72,73,5,108,0,0,73,74,5,105,0,0,74,75,5,114,0,0,75,12,1,0,0,0,76,77,5,
123,0,0,77,14,1,0,0,0,78,79,5,125,0,0,79,16,1,0,0,0,80,81,5,40,0,0,81,18,
1,0,0,0,82,83,5,41,0,0,83,20,1,0,0,0,84,85,5,59,0,0,85,22,1,0,0,0,86,90,
5,34,0,0,87,89,8,0,0,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,34,0,0,94,24,1,0,0,0,95,96,7,1,
0,0,96,26,1,0,0,0,97,98,7,2,0,0,98,28,1,0,0,0,99,100,9,0,0,0,100,30,1,0,
0,0,101,103,7,3,0,0,102,101,1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,
105,1,0,0,0,105,106,1,0,0,0,106,107,6,15,0,0,107,32,1,0,0,0,3,0,90,104,1,
6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class DecisionLexer extends antlr4.Lexer {

    static grammarFileName = "Decision.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'si'", "'entonces'", "'imprimir'", "'verdadero'", 
                         "'falso'", "'salir'", "'{'", "'}'", "'('", "')'", 
                         "';'" ];
	static symbolicNames = [ null, "SI", "ENTONCES", "IMPRIMIR", "VERDADERO", 
                          "FALSO", "TERMINAR", "LLA_ABRE", "LLA_CIERRA", 
                          "PAR_ABRE", "PAR_CIERRA", "PUNTOCOMA", "CADENA", 
                          "WS" ];
	static ruleNames = [ "SI", "ENTONCES", "IMPRIMIR", "VERDADERO", "FALSO", 
                      "TERMINAR", "LLA_ABRE", "LLA_CIERRA", "PAR_ABRE", 
                      "PAR_CIERRA", "PUNTOCOMA", "CADENA", "LETRA", "DIGITO", 
                      "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

DecisionLexer.EOF = antlr4.Token.EOF;
DecisionLexer.SI = 1;
DecisionLexer.ENTONCES = 2;
DecisionLexer.IMPRIMIR = 3;
DecisionLexer.VERDADERO = 4;
DecisionLexer.FALSO = 5;
DecisionLexer.TERMINAR = 6;
DecisionLexer.LLA_ABRE = 7;
DecisionLexer.LLA_CIERRA = 8;
DecisionLexer.PAR_ABRE = 9;
DecisionLexer.PAR_CIERRA = 10;
DecisionLexer.PUNTOCOMA = 11;
DecisionLexer.CADENA = 12;
DecisionLexer.WS = 13;



