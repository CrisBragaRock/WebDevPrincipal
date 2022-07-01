//VOID
function calcularAreaTerreno ( largura, comprimento ) {
    //lógica
    var area = largura * comprimento

    document.write('A área do seu terreno é de ' + area + ' metros quadrados.')
}

calcularAreaTerreno(prompt('Digite a largura do seu terreno:'), prompt('Digite o comprimento do seu terreno: <br>'))

//RETURN
function calcularMultiplicacao (num1, num2) {
    var resultado = num1 * num2

    return resultado
}

document.write('A multiplicação dos numeros escolhidos resulta em ' + calcularMultiplicacao(prompt('digite um numero:'), prompt('digite outro numero:')) + '!')