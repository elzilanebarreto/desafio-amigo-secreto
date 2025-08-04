//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigo = []; // Lista de amigos

function adicionarAmigo(){
    let nome = document.querySelector("#amigo").value;

    if(nome === ""){
        alert("Por favor, insira um nome.");
    } else{
        amigo.push(nome);

        // console.log(amigo); // Verifica se o nome foi adicionado corretamente
        document.querySelector("#amigo").value = ""; //Limpa o campo de entrada do input

        atualizarListaAmigos(); 
    }
}

function atualizarListaAmigos() {
    let listaDeAmigos = document.querySelector("#listaAmigos"); // Lista do HTML
    listaDeAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos.

    for(let i = 0; i < amigo.length; i++){
        let itemDaLista = document.createElement("li"); // Cria um novo item da lista de amigos
        itemDaLista.textContent = amigo[i];
        listaDeAmigos.appendChild(itemDaLista); // Adiciona o item à lista de amigos
    }
}

function sortearAmigo() {

}