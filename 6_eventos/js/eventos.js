var txtDato = document.getElementById('txtDato');
var btnEnviar = document.getElementById('btnEnviar');

// Escuchador de eventos del boton
btnEnviar.addEventListener("click", darEscribirDato);

function darEscribirDato(){
    var texto = txtDato.value;
    alert('Usted digito: ' + texto);
}

document.write(btnEnviar)