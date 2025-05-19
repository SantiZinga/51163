// Generated from c:/Users/molin/Desktop/Tarea analizador/analizador sintaxis/Decision.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DecisionParser}.
 */
public interface DecisionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DecisionParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(DecisionParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(DecisionParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(DecisionParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(DecisionParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterDecision(DecisionParser.DecisionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitDecision(DecisionParser.DecisionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(DecisionParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(DecisionParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(DecisionParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(DecisionParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(DecisionParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(DecisionParser.CondicionContext ctx);
}