// Contexto: Generador interactivo de tablas de multiplicar.//

console.log("Tablas de multiplicar")

// Se crea la variable que se va a ejecutae en bucle siempre y cuando sea verdadera//


let multiplicar = true;


// este bloque lo que propone es que mientras las variable multiplicar sea verdadera se ejecuta el bucle//


while (multiplicar) {

    let numero = prompt("Ingresa el numero que quieras multiplicar");

    numero = parseInt(numero);


    let resultado = ` Tabla de multiplicar del ${numero}:\n`;

// Para la calculadora el contador empieza en 1 y se detiene siempre y cuando la variable i sea menor o igual a 10//
// el resultado es el numero ingresado por el usuario multiplicado por la variable i que cada vez va subiendo hasta llegar al maximo que seria 10//

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`
    }

    alert(resultado);

    // Aqui se rompe el bucle cuando la variable multiplicar recibe respuesta falsa por parte del usuario//
    
    let respuesta = prompt("Quieres multiplicar otro numero?")

    
    if (respuesta == "no") {
        multiplicar = false;
        alert("Gracias por utilizar nuestra calculadora");
    }

}