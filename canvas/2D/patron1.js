(function iniciar(event) {

  function sumar(...parametros) {
    return parametros.reduce((numAnterior, numActual) => numAnterior + numActual, 0);
  }

  function restar(...parametros) {
    return parametros.reduce((numAnterior, numActual, index) => parametros.length > 1 ? index === 0 ? numActual : numAnterior - numActual : numActual, 0);
  }

  function obtenerElementoLienzo() {
    return document.querySelector("#dibujo")
  }

  function obtenerLienzo2D() {
    return obtenerElementoLienzo().getContext("2d");
  }

  function obtenerTamanoLienzo() {
    return obtenerElementoLienzo().width;
  }

  function dibujarLinea(color, xi, yi, xf, yf) {
    let lienzo = obtenerLienzo2D();
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
  }

  function dibujarPatron() {

    let color = "blue", limite = obtenerTamanoLienzo();

    for (let num = 0; num < limite; num += 10) {

      dibujarLinea(color, 0, num, num + 10, limite);
      dibujarLinea(color, num, 0, limite, num + 10);

      dibujarLinea(color, limite - num, 0, 0, num + 10);
      dibujarLinea(color, num, limite, limite, limite - num - 10);
    }
  }

  dibujarPatron();

})();