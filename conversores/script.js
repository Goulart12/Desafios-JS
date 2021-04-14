function dolarParaReal() { //Função para calcular e mostrar o resultado
    var valor = document.getElementById('dolarToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 5.71;
    console.log(resultado)
    document.getElementsByClassName('modal-parag')[0].innerHTML = `<p class="modal-parag">O valor convertido é: R$ ${resultado}</p>`;
    
    abrirModal();
}

function libraParaReal() {
    var valor = document.getElementById('libraToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 7.89;
    console.log(resultado)
    document.getElementsByClassName('modal-parag')[0].innerHTML = `<p class="modal-parag">O valor convertido é: R$ ${resultado}</p>`;

    abrirModal();
}

function celsiusParaFahr() {
    var valor = document.getElementById('celsiusToFahr').value;
    var valorNumero = parseFloat(valor);

    var resultado = (valorNumero * 1.8) + 32;
    console.log(resultado)
    document.getElementsByClassName('modal-parag')[0].innerHTML = `<p class="modal-parag">O valor convertido é: ${resultado} °F</p>`;
    
    abrirModal();
}

function abrirModal() { //função para abrir o modal
    myModal.style.visibility = "visible";
}

var span = document.getElementsByClassName("close")[0]

span.onclick = function fecharModal() { //função para fechar o modal
    myModal.style.visibility = "hidden";
}
