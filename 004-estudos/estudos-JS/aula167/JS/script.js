var idade = prompt('Digite uma idade')

if (idade >= 0 && idade < 15) {
    document.write('Criança')
} else if (idade >= 15 && idade < 30) {
    document.write('Jovem')
} else if (idade >= 30 && idade < 60) {
    document.write('Adulto')
} else if (idade >= 60 && idade < 122) {
    document.write('Idoso')
} else {
    document.write('Nenhum humano chegou a essa idade. Verifique o valor e tente novamente ao atualizar a página.')
}