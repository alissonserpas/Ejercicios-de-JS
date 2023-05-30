

function analizarValores() {
    let valores = document.getElementById("valores").value.split(" ").map(Number);
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let acumuladoPares = 0;
  
    for (var i = 0; i < valores.length; i++) {
      if (valores[i] < 0) {
        negativos++;
      } else if (valores[i] > 0) {
        positivos++;
      }
  
      if (valores[i] % 15 === 0) {
        multiplos15++;
      }
  
      if (valores[i] % 2 === 0) {
        acumuladoPares += valores[i];
      }
    }
  
    let resultado = "Cantidad de valores negativos: " + negativos + "<br>" +
                    "Cantidad de valores positivos: " + positivos + "<br>" +
                    "Cantidad de múltiplos de 15: " + multiplos15 + "<br>" +
                    "Valor acumulado de los números pares: " + acumuladoPares;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  