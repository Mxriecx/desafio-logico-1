// Cajero automatico; Contexto: Simula un cajero automático completo.//

console.log("Cajero Automatico")

// para este bloque de codigo se declaran las variables para el bucle inicial, el cual le permite al usuario ingresar al sistema siempre y cuando acierte el pin predeterminado en la constaten PIN. de lo contrario tiene solo 3 intentos para poner el pin correcto. El bucle se rompe cuando el usuario acierta el PIN.
const PIN = "2307";
let saldo = 100000
let intentos = 0;
const MAXIMODEINTENTOS = 3;

while (intentos < MAXIMODEINTENTOS) {
    const pinIngresado = prompt("ingrese su pin");

    if (pinIngresado === PIN) {
        alert("Pin correcto. Bienvenido a su cuenta");
        break;

    } else {
        intentos++;

        alert("Pin Incorrecto.Intente nuevamente");

    }

    if (intentos === MAXIMODEINTENTOS) {
        alert("Supero el numero maximo de intentos permitidos. Acceso bloqueado,comuniquese con su banco");


    }


}

// En este bloque de codigo con el uso del switch, el usuariop puede moverse dentro de las opciones del sistema, el bucle termina cuando la variable cajero pasa a ser falsa, en el aso 3 donde la opcion es salir//

const opciones = prompt("Seleccione una opcion: \n1. ver saldo \n2.Retirar dinero \n3.Salir");

let cajero = true;

while (cajero) {

    const opciones = prompt("Seleccione una opcion: \n1. ver saldo \n2.Retirar dinero \n3.Salir");

    switch (opciones) {

        case "1":
            alert(`Su saldo actual es : ${saldo}`);
            break;

        case "2":
            const monto = prompt("Ingrese el monto a retirar");
            if (monto <= 0) {
                alert("Monto invalido, Intente de nuevo.");
            } else if (monto > saldo) {
                alert("Fondos insuficientes, Intente de nuevo");
            } else {
                saldo -= monto;
                alert(`retiro exitoso. Nuevo saldo : ${saldo}`);
            }
            break;

        case "3":
            alert("Gracias por usar el sistema, vuelva pronto")
            cajero = false;
            break;
        default:
            alert("❌ Opción no válida. Intente de nuevo.");
    }
}


