let numero_secreto = 0;let contador = 0; let numerosSecretos=[];


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    if(numeroDeUsuario === numero_secreto){
        asignarTextoElemento('p', `¡Adivinaste! En ${contador} ${contador === 1 ? ' intento' : ' intentos'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        asignarTextoElemento('p', '¡Intenta de nuevo!');
        limpiarCaja();
    }
    contador++;
    return;
}
function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();
     document.getElementById('reiniciar').setAttribute('disabled', true);

}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numSecreto = Math.floor(Math.random() * 10) + 1;
    if (numerosSecretos.includes(numSecreto)){
        return generarNumeroSecreto();
    }
    else {
        numerosSecretos.push(numSecreto);
        return numSecreto;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Jueguito :)');
    asignarTextoElemento('p', 'Adivina el número secreto entre 1 y 10');
    numero_secreto = generarNumeroSecreto();
    contador = 1;
    console.log(numero_secreto);
}
condicionesIniciales();