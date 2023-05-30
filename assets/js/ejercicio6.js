


function calcularDescuento() {
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let precio = document.getElementById("precio").value;
    let descuento = 0;
  
    switch (destino) {
      case "Costa del Sol":
        if (origen === "Palma") {
          descuento = (precio * 0.05) - precio;
        }
        break;
      case "Panchimalco":
        descuento = (precio * 0.1) - precio;
        break;
      case "Puerto el Triunfo":
        descuento = (precio * 0.15) - precio;
        break;
      default:
        break;
    }
  
    let resultado = "Origen: " + origen + "<br>";
    resultado += "Destino: " + destino + "<br>";
    resultado += "Precio del viaje: $ " + precio + "<br>";
    resultado += "Descuento aplicado: $ " + descuento.toFixed(2) ;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  