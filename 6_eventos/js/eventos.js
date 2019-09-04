var txtDato = document.getElementById('txtDato');
var btnEnviar = document.getElementById('btnEnviar');

// Escuchador de eventos del boton
// Con dobleclick
// btnEnviar.addEventListener("dblclick", darEscribirDato);
btnEnviar.addEventListener("click", darEscribirDato);

function darEscribirDato(){
    var texto = txtDato.value;
    alert('Usted digito: ' + texto);
}
