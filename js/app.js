let amigos = []

const atualizarSorteio = () => {
    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = "";
}

const atualizarLista = () => {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        // criando um elemento de paragrafo para cada amigo
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];

        // adicionando evento de clique para excluir amigo
        paragrafo.addEventListener("click",() => {
            excluirAmigo(i);
        });

        // adicionando paragrafo a lista
        lista.appendChild(paragrafo);
    }
}

const excluirAmigo = (index) => {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();

}

const embaralhar = (lista) => {
    let indiceAtual = lista.length;

    while (indiceAtual != 0) {
        let indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [lista[indiceAtual],lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indiceAtual]];
    }
}
const sortear = () => {
    document.getElementById("lista-sorteio").innerHTML = "";
    if(amigos.length < 4) {
        alert('Adicione no mínimo 4 amigos para sortear!');
        return;
    }
    embaralhar(amigos);
    
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[0] + "<br>" 
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[i + 1] + "<br>"
        }
    }
}

const reiniciar = () => {
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    amigos = [];
}

const adicionar = () => {
    let nomeAmigo = document.getElementById("nome-amigo");

    if (nomeAmigo.value == "") {
        alert("Informe um nome válido");
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert("Nome de amigo já existente. Adicione um sobrenome!");
        return;
    }

    let listaAmigos = document.getElementById("lista-amigos");
    
    

    amigos.push(nomeAmigo.value);

    if (listaAmigos.textContent.length == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = `${listaAmigos.textContent}, ${nomeAmigo.value}`;
    }
    
    nomeAmigo.value = "";
    
    atualizarLista();
    atualizarSorteio();

}

// nome-amigo
// lista-amigos
// lista-sorteio