# Analizador de expresiones aritméticas con ANTLR4 y javascript

Este analizador fue creado a partir de la gramatica que se me fué proporcionada en el apartado "Solicitar Tema Analizador"

 Estructura de archivos

- `Decision.g4` : Gramática ANTLR4.
- `generated/` : Carpeta donde se generan Lexer, Parser y Visitor.
- `CustomVisitor.js` : Visitor personalizado con la lógica de interpretación.
- `index.js` : Punto de entrada principal.
- `input_***.txt` : Archivos de prueba ya incluidos en la carpeta que vienen escritos con el nombre "input_..." (Hay 4 ejemplos: 2 válidos, 2 con errores.).

# Requisitos

- Node.js (v16+)
- ANTLR4 Tool (`antlr-4.13.2-complete.jar`)
- Extensión ANTLR4 para VSCode (opcional)
- Java (Para que se vuelvan a hacer los archivos de ANTLR)

# Pasos para ejecutar

1. Click derecho sobre la carpeta (O dentro de ella en el apartado principal dentro de ella) "Analizador sintaxis" y se selecciona la opción "Open Git Bash here"

2. Instalar las dependencias necesarias (Solo la primera vez)

3. Ejecutar con un archivo de entrada:

   
   npm start input_...txt 
   
   Por ejemplo: npm start input_valid1.txt
   

4. Probar distintos archivos de ejemplo:

   -npm start input_error1.txt

   -npm start input_error2.txt

   -npm start input_valid1.txt
   
   -npm start input_valid2.txt
   
