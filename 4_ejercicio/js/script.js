function darPrecioFinal(pPrecioInicial) {

    if (pPrecioInicial >= 1) {
        vendedor = (pPrecioInicial * 0.3) + pPrecioInicial;
        iva = (vendedor * 0.19) + vendedor;
        precioFinal = iva;

        document.write("El precio final es: " + precioFinal + "</br>");
    }
    else if (pPrecioInicial == 0) {
        document.write("El precio del producto NO puede ser 0.</br>");
    }
    else {
        document.write("El precio del producto NO puede ser negativo.</br>");
    }

}

darPrecioFinal(-430);