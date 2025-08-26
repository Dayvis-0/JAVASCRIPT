const inputNumber = document.getElementById("inputNumber");

/*La declaracion switch evalua una expresion, haciendo coincidir la expresion con el valor de la expresion con una serie de 
clausulas case , y ejecuta declaraciones despues de la primera clausula case con un valor coincidente, hasta una declaracion
break. La clausula default de switch se soltara a la declaracion si no concide ningun case con el valor de la expresion
Sintaxis
switch (expression) {
    case caseExpression1:
        statementes
    case caseExpression2:
        statemente
    //...   
    case caseExpressionN:
        statementes
    default:
        statementes
}*/

inputNumber.addEventListener("change", () => {
    
    const value = Number(inputNumber.value);

    switch (value) {
        case 1:
            alert("One");
            break;
        case 2:
            alert("Two");
            break;
        case 3:
            alert("Three");
            break;
        case 4:
            alert("Four");
            break;
        case 5:
            alert("Five");
            break;
        case 6:
            alert("Six");
            break;
        case 7:
            alert("Seven");
            break;
        case 8:
            alert("Eight");
            break;
        case 9:
            alert("Nine");
            break;
        case 10:
            alert("Ten");
            break;
        default:
            alert("The number is not in the range");
    }
});
