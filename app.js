//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo = [];

function adicionarAmigo(){
    let nome = document.querySelector("#amigo").value;

    if(nome === ""){
        alert("Por favor, insira um nome.");
    } else{
        amigo.push(nome);

        console.log(amigo); //Verifica se o nome foi adicionado corretamente
        document.querySelector("#amigo").value = ""; //Limpa o campo de entrada após adicionar o nome
    }
}

function sortearAmigo() {

}