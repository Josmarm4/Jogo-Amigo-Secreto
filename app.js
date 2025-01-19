//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
// Certifique-se de que "amigos" seja sempre um array
let amigos = []; // Array que armazena os nomes dos amigos

function adicionarAmigos() {
    let nome = document.querySelector("input").value;
    // Valida se o nome não está vazio
    let nomes = nome == "" ? alert("Por favor, insira um nome.") : "";
    
    // Adiciona o nome ao array de amigos
    amigos.push(nome);

     // Atualiza a lista exibida no HTML com o novo nome
     exibirLista(nome);

    // Limpa o campo de entrada
    limparCampo();
}

function exibirLista(nome) {
    let lista = document.getElementById("listaAmigos"); // Seleciona o elemento <ul>

    // Cria um novo item <li> com o nome fornecido
    let item = document.createElement("li");
    item.textContent = nome; // Define o texto como o nome do amigo

    // Adiciona o novo item diretamente na lista
    lista.appendChild(item);
}

function limparCampo() {
    let campo = document.querySelector("input");
    campo.value = ""; // Redefine o valor do campo
}
