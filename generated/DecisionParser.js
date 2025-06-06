// Generated from Decision.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DecisionListener from './DecisionListener.js';
import DecisionVisitor from './DecisionVisitor.js';

const serializedATN = [4,1,9,34,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,7,8,30,0,13,1,
0,0,0,2,18,1,0,0,0,4,20,1,0,0,0,6,25,1,0,0,0,8,31,1,0,0,0,10,12,3,2,1,0,
11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,
13,1,0,0,0,16,19,3,4,2,0,17,19,3,6,3,0,18,16,1,0,0,0,18,17,1,0,0,0,19,3,
1,0,0,0,20,21,5,6,0,0,21,22,5,1,0,0,22,23,3,8,4,0,23,24,5,2,0,0,24,5,1,0,
0,0,25,26,5,3,0,0,26,27,5,4,0,0,27,28,5,8,0,0,28,29,5,5,0,0,29,30,5,2,0,
0,30,7,1,0,0,0,31,32,7,0,0,0,32,9,1,0,0,0,2,13,18];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DecisionParser extends antlr4.Parser {

    static grammarFileName = "Decision.g4";
    static literalNames = [ null, "'='", "';'", "'output'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "Identifier", 
                             "Number", "TextLiteral", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DecisionParser.ruleNames;
        this.literalNames = DecisionParser.literalNames;
        this.symbolicNames = DecisionParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DecisionParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===6) {
	            this.state = 10;
	            this.simpleStatement();
	            this.state = 15;
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



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DecisionParser.RULE_simpleStatement);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.outputStatement();
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DecisionParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(DecisionParser.Identifier);
	        this.state = 21;
	        this.match(DecisionParser.T__0);
	        this.state = 22;
	        this.constant();
	        this.state = 23;
	        this.match(DecisionParser.T__1);
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



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DecisionParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(DecisionParser.T__2);
	        this.state = 26;
	        this.match(DecisionParser.T__3);
	        this.state = 27;
	        this.match(DecisionParser.TextLiteral);
	        this.state = 28;
	        this.match(DecisionParser.T__4);
	        this.state = 29;
	        this.match(DecisionParser.T__1);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DecisionParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
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
DecisionParser.T__0 = 1;
DecisionParser.T__1 = 2;
DecisionParser.T__2 = 3;
DecisionParser.T__3 = 4;
DecisionParser.T__4 = 5;
DecisionParser.Identifier = 6;
DecisionParser.Number = 7;
DecisionParser.TextLiteral = 8;
DecisionParser.WS = 9;

DecisionParser.RULE_program = 0;
DecisionParser.RULE_simpleStatement = 1;
DecisionParser.RULE_assignmentStatement = 2;
DecisionParser.RULE_outputStatement = 3;
DecisionParser.RULE_constant = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_program;
    }

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.exitSimpleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitSimpleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(DecisionParser.Identifier, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_outputStatement;
    }

	TextLiteral() {
	    return this.getToken(DecisionParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.exitOutputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitOutputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DecisionParser.RULE_constant;
    }

	Number() {
	    return this.getToken(DecisionParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(DecisionParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DecisionListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DecisionVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DecisionParser.ProgramContext = ProgramContext; 
DecisionParser.SimpleStatementContext = SimpleStatementContext; 
DecisionParser.AssignmentStatementContext = AssignmentStatementContext; 
DecisionParser.OutputStatementContext = OutputStatementContext; 
DecisionParser.ConstantContext = ConstantContext; 
