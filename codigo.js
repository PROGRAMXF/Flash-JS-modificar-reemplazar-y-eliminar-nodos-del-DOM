function modificar() {
  var cambiar = document.getElementById("titulo");
  cambiar.innerHTML = "MODIFICADO";
}
function nuevo() {
  var cambiar = document.getElementById("titulo");
  cambiar.innerHTML = "TITULO A MODIFICAR";
}




function reemplazar(){
    var nuevoH2 = document.createElement("h2");
    var nuevoH2Texto = document.createTextNode("Bienvenido");
    nuevoH2.appendChild(nuevoH2Texto);

    var mydiv = document.getElementById("id1");
    var viejoP = document.getElementById("para1");

    mydiv.replaceChild(nuevoH2, viejoP);
}
window.onload = function(){
    document.getElementById("btn").onclick = reemplazar;
}