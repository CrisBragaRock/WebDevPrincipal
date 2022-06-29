var nota = prompt('Insira a nota do aluno:')
var media = 7
var faltas = prompt('digite a quantia de faltas do aluno:')
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}