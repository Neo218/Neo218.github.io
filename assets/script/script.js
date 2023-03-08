// Script para cambiar entre estilos

const botonEstilo = document.querySelector("#botonEstilo");
const styles2Stylesheet = document.querySelector("#styles2-stylesheet");
let isstyles2 = false;

function cambiarEstilo() {
  if (isstyles2) {
    styles2Stylesheet.disabled = true;
    isstyles2 = false;
  } else {
    styles2Stylesheet.disabled = false;
    isstyles2 = true;
  }
}

