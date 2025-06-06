const fs = require('fs');
const antlr4 = require('antlr4');
const DecisionLexer = require('./generated/DecisionLexer').default;
const DecisionParser = require('./generated/DecisionParser').default;
const CustomVisitor = require('./CustomVisitor');

function main() {
  
  let input;
  //Revisar que puse bien la ruta
  try {
    input = fs.readFileSync(process.argv[2] || 'input.txt', 'utf8');
  } catch (err) {
    console.error('Error leyendo archivo input.txt:', err.message);
    process.exit(1);
  }

  const chars = new antlr4.InputStream(input);
  const lexer = new DecisionLexer(chars);

  lexer.reset();

  //Cuidado de que se imprima bien
  console.log('Tabla de tokens:');
let t;
while ((t = lexer.nextToken()).type !== antlr4.Token.EOF) {
    if (typeof t.text !== 'undefined') {
        console.log(`${t.text}\t->\t${DecisionLexer.symbolicNames[t.type] || DecisionLexer.literalNames[t.type] || t.type}`);
    }
}



  const chars2 = new antlr4.InputStream(input);
  const lexer2 = new DecisionLexer(chars2);
  const tokens = new antlr4.CommonTokenStream(lexer2);
  const parser = new DecisionParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.program();

  if (parser._syntaxErrors > 0) {
    console.error('Errores sintácticos encontrados.');
    
  } else {
    console.log('Entrada válida.');
  }

  console.log('Árbol sintáctico:');
  console.log(tree.toStringTree(parser.ruleNames, parser));

  const visitor = new CustomVisitor();
  visitor.visit(tree);
}

main();
