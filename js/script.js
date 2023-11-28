const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

let numOrdenador;
let numJugador;
let cuentaAtras = 5;
let cAtrasSetinterval;


// Con el evento keydown quiero controlar cuando el usuario pulse Enter para hacer la promesa
userInput.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        const juegoPromesa = new Promise((resolve) => {
            cAtrasSetinterval = setInterval(() => {
                // pinto la cuenta atrás en el html
                countdown.innerHTML = `Cuenta atrás: ${cuentaAtras} segundos`;
                cuentaAtras--;
                // pregunto si cuentaAtras ha llegado a su fin paara detener el tiempo
                // con el metodo clearIterval
                if (cuentaAtras < 0) {
                    clearInterval(cAtrasSetinterval)
                    resolve();
                }
            }, 1000);
        });
        // cojo el valor del jugador
        numJugador = parseInt(userInput.value, 10);

        function mostrarValor() {
            if (numJugador === numOrdenador) {
                result.innerHTML = `<div id=resultGanador> ¡Has salvado el mundo!</div>
                <div id=numeros> El número del Jugador es: ${numJugador} y el del Ordenador es:
                 ${numOrdenador}</div>`;
            } else {
                result.innerHTML = `<div id=resultGanador> ¡La bomba ha estallado!</div>
                <div id=numeros> El número del Jugador es: ${numJugador} y el del Ordenador es:
                 ${numOrdenador}</div>`;
            }
        }
        // en la funcion de numero aleatorio llamamos a la promesa con el .then
        // y creamos el número aleatorio, despúes llamamos a la función mostrarValor para que realice el juego 
        juegoPromesa.then(() => {
            numOrdenador = Math.floor(Math.random() * 3) + 1;
            mostrarValor();
        })
    }
});

//botón restart

restart.addEventListener('click', function() {
    userInput.value = '0';
    countdown.innerHTML = '';
    result.innerHTML = '';
    cuentaAtras = 5;
})










/*
// la base del conteo es 7 
//(ó cualquier otro número)
var counter = 7;

setInterval(function() {

 if (counter == 0) {

  // Aqui se ejecuta o se muestra contenidos
  document.querySelector("#ver").innerHTML = ("Hola  Mundo!");  

 } else {
  // inicia la cuenta regresiva
  counter = counter -1;
  // se muestra el contador en un id o class
  document.querySelector("#ver").innerHTML = counter;  

 }

}, 1000); // tiempo real del contador
*/