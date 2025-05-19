// Generated from c:/Users/molin/Desktop/Tarea analizador/analizador sintaxis/Decision.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DecisionVisitor from './DecisionVisitor.js';

const serializedATN = [4,1,13,51,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,4,1,4,1,4,3,4,41,8,
4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,4,5,
46,0,17,1,0,0,0,2,22,1,0,0,0,4,24,1,0,0,0,6,34,1,0,0,0,8,40,1,0,0,0,10,42,
1,0,0,0,12,48,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,
0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,
0,22,23,3,4,2,0,23,3,1,0,0,0,24,25,5,1,0,0,25,26,3,12,6,0,26,27,5,2,0,0,
27,28,5,7,0,0,28,29,3,6,3,0,29,30,5,8,0,0,30,5,1,0,0,0,31,33,3,8,4,0,32,
31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,7,1,0,0,0,36,34,
1,0,0,0,37,41,3,10,5,0,38,39,5,6,0,0,39,41,5,11,0,0,40,37,1,0,0,0,40,38,
1,0,0,0,41,9,1,0,0,0,42,43,5,3,0,0,43,44,5,9,0,0,44,45,5,12,0,0,45,46,5,
10,0,0,46,47,5,11,0,0,47,11,1,0,0,0,48,49,7,0,0,0,49,13,1,0,0,0,3,17,34,
40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DecisionParser extends antlr4.Parser {

    static grammarFileName = "Decision.g4";
    static literalNames = [ null, "'si'", "'entonces'", "'imprimir'", "'verdadero'", 
                            "'falso'", "'salir'", "'{'", "'}'", "'('", "')'", 
                            "';'" ];
    static symbolicNames = [ null, "SI", "ENTONCES", "IMPRIMIR", "VERDADERO", 
                             "FALSO", "TERMINAR", "LLA_ABRE", "LLA_CIERRA", 
                             "PAR_ABRE", "PAR_CIERRA", "PUNTOCOMA", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "decision", "sentencias", 
                         "sentencia", "salida", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DecisionParser.ruleNames;
        this.literalNames = DecisionParser.literalNames;
        this.symbolicNames = DecisionParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DecisionParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 14;
	            this.instruccion();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(DecisionParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DecisionParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DecisionParser.RULE_decision);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(DecisionParser.SI);
	        this.state = 25;
	        this.condicion();
	        this.state = 26;
	        this.match(DecisionParser.ENTONCES);
	        this.state = 27;
	        this.match(DecisionParser.LLA_ABRE);
	        this.state = 28;
	        this.sentencias();
	        this.state = 29;
	        this.match(DecisionParser.LLA_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencias() {
	    let localctx = new SentenciasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DecisionParser.RULE_sentencias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===6) {
	            this.state = 31;
	            this.sentencia();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DecisionParser.RULE_sentencia);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.salida();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.match(DecisionParser.TERMINAR);
	            this.state = 39;
	            this.match(DecisionParser.PUNTOCOMA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DecisionParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(DecisionParser.IMPRIMIR);
	        this.state = 43;
	        this.match(DecisionParser.PAR_ABRE);
	        this.state = 44;
	        this.match(DecisionParser.CADENA);
	        this.state = 45;
	        this.match(DecisionParser.PAR_CIERRA);
	        this.state = 46;
	        this.match(DecisionParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DecisionParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DecisionParser.EOF = antlr4.Token.EOF;
DecisionParser.SI = 1;
DecisionParser.ENTONCES = 2;
DecisionParser.IMPRIMIR = 3;
DecisionParser.VERDADERO = 4;
DecisionParser.FALSO = 5;
DecisionParser.TERMINAR = 6;
DecisionParser.LLA_ABRE = 7;
DecisionParser.LLA_CIERRA = 8;
DecisionParser.PAR_ABRE = 9;
DecisionParser.PAR_CIERRA = 10;
DecisionParser.PUNTOCOMA = 11;
DecisionParser.CADENA = 12;
DecisionParser.WS = 13;

DecisionParser.RULE_programa = 0;
DecisionParser.RULE_instruccion = 1;
DecisionParser.RULE_decision = 2;
DecisionParser.RULE_sentencias = 3;
DecisionParser.RULE_sentencia = 4;
DecisionParser.RULE_salida = 5;
DecisionParser.RULE_condicion = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(DecisionParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_decision;
    }

	SI() {
	    return this.getToken(DecisionParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(DecisionParser.ENTONCES, 0);
	};

	LLA_ABRE() {
	    return this.getToken(DecisionParser.LLA_ABRE, 0);
	};

	sentencias() {
	    return this.getTypedRuleContext(SentenciasContext,0);
	};

	LLA_CIERRA() {
	    return this.getToken(DecisionParser.LLA_CIERRA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_sentencias;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitSentencias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	TERMINAR() {
	    return this.getToken(DecisionParser.TERMINAR, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(DecisionParser.PUNTOCOMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(DecisionParser.IMPRIMIR, 0);
	};

	PAR_ABRE() {
	    return this.getToken(DecisionParser.PAR_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(DecisionParser.CADENA, 0);
	};

	PAR_CIERRA() {
	    return this.getToken(DecisionParser.PAR_CIERRA, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(DecisionParser.PUNTOCOMA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(DecisionParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(DecisionParser.FALSO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DecisionParser.ProgramaContext = ProgramaContext; 
DecisionParser.InstruccionContext = InstruccionContext; 
DecisionParser.DecisionContext = DecisionContext; 
DecisionParser.SentenciasContext = SentenciasContext; 
DecisionParser.SentenciaContext = SentenciaContext; 
DecisionParser.SalidaContext = SalidaContext; 
DecisionParser.CondicionContext = CondicionContext; 
