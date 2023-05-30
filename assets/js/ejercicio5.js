

function calcularDescuento() {
    let coche = document.getElementById("coche").value;
    let precio = document.getElementById("precio").value;
    let descuento = 0;
  
    switch (coche) {
      case "FORD FIESTA":
        descuento = (precio * 0.05) - precio;
        break;
      case "FORD FOCUS":
        descuento = (precio * 0.1) - precio;
        break;
      case "FORD ESCAPE":
        descuento = (precio * 0.2 - precio) ;
        break;
      default:
        break;
    }
  
    var resultado = "Coche seleccionado: " + coche + "<br>";
    resultado += "Precio del coche: $" + precio + "<br>";
    resultado += "Con el descuento aplicado: $" + descuento.toFixed(0);
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  