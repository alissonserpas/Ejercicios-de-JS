
  
function calcularAumento() {
  let nombre = document.getElementById("nombre").value;
  let salario = parseFloat(document.getElementById("salario").value);
  let categoria = document.getElementById("categoria").value;
  let aumento = 0;

  if (categoria === "A") {
    aumento = salario * 0.15;
  } else if (categoria === "B") {
    aumento = salario * 0.3;
  } else if (categoria === "C") {
    aumento = salario * 0.1;
  } else if (categoria === "D") {
    aumento = salario * 0.2;
  }

  let nuevoSalario = salario + aumento;

  let resultado = "Nombre: " + nombre + "<br>";
  resultado += "Salario actual: $" + salario.toFixed(2) + "<br>";
  resultado += "Aumento: $" + aumento.toFixed(2) + "<br>";
  resultado += "Nuevo salario: $" + nuevoSalario.toFixed(2);

  document.getElementById("resultado").innerHTML = resultado;
}
