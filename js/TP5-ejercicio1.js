/*Números mágicos - Dificultad:  🟢
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

let botonComenzar = document.getElementById("start");
let formulario = document.querySelector("form");
let magicNumber = [];
let userGuess = [];
let displayResult = document.getElementById("displayResult");
console.log(formulario);

formulario.addEventListener("submit", obtenerDato);


function start() {
    let magicNumber = Math.floor(Math.random() * 24) + 1;
    console.log(magicNumber);
}


// function numeroAdivinado() {
    //     }
    
    function obtenerDato(e) {
        e.preventDefault();
        console.log("ejecutando el evento del formulario");
        let userGuess = parseInt(document.getElementById("userGuess").value);
        console.log(userGuess);
    
    }
    
    function send() {
    if (magicNumber === userGuess
    ) {
        alert(`🔮Adivinaste!🔮`);
        document.getElementById("result").innerHTML(`🔮¡Si lo eres!🔮 <br> Tu número era ${userGuess} y el número mágico era ${magicNumber}`)
    } else if (magicNumber < userGuess) {
        alert(`Tu número ${userGuess} era mayor que el número mágico ${magicNumber}`);
    } else if (magicNumber > userGuess){
        alert(`Tu número ${userGuess} era menor que el número mágico ${magicNumber}`);
    }
}