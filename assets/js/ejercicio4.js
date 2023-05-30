
function calcularMayor() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  let mayor;

  if(numero1 >= numero2){
    mayor = numero1;
	}else if (numero2 > numero1){
        mayor = numero2;
    }else {
        mayor = "Los números son iguales";
      }

  var resultado = "El número mayor es: " + mayor;

  document.getElementById("resultado").innerHTML = resultado;
}

