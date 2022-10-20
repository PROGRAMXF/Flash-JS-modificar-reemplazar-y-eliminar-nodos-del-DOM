//modificar
function modificar() {
  var cambiar = document.getElementById("titulo");
  cambiar.innerHTML = "LISTO, ¡TE MODIFIQUE!";
}
function nuevo() {
  var cambiar = document.getElementById("titulo");
  cambiar.innerHTML = "Modificame";
}



//reemplazar
function reemplazar(){
    var nuevop = document.createElement("p");
    var nuevoTexto = document.createTextNode("¡¡Muchas gracias!!");
    nuevop.appendChild(nuevoTexto);

    var mydiv = document.getElementById("id1");
    var viejoP = document.getElementById("para1");

    mydiv.replaceChild(nuevop, viejoP);
}
window.onload = function(){
    document.getElementById("btn").onclick = reemplazar;
}


//eliminar

function remove(id) 
	 {
     var element = document.getElementById(id);
     return element.parentNode.removeChild(element);
	 }
   function eliminar(){
    remove("removeme");
   }
   






