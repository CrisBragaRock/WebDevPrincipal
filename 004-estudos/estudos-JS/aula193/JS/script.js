function verificarCaracter() {
    //selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    
    //limpar o campo de digitação
    document.getElementById('entrada').value = ''

    //limpar espaços em branco
    caracter.trim()

    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('apenasNumeros').value += caracter
            break;
            default:
                document.getElementById('apenasLetras').value += caracter
    }
}

//limpar espaçoes em branco

