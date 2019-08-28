function sumar(num1, num2) {

    var suma = num1 + num2;
    document.write("El resultado de sumar " + num1 + " con " + num2 + " es: " + suma + "</br>");

}

function restar(num1, num2) {

    var resta = num1 - num2;
    document.write("El resultado de restar " + num1 + " con " + num2 + " es: " + resta + "</br>");

}


function multiplicar(num1, num2) {

    var multiplicacion = num1 * num2;
    document.write("El resultado de multiplicar " + num1 + " con " + num2 + " es: " + multiplicacion + "</br>");

}


function dividir(num1, num2) {

    if (num2 != 0) {
        var division = num1 / num2;
        document.write("El resultado de dividir " + num1 + " con " + num2 + " es: " + division + "</br>");
    }
    else {
        document.write("Error: El divisor no puede ser 0");
    }
}

function operarTodo(num1, num2) {
    document.write("</br>");
    sumar(num1, num2);
    restar(num1, num2);
    multiplicar(num1, num2);
    dividir(num1, num2);
    document.write("__________________________________</br>");

}

operarTodo(7, 4);
operarTodo(6, 3);
operarTodo(1, 5);