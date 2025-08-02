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
    nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let mensagemSorteado= document.getElementById('resultado');
    mensagemSorteado.textContent = `O nome sorteado foi: ${nomeSorteado}`;
    validarEntrada();
}

function inserirAmigosNaLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    //Aplica-se a todos os elementos da array
    amigos.forEach(amigos => {
        let itensLista = document.createElement('li');
        itensLista.textContent = amigos; //Pega somente o texto na array
        listaAmigos.appendChild(itensLista);
    });

}


function limparCampoAmigo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

