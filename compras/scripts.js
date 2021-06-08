function gerar() {
    let frutas = ["Banana", "Morango", "Uva"]
    let lista = document.getElementById('lista')

    for(var i = 0; i < frutas.length; i++) {
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(frutas[i]))
        lista.appendChild(item)
    }
}

gerar()