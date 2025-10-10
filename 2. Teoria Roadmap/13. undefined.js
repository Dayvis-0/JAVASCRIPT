//La propiedad globla undefined representa el valor primitivo undefined. Es uno de los tipos primitivos de JS
function test(t) {
    if (t === undefined) {
        return "Undefined value!";
    }
    return t;
}

let x;

console.log(test(x));