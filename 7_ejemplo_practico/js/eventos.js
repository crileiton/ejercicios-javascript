var txtCantidad = document.getElementById('txtCantidad');
var btnCalcular = document.getElementById('btnCalcular');
var total = document.getElementById('total');

btnCalcular.addEventListener("click", darCalcularPrecio);

function darCalcularPrecio(){
    var cantidad = parseInt(txtCantidad.value);
    var total_compra = cantidad * 80000;
    total.innerHTML = "El total de la compra es: " + total_compra;
}
