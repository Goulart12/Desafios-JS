function dolarParaReal() {
    var valor = document.getElementById('dolarToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 5.71;
    var divModal = document.getElementsByClassName('modal-content');
    var mostrarValor = `<p>O valor convertido é: ${resultado}</p>`;
    

    divModal.innerHTML = mostrarValor;
    myModal.style.visibility = "visible";
    
    
}

function libraParaReal() {
    var valor = document.getElementById('libraToReal').value;
    var valorNumero = parseFloat(valor);

    var resultado = valorNumero * 7.89;
    console.log(resultado)

    myModal.style.visibility = "visible";
}

function celsiusParaFahr() {
    var valor = document.getElementById('celsiusToFahr').value;
    var valorNumero = parseFloat(valor);

    var resultado = (valorNumero * 1.8) + 32;
    console.log(resultado)

    myModal.style.visibility = "visible";
}

var span = document.getElementsByClassName("close")[0]

span.onclick = function fecharModal() {
    myModal.style.visibility = "hidden";
}
