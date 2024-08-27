
const textoEntrada = document.getElementById("texto-entrada").value;
const botonCopiar = document.getElementById('boton-copiar');
const textoSalida = document.getElementById("texto-salida");

function encriptarTexto() {
  let textoEncriptado = btoa(textoEntrada);

  textoEncriptado = textoEncriptado.replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  document.getElementById("texto-salida").value = textoEncriptado;
  ocultarSalida('caja-texto-salida', 'imagen-persona');
  limpiarCaja("texto-entrada");
}

function desencriptarTexto() {
  let textoDesencriptado = textoEntrada.replace(/-/g, '+')
  .replace(/_/g, '/');

  while (textoDesencriptado.length % 4) {
    textoDesencriptado += '=';
  }

  textoDesencriptado = atob(textoDesencriptado);

  document.getElementById("texto-salida").value = textoDesencriptado;
  limpiarCaja("texto-entrada");
}

botonCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textoSalida.value);
  alert("Texto copiado al portapapeles");
  limpiarCaja("texto-salida");
  ocultarSalida('imagen-persona', 'caja-texto-salida')
  textoEntrada.focus();
});

function ocultarSalida(entra, sale) {
  let elementoHTML = document.getElementById(entra);
  elementoHTML.removeAttribute('hidden');
  elementoHTML = document.getElementById(sale);
  elementoHTML.hidden = true;
}

function limpiarCaja(caja) {
  const lCaja = document.getElementById(caja);
  lCaja.value = "";
}

