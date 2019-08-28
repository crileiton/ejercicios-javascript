/**
 * Utilizando ciclo for
 */

document.write("<h1> Utilizando ciclo for. </h1></br>");
for (var i = 0; i <= 10; i += 1) {
    document.write("Número:" + i + "</br>");
}

/**
 * Utilizando ciclo while
 */

document.write("<h1> Utilizando ciclo while. </h1></br>");
var j = 1;
while (j <= 10) {
    document.write("Número: " + j + "</br>");
    j += 1;
}

/**
 * Serie de fibonacci for
 */

document.write("<h1> Serie de fibonacci - for. </h1></br>");
var num1 = 0;
var num2 = 1;
var resultado;

document.write("<b>Número 1 de la serie: </b>" + num1 + "</br>");
document.write("<b>Número 2 de la serie: </b>" + num2 + "</br>");

for (var i = 3; i <= 10000; i++) {
    resultado = num1 + num2; r=2
    
    num1 = num2;
    num2 = resultado;
    
    document.write("<b>Número "+ i + " de la serie: </b> " + resultado + "</br>");
}

