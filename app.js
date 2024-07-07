//Mensaje de bienvenida
alert('¡Bienvenido al juego del número secreto!');
//Variables, es decir, acá se define el valor que va a tener cada una
let numeroMaximoPosible = 30;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 10;
//Bloque para que repita la acción hasta que se adivine el numero
while (numeroUsuario != numeroSecreto) {
    //Mensaje inicial para que el usuario ponga el número
    let numeroUsuario = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaximoPosible} porfa:`));
    console.log(typeof(numeroUsuario));
    //Comparadores
    if (numeroUsuario == numeroSecreto) {
        //si todo está bien
        alert(`Adivinaste, el número es: ${numeroUsuario}. Lo lograste en ${intentos} ${palabraVeces}`);
        // para simplificar código y reemplazar la variable palabraVeces, se puede usar ${intentos == 1 ? 'vez' : 'veces' }
    } else {
        //con esto, si el numero es incorrecto, nos dará pistas
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //si paila
        //alert('Lo siento, no adivinaste el número');
    }
    //Contador que se incrementa cuando no acierta
    intentos = intentos + 1;
    //También se puede usar: intentos += 1; ó intentos ++;
    palabraVeces = 'veces';
    //Para definir un número máximo de intentos
    if (intentos > maximosIntentos) {
        alert (`Has agotado el máximo de ${maximosIntentos} intentos`);
        break; 
    }
}