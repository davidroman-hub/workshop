let edad = parseInt(20);
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let dia = parseInt("20");
switch (dia) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Lunes");
    break;

  case 3:
    console.log("Martes");
    break;

  case 4:
    console.log("Miércoles");
    break;

  case 5:
    console.log("Jueves");
    break;

  case 6:
    console.log("Viernes");
    break;

  case 7:
    console.log("Sábado");
    break;

  default:
    console.log("Número inválido");
    break;
}
