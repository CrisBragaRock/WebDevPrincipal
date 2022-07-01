var nome = prompt('Digite o seu nome:')
var altura = prompt('Digite a sua altura em centímetros')
var peso = prompt('Digite o seu peso:')

peso = parseFloat(peso)
altura = parseFloat(altura)

altura = altura / 100

var massa = peso / (altura * altura)

massa = parseFloat(massa)

console.log(massa)

var classificacao = null

if (massa < 16) {
    classificacao = 'Baixo peso, muito grave!'
} else if (massa >= 16 && massa < 17) {
    classificacao = 'Baixo peso, grave.'
} else if (massa >= 17 && massa < 18.5) {
    classificacao = 'Baixo peso.'
} else if (massa >= 18.5 && massa < 25) {
    classificacao = 'Peso normal.'
} else if (massa >= 25 && massa < 30) {
    classificacao = 'Sobrepeso.'
} else if (massa >= 30 && massa < 35) {
    classificacao = 'Obesidade grau I'
} else if (massa >= 35 && massa < 40) {
    classificacao = 'Obesidade grau II'
} else {
    classificacao = 'Obesidade grau III'
}

document.write(nome + ', você possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ' + classificacao)