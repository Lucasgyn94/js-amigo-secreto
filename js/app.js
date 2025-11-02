let amigos = []
const embaralhar = (lista) => {
    let indiceAtual = lista.length;

    while (indiceAtual != 0) {
        let indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [lista[indiceAtual],lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indiceAtual]];
    }
}
const sortear = () => {
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
    let listaAmigos = document.getElementById("lista-amigos");
    
    
    amigos.push(nomeAmigo.value);

    if (listaAmigos.textContent.length == "") {
        listaAmigos.innerText += nomeAmigo.value;
    } else {
        listaAmigos.innerText += `, ${nomeAmigo.value}`;
    }
    nomeAmigo.value = "";
}

// nome-amigo
// lista-amigos
// lista-sorteio