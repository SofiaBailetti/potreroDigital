const modoNocturnoBoton = document.getElementById("modoNocturnoBoton");
const contenido = document.getElementById("contenido");

modoNocturnoBoton.addEventListener("click", function() {
    contenido.classList.toggle("modo-nocturno");
    
    if (contenido.classList.contains("modo-nocturno")) {
        modoNocturnoBoton.src = "./imagenes/solcolor.png";
        modoNocturnoBoton.alt = "Sol";
    } else {
        modoNocturnoBoton.src = "./imagenes/lunacolor.png";
        modoNocturnoBoton.alt = "Luna";
    }
});


const botonDatosDesarrollador = document.getElementById("datosDesarrollador");

botonDatosDesarrollador.addEventListener("click", function () {
    const datosDelDesarrollador = "Sofia Bailetti\nCel: 291-4279779\nBahía Blanca\nArgentina";
    alert(datosDelDesarrollador);
    console.log("El usuario ha hecho clic en Aceptar.");
});


