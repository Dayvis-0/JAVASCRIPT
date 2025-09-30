/*Se refiere al proceso mediante el cuale el interprete parece mover la declaracion de funciones, variables, clases o importaciones
en la parte superior de su alcance, antes de laa ejecucion del codigo*/

// Ejemplo de Temporal Dead Zone(TDZ)
const x = 1;
 {
    console.log(x);
    const x = 2;
 }
