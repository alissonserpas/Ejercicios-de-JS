

function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById("temperatura").value);
    let parrafo = document.querySelector('p').value;
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
  
    let resultado = "";
    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
      parrafo = "Temperatura baja";
    } else if (temperaturaFahrenheit > 32 && temperaturaFahrenheit <= 68) {
      parrafo = "Temperatura adecuada";
    } else if (temperaturaFahrenheit > 68 && temperaturaFahrenheit <= 96) {
      parrafo = "Temperatura alta";
    } else {
      parrafo = "Temperatura desconocida"; 
      
    }
    resultado = "Temperatura en Fahrenheit:" + temperaturaFahrenheit + "<br>"  ;
    resultado += "La temperatura esta:" + parrafo + "<br>";
    document.getElementById("resultado").innerHTML = resultado;
  }
  