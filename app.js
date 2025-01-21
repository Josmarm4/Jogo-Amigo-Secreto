let amigos = []; // Array que armazena os nomes dos amigos

function adicionarAmigos() {
    let nome = document.querySelector("input").value.trim();
    // Valida se o nome não está vazio
    if(nome == ""){
        alert("Por favor, insira um nome.")
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista exibida no HTML com o novo nome
    atualizarLista();

    // Limpa o campo de entrada
    limparCampo();
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");

    // Limpa lista anterior
    lista.innerHTML = ""; 

    // Adiciona cada amigo ao HTML como um item <li>
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += (`<li> ${amigos[i]} </li>`);
    }
}

function sortearAmigo(){
    // Verifica se a lista está vázia
    if(amigos.length == 0){
        alert("A lista de amigos está vázia. Por favor, adicione nomes antes de sortear.");
        return;
    }

    //Gerar um indice aleatório com base no tamamho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    //Exibe o nome sorteado 
    let nomeSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Amigo sorteado: <strong>${nomeSorteado}</strong></p>`;

}

function limparCampo() {
    let campo = document.querySelector("input");
    
    // Limpa o valor do campo
    campo.value = ""; 
}
