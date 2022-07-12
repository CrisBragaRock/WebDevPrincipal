//var lista_frutas = Array()


//forma mais enxuta
var lista_frutas = []

lista_frutas[1] = 'Banana'
lista_frutas[2] = 'Maçã'
lista_frutas[4] = 'Morango'
lista_frutas[4] = 'Uva'
lista_frutas['x'] = 'Foca'
lista_frutas[6] = 100

console.log(lista_frutas)
console.log(lista_frutas['x'])
console.log(lista_frutas[6])

//outra formas de escritas de array que não nos permitem manipular o índice

var lista_carros = Array('Gol', 'Supra', 'Honda Civic', 'Etios')
console.log(lista_carros[3])

//mais uma forma

var lista_carros1 = ['Gol', 'Supra', 'Honda Civic', 'Etios']
console.log(lista_carros1[2])