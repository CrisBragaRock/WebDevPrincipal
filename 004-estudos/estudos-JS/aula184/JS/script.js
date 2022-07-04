// var data = new Date()

// //adicionar ou remover dias da data
// document.write(data.toString() + ' - Data correta.<hr>')

// data.setDate(data.getDate() + 1)
// document.write(data.toString() + ' - Mais um dia.<hr>')

// //adicionar ou remover meses
// data.setMonth(data.getMonth() - 1)
// document.write(data.toString() + ' - Menos um mês.<hr>')

// //adicionar ou remover anos
// data.setFullYear(data.getFullYear() + 5)
// document.write(data.toString() + ' - Mais cinco anos.<hr>')

document.write('Objetivo: escolher duas datas para calcuar quantos dias há entre elas.<hr>')

//primeira data
var data1 = new Date(1995, 3, 7)
//segunda data
var data2 = new Date()

//variaveis de apoio para o calculo
var ms_entre_datas = data2.getTime() - data1.getTime()
var ms_por_dia = 1*24*60*60*1000

document.write('Primeira data escolhida: ' + data1.toString() + '<hr>')
document.write('Segunda data escolhida: ' + data2.toString() + '<hr><br><br>')

//converter datas para algo que possamos calcular.
document.write(data1.getTime() + '<br>')
document.write(data2.getTime() + '<hr><br><br>')

//encontrar a diferença de milissegundos entre data1 e data2
document.write('A diferença em milissegundos entre as datas é de: ' + (data2.getTime() - data1.getTime()) + '<br>')

//1 dia tem 24 horas
//cada hora tem 60 minutos
//cada minuto tem 60 segundos
//cada segundo tem 1000 milissegundos.
//quantos milissegundo temos em um dia?
document.write('1 dia tem: ' + (1*24*60*60*1000) + ' milissegundos.<br>')
document.write('Logo temos: ' + Math.round(ms_entre_datas / ms_por_dia) + ' dias de diferença entre as datas')
