// Generated from c:/Users/molin/Desktop/Analizador recuperatorio/Analizador original/51163/Decision.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DecisionParser}.
 */
public interface DecisionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DecisionParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(DecisionParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(DecisionParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleStatement(DecisionParser.SimpleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleStatement(DecisionParser.SimpleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStatement(DecisionParser.AssignmentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStatement(DecisionParser.AssignmentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void enterOutputStatement(DecisionParser.OutputStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void exitOutputStatement(DecisionParser.OutputStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DecisionParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterConstant(DecisionParser.ConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link DecisionParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitConstant(DecisionParser.ConstantContext ctx);
}