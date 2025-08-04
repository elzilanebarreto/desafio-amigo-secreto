//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Lista de amigos

function adicionarAmigo(){
    let nome = document.querySelector("#amigo").value;

    if(nome === ""){
        alert("Por favor, insira um nome.");
    } else{
        amigos.push(nome);

        // console.log(amigo); // Verifica se o nome foi adicionado corretamente
        document.querySelector("#amigo").value = ""; //Limpa o campo de entrada do input

        atualizarListaAmigos(); 
    }
}

function atualizarListaAmigos() {
    let listaDeAmigos = document.querySelector("#listaAmigos"); // Lista do HTML
    listaDeAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos.

    for(let i = 0; i < amigos.length; i++){
        let itemDaLista = document.createElement("li"); // Cria um novo item da lista de amigos
        itemDaLista.textContent = amigos[i];
        listaDeAmigos.appendChild(itemDaLista); // Adiciona o item à lista de amigos
    }
}

function sortearAmigo() {
    // Condição para verificar se a lista de amigos está vazia
    if (amigos.length === 0){
        alert('A lista de amigos está vazia!');
    } else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSorteado = amigos[indiceAleatorio];
        //console.log(amigoSorteado); // Verificar quem foi sorteado

        let resultado = document.getElementById("resultado"); //Lista do HTML
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }
}