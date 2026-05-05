function generarTablas(){
    let contenedor = document.getElementById("contenedor");
    let numero = parseInt(document.getElementById("txtNumero").value);

    if (isNaN(numero)) {
        contenedor.innerHTML = "<p style='color: yellow;'> Escribe un número primero </p>";
        return;
    }

    let contenido = `<h2> Tabla del ${numero} </h2>`;

    for(let i =0; i <= 10; i++){
        contenido += "<div class='fila'> " + numero + " x " + i + " = " + (numero * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}

function volver() {
    let contenedor = document.getElementById("contenedor");
    let input = document.getElementById("txtNumero");

    contenedor.innerHTML = ""; 
    input.value = "";          
    input.focus();             
}