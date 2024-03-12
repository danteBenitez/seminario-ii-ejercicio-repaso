// Escoger elementos del DOM y guardarlos como variables
const label = document.getElementById("label");
const input = document.getElementById("input");

// Estilar el label
label.style.backgroundColor = 'yellow';
label.style.color = 'red';
label.style.display = 'none'; // Oculto por defecto hasta pulsar el botón
label.style.maxWidth = '10rem';

/**
 * Función a ejectuar cuando se presiona el botón
 * Cambia el color del label a rojo, realiza una alerta
 * e imprime a la consola
 */
function execute(text) {
  if (text.length == 0) {
    label.style.display = "block";
  } else {
    label.style.display = "none";
    const message = `Usted cargó ${text}`;
    alert(message)
    console.log(message);
  }
}

// Registrar manejador de eventos para el botón
document.getElementById("button").addEventListener("click", () => {
  execute(input.value);
});

// Cada vez que el usuario escribe en el input,
// se chequea si el mismo está vacío,
// en cuyo caso se oculta el label
input.addEventListener("input", () => {
  if (input.value.length != 0) {
    label.style.display = "none";
  }
});
