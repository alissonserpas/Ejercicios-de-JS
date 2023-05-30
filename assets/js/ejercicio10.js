

function calcularPromedios() {
    var turnos = {
      mañana: [],
      tarde: [],
      noche: []
    };
  
    // Obtener edades de estudiantes del turno mañana
    for (var i = 1; i <= 5; i++) {
      var edad = parseInt(document.getElementById("mañana" + i).value);
      turnos.mañana.push(edad);
    }
  
    // Obtener edades de estudiantes del turno tarde
    for (var i = 1; i <= 6; i++) {
      var edad = parseInt(document.getElementById("tarde" + i).value);
      turnos.tarde.push(edad);
    }
  
    // Obtener edades de estudiantes del turno noche
    for (var i = 1; i <= 11; i++) {
      var edad = parseInt(document.getElementById("noche" + i).value);
      turnos.noche.push(edad);
    }
  
    // Calcular promedio de cada turno
    var promedios = {
      mañana: calcularPromedio(turnos.mañana),
      tarde: calcularPromedio(turnos.tarde),
      noche: calcularPromedio(turnos.noche)
    };
  
   
    var turnoMayor;
    switch (true) {
      case promedios.mañana > promedios.tarde && promedios.mañana > promedios.noche:
        turnoMayor = "Turno Mañana";
        break;
      case promedios.tarde > promedios.mañana && promedios.tarde > promedios.noche:
        turnoMayor = "Turno Tarde";
        break;
      case promedios.noche > promedios.mañana && promedios.noche > promedios.tarde:
        turnoMayor = "Turno Noche";
        break;
      default:
        turnoMayor = "Ningún turno tiene un promedio mayor";
        break;
    }
  
   
    var resultado = "Promedio de edades por turno:<br>" +
      "Turno Mañana: " + promedios.mañana + "<br>" +
      "Turno Tarde: " + promedios.tarde + "<br>" +
      "Turno Noche: " + promedios.noche + "<br><br>" +
      "El turno con el promedio de edades mayor es: " + turnoMayor;
  
   
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function calcularPromedio(edades) {
    var suma = 0;
    for (var i = 0; i < edades.length; i++) {
      suma += edades[i];
    }
    return suma / edades.length;
  }
  