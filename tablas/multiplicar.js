function generarTablas(){
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    for(let i =0; i <= 10; i++){
        contenido += "<div class='fila'>5 x " + i + " = " + (5 * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}