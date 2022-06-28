/*
    Objetivo do desafio:

    Criar uma página que contenha um script com 3 vriáves:
    A = 10
    B = 20
    C = null

    Fazer a impressão dos valores apartir do metodo write.

    Na sequência devemos inverter os valores das variveis A e B, só que, a inversão desses valores, não pode ser hardcode.
    Depois imprimir novamente pelo metodo write.
*/

var a = 10
var b = 20
var c = null //variável auxiliar utilizada na lógica.

document.write('A: ' + a + '<br>')
document.write('B: ' + b + '<br>')
document.write('C: ' + c + '<br>')

document.write('<hr>')

var c = a
var a = a + a
var b = b - c
var c = null

document.write('A: ' + a + '<br>')
document.write('B: ' + b + '<br>')
document.write('C: ' + c + '<br>')

