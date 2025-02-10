let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("O nome não pode estar vazio!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpar o campo de entrada
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois participantes para realizar o sorteio!");
        return;
    }

    // Embaralha a lista de amigos
    const sorteio = [...amigos].sort(() => Math.random() - 0.5);

    // Seleciona um par aleatório
    const sorteadoIndex = Math.floor(Math.random() * sorteio.length);
    const amigo = sorteio[sorteadoIndex];
    const amigoSecreto = sorteio[(sorteadoIndex + 1) % sorteio.length];

    // Exibe o par sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigo} tirou ${amigoSecreto}</li>`;
}

function limparLista() {
    amigos = [];
    atualizarLista();
    document.getElementById('resultado').innerHTML = ""; // Limpar os resultados
}
