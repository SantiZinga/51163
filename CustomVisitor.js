const DecisionVisitor = require('./generated/DecisionVisitor').default || require('./generated/DecisionVisitor');

class CustomVisitor extends DecisionVisitor {
   
    visitPrograma(ctx) {
        return this.visit(ctx.instruccion());
    }

    
    visitInstruccion(ctx) {
        return this.visit(ctx.decision());
    }

    
    visitDecision(ctx) {
        const condicion = this.visit(ctx.condicion());
        const sentencias = ctx.sentencia; 

        if (condicion && sentencias) {
            for (const sent of sentencias) {
                this.visit(sent);
            }
        }
        return null;
    }

    
    visitCondicion(ctx) {
        return ctx.getText() === "verdadero";
    }

    
    visitSentencia(ctx) {
        return this.visit(ctx.salida());
    }

    
    visitSalida(ctx) {
        if (ctx.CADENA) {
            const raw = ctx.CADENA().getText(); 
            const text = raw.substring(1, raw.length - 1); 
            console.log(text);
        }
        // Chequea token salir
        if (ctx.SALIR && ctx.SALIR.length > 0) {
            process.exit(0); 
        }
        return null;
    }

    
    visitTerminal(ctx) {
        return this.visitChildren(ctx);
    }
}

module.exports = CustomVisitor;
