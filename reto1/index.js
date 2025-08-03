// Reto 1: Control de Acceso. Contexto: Una empresa necesita un sistema de validación de ingreso.//

console.log("Reto control de acceso")
let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿Cual es tu edad?");
let invitacion = prompt("¿Cuentas con invitacion?");


if(edad>=18 && invitacion == "si"){
    alert("Puedes ingresar,¡Divierte!")
    imagen1

}else{
    alert("NO Puedes ingresar, no te puedes divertir")
   
}
