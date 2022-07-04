alert('Olá vamos fazer calcular juntos?')

var operacao = prompt('Digite o tipo de operação que faremos: soma ou subtração.')
var num1 = prompt('Você optou por fazer um cálculo de ' + operacao + '. Digite o primeiro número:')
var num2 = prompt('Digite o segundo número:')

function calcular(num1, num2, operacao) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    var resultado = 0

    if (operacao == 'soma') {
        resultado = num1 + num2
    }

    if (operacao =='subtração') {
        resultado = num1 - num2
    }
    
    return resultado
}

document.write('O resultado é: ' + calcular(num1, num2, operacao))