/*
*Pseudocodigo
Si (dia>=21 Y mes = 1) O (dia<=19 Y mes = 2) Entonces
        Escribir "Acuario";
    FinSi
	Si (dia>=20 Y mes = 2) O (dia<=20 Y mes = 3) Entonces
        Escribir "Piscis";
    FinSi
	Si (dia>=21 Y mes = 3) O (dia<=20 Y mes = 4) Entonces
        Escribir "Aries";
    FinSi
	Si (dia>=21 Y mes = 4) O (dia<=20 Y mes = 5) Entonces
        Escribir "Tauro";
    FinSi
	Si (dia>=21 Y mes = 5) O (dia<=20 Y mes = 6) Entonces
        Escribir "Géminis";
    FinSi
	Si (dia>=21 Y mes = 6) O (dia<=20 Y mes = 7) Entonces
        Escribir "Cáncer";
    FinSi
	Si (dia>=21 Y mes = 7) O (dia<=21 Y mes = 8) Entonces
        Escribir "Leo";
    FinSi
	Si (dia>=22 Y mes = 8) O (dia<=20 Y mes = 9) Entonces
        Escribir "Virgo";
    FinSi
    Si (dia>=21 Y mes = 9) O (dia<=20 Y mes = 10) Entonces
        Escribir "Libra";
    FinSi
    Si (dia>=21 Y mes = 10) O (dia<=21 Y mes = 11) Entonces
        Escribir "Escorpión";
    FinSi
    Si (dia>=22 Y mes = 11) O (dia<=21 Y mes = 12) Entonces
        Escribir "Sagitario";
    FinSi
    Si (dia>=22 Y mes = 12) O (dia<=20 Y mes = 1) Entonces
        Escribir "Capricornio";
    FinSi

*Primera Forma tradicional
function signoZodical() {
    var dia =parseInt(prompt(" Introduce tu dia de nacimiento"));
    var mes =parseInt(prompt("Introduce tu mes de nacimiento en numero"));
    if ((dia>0,mes>0)&&(dia<=31,mes<=12)) {
        if (((dia>= 21) && (mes == 1)) || ((dia <= 19) && (mes == 2))) {
            alert("Eres Acuario");
          } else if (((dia >= 20) && (mes == 2)) || ((dia <= 20) && (mes == 3))) {
            alert("Eres Piscis");
          } else if (((dia >= 21) && (mes == 3)) || ((dia <= 20) && (mes == 4))) {
              alert("Eres Aries");
          } else if (((dia>=21) && (mes == 4)) || ((dia<=20) && (mes == 5))) {
              alert("Eres Tauro");
          } else if (((dia>=21) && (mes == 5)) || ((dia<=20) && (mes == 6))) {
              alert("Eres Géminis");
          } else if (((dia>=21) && (mes == 6)) || ((dia<=20) && (mes == 7))) {
              alert("Eres Cáncer");
          } else if (((dia>=21) && (mes == 7)) || ((dia<=20) && (mes == 8))) {
              alert("Eres Leo");
          } else if (((dia>=22) && (mes == 8)) || ((dia<=20) && (mes == 9))) {
              alert("Eres Virgo");
          }  else if (((dia>=21) && (mes == 9)) || ((dia<=20) && (mes == 10))) {
              alert("Eres Libra");
          }  else if (((dia>=21) && (mes == 10)) || ((dia<=20) && (mes == 11))) {
              alert("Eres Escorpión");
          }  else if (((dia>=22) && (mes == 11)) || ((dia<=20) && (mes == 12))) {
              alert("Eres Sagitario");
          }  else if (((dia>=22) && (mes == 12)) || ((dia<=20) && (mes == 1))) {
              alert("Eres Capricornio");
          }   else {
            alert("Dato mal ingresado");
          }
    } else {
        alert("Dato mal ingresado");
    }
}
signoZodical();

*Forma mas sintetixada de los if
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Acuario");
  if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Piscis");
  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Aries");
  if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Tauro");
  if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Géminis");
  if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Cáncer");
  if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Leo");
  if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Virgo");
  if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Libra");
  if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) alert("Escorpión");
  if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) alert("Sagitario");
  if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) alert("Capricornio");
*/
function signoZodical() {
  let dia = parseInt(prompt(" Introduce tu dia de nacimiento")); //Pides el dato de dia de nacimiento al usuario
  let mes = parseInt(prompt("Introduce tu mes de nacimiento en numero")); //Pides el dato de mes de nacimiento del usuario
  if (dia > 0 && mes > 0 && dia <= 31 && mes <= 12) {//Aqui hacemos validacion de datos bien ingresados y evitar errores
    //Aqui empezamos a ver que signo es el correcto
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Acuario");
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Piscis");
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Aries");
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Tauro");
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Géminis");
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Cáncer");
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Leo");
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Virgo");
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Libra");
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
      alert("Escorpión");
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
      alert("Sagitario");
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
      alert("Capricornio");
  } else {
    alert("Dato mal ingresado"); //Esto es para mandar a decir que un dato fue mal ingresado
  }
}
signoZodical();
