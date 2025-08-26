

/*La declaracion try...catch se compone de un bloque try y ya sea un bloque catch, un bloque finally, o ambos. El codigo en el
bloque try se ejecuta primero y si genera una excepcion, el codigo en el bloque catch se ejecutara. El codigo en el bloque finally
siempre se ejecutara antes de que el flujo de control salga de toda la construccion.
Sintaxis

try {
    tryStatements
} catch (exceptionVar) {
    catchStatements
} finally {
    finallyStatements
}*/

try  {
    try {
        throw new Error("");
    }
}