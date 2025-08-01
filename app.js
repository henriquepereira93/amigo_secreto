//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    amigos.push(nomeAmigo);
    console.log(amigos);
    inserirAmigosNaLista();
    limparCampoAmigo();
    validarEntrada();
}

function validarEntrada(){
    if(amigos == ''){
        alert('Insira um nome por gentileza');
    }
}

function sortearAmigo(){
    let nomeSorteado = document.querySelector('button-draw');
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(`${amigoSorteado}`);
}

function inserirAmigosNaLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigos => {
        let itensLista = document.createElement('li');
        itensLista.textContent = amigos;
        listaAmigos.appendChild(itensLista);
    });

}


function limparCampoAmigo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

