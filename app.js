
let amigos = [];

const nombreInput = document.getElementById('amigo');
const btnAgregar = document.getElementById('btn-agregar');
const btnSortear = document.getElementById('btn-sortear');
const btnReiniciar = document.getElementById('btn-reiniciar');
const listaHTML = document.getElementById('listaAmigos');
const resultadoHTML = document.getElementById('resultado');

btnAgregar.addEventListener('click', agregarAmigo);


nombreInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

btnSortear.addEventListener('click', sortearAmigo);


btnReiniciar.addEventListener('click', reiniciarJuego);

function agregarAmigo() {
    let nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Por favor, inserte un nombre diferente.');
        nombreInput.value = '';
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreInput.value = '';
    nombreInput.focus();
}


function actualizarLista() {
    listaHTML.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaHTML.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultadoHTML.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉`;
}


function reiniciarJuego() {
    amigos = []; 
    listaHTML.innerHTML = ''; 
    resultadoHTML.innerHTML = ''; 
    console.log('Juego reiniciado.');
}