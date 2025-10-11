/*El valor null representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos
de JS y se considera falso en las operaciones booleanas*/
function getVowels(str) {
    const m = str.match(/[aaeiou]/gi);
    if (m === null) {
        return 0;
    }

    return m.length;
}

console.log(getVowels("ana"));

/*Diferencia entre nulo e indefinido
Al verificar si es nulo o indefinido, tenga cuidado con las diferencias entre los operadores de igualdad (==)
e identidad(===), ya que el primero realiza conversión de tipo.*/
console.log('\n');
console.log(`typeof null -> ${typeof null}`);
console.log(`typeof undefined -> ${typeof undefined}`);
console.log(`null === undefined -> ${null === undefined}`);
console.log(`null == undefined -> ${null == undefined}`);
console.log(`null === null -> ${null === null}`);
console.log(`null == null -> ${null == null}`);
console.log(`!null ->  ${!null}`);
console.log(`Number.isNaN(1 + null) -> ${Number.isNaN(1 + null)}`);
console.log(`Number.isNaN(1 + undefined) -> ${Number.isNaN(1 + undefined)}`);