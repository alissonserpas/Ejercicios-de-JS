
function verificar() {
    let edad =(document.getElementById("edad").value);
    let mensaje = (edad >= 18) ? "Eres mayor de Edad :)" : "Eres menor de Edad :'(";
    document.getElementById("resultado").textContent = mensaje;
  }
  
  