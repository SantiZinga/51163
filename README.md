# Analizador sintáctico de asignaciones y outputs con ANTLR4 y JavaScript

Este analizador fue creado a partir de la gramatica que se me fué proporcionada en el apartado "RECUPERACIÓN Entregar Analizador" Este programa lo que hace es que analiza sentencias simples de asignación y salida según la gramática proporcionada en la consigna

# Estructura de archivos

- `Decision.g4` : Gramática ANTLR4.
- `generated/` : Carpeta donde se generan Lexer, Parser y Visitor.
- `CustomVisitor.js` : Visitor personalizado con la lógica de interpretación.
- `index.js` : Punto de entrada principal.
- `input_valid1.txt`, `input_valid2.txt`: Ejemplos válidos.
- `input_error1.txt`, `input_error2.txt`: Ejemplos con errores.
- `Gramática Asignada.txt`: Gramática asignada en texto plano.
- `Gramática Asignada en formato PDF`: Captura original de la consigna (opcional, pero recomendable).
- `README.md`: Este archivo con instrucciones.

# Requisitos

- Node.js (v16+)
- ANTLR4 Tool (`antlr-4.13.2-complete.jar`)
- Extensión ANTLR4 para VSCode (opcional)
- Java (Para que se vuelvan a hacer los archivos de ANTLR)

# Pasos para ejecutar el analizador desde Visual Studio Code

1. Cloná el repositorio desde GitHub y abrí la carpeta principal del proyecto con Visual Studio Code.

2. Abrí el proyecto en VSCode.

3. Abrí la terminal integrada en VSCode:
   - Andá al menú superior y seleccioná `Terminal` > `Nueva terminal`

4. Instalar las dependencias necesarias:
   npm install

5. Ejecutá el analizador con el archivo de entrada que quieras analizar:

   - node index.js input_error1.txt

   - node index.js input_error2.txt

   - node index.js input_valid1.txt
   
   - node index.js input_valid2.txt