

function calcularNotaMedia() {
  
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);

  var notaMedia = (nota1 * 0.3) + (nota2 * 0.7);

  
  var resultado = "La nota media ponderada es: " + notaMedia.toFixed(2);
  document.getElementById("resultado").innerHTML = resultado;
}
