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
    if(nomeAmigo === ''){
        alert('Insira um nome por gentileza');
        return;
    }
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

