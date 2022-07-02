

function soma(a, b,) {
    a = a === undefined ? 0 : a
    b = b === undefined ? 0 : b
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) // desconsidera os parâmetros adicionais
console.log(soma(7))// valor nao definido retorna NaN
console.log(soma())// sem nenhum parametro tambem retorna NaN