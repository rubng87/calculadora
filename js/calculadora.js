function calcular() {
  // Limpiar las advertencias
  let error1 = document.getElementById("error1");
  error1.innerText = "";
  let error2 = document.getElementById("error2");
  error2.innerText = "";
  let resultado = document.getElementById("resultado")
  // resultado = 0

  // Obtener los números
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  // console.log(num1);
  // console.log(isNaN(num1));

  // Errores en los números
  num1 = num1.trim();
  let errores = false;
  if (isNaN(num1) || num1 == "") {
    error1.innerText = "entrada incorrecta";
    errores = true;
    // return;
  }
  if (isNaN(num2)) {
    error2.innerText = "entrada incorrecta";
    errores = true;
    // return;
  }
  if (errores == true) {
    return;
  }
  console.log("num1 al principio es", typeof num1);
  // Conversión a entero
  num1 = parseFloat(num1);
  console.log("después del parseFloat(num1) es", typeof num1);
  num2 = parseFloat(num2);

  // Recuperar lo que hay en los input radio
  let opciones = document.getElementsByName("operador");

  console.log(opciones);

  let operacion = ""
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked == true) {
      operacion = opciones[i].id;
      break;
    }
  }

  console.log("la operacion es", operacion)

  if (operacion == "sumar") {
    resultado.innerText = num1 + num2
  } else if (operacion == "restar") {
    resultado.innerText = num1 - num2
  } else if (operacion == "multiplicar") {
    resultado.innerText = num1 * num2
  } else if (operacion == "dividir") {
    if (num2 == 0) {
      resultado.innerText = "No se puede dividir por cero"
      return
    }
    resultado.innerText = num1 / num2
  }
}

function limpiar() {
  console.log("reset")
  document.getElementById("resultado").innerText = 0
}
