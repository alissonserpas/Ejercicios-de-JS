function notaFinal() {
    
    let nombre =document.getElementById("nombre") ;
    let carnet =document.getElementById("carnet");
    let examen =document.getElementById("examen");
    let tarea = document.getElementById("tareas");
    let asistencia = document.getElementById("asistencia");
    let investigacion = document.getElementById("investigacion");

    let notaFinal = (examen.value * 0.2) + (tarea.value * 0.4) + (asistencia.value * 0.1) + (investigacion.value * 0.3);

    let resultado = "nombre: " + nombre.value + "<br>";
    resultado += "carnet:" + carnet.value + "<br>";
    resultado += "notaFinal:" + notaFinal.toFixed(1);

    

    document.getElementById("resultado").innerHTML = resultado;
  
}
  
