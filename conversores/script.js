function dolarParaReal() {
    var valor = document.getElementById('dolarToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 5.71;
    var divModal = document.getElementsByClassName('modal-content');
    var mostrarTitulo = `<h2 class="modal-title">Sua conversão</h2>`
    var mostrarValor = `<p class="modal-valor">O valor convertido é: ${resultado}</p>`

    divModal.innerHTML = mostrarTitulo + mostrarValor;
    myModal.style.visibility = "visible";
    fecharModal();
}

function libraParaReal() {
    var valor = document.getElementById('libraToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 7.89;
    console.log(resultado)

    myModal.style.visibility = "visible";
    fecharModal();
}

function celsiusParaFahr() {
    var valor = document.getElementById('celsiusToFahr').value;
    var valorNumero = parseFloat(valor);

    var resultado = (valorNumero * 1.8) + 32;
    console.log(resultado)

    myModal.style.visibility = "visible";
    fecharModal();
}

var span = document.getElementsByClassName("close")[0]

span.onclick = function fecharModal() {
    myModal.style.visibility = "hidden";
}
