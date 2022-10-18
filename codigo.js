
function modificar(){
    var cambiar = document.getElementById("titulo");
    cambiar.innerHTML = 'TITULO MODIFICADO';
}
function nuevo(){
    var cambiar = document.getElementById("titulo");
    cambiar.innerHTML = "TITULO A MODIFICAR";
}


function reemplazar(){
    var elemento = document.getElementById('titulo');
    contenido = document.createTextNode('TEXTO NUEVO');
    
    reemp.replaceChild(elemento, contenido);
}

