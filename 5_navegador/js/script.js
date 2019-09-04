// Ruta de la localidad
var ruta = window.location;
console.log(ruta);
document.write("Estas en: " + ruta+"<br>");

// Saber el navegador que esta utilizando el cliente

var navegadorCliente = navigator.userAgent;

document.write("Estas en: " + navegadorCliente +"<br>");

if(navegadorCliente.indexOf("Chrome")>-1){
    alert("Usted esta utilizando Google Chrome");
    //document.write("Estas en Chrome <br>");
}
else if(navegadorCliente.indexOf("Firefox")>-1){
    alert("Usted esta utilizando Firefox");
}
else if(navegadorCliente.indexOf("MSIE")>-1){
    alert("Usted esta utilizando Internet Explorer");
}
