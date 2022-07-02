//3 ESCOPOS: global, função e bloco

//global
var serie = 'SPN'

if (true) {
    //bloco
    var serie2 = 'Naruto'
}

console.log(serie2)

//---------------------------------

function x() {
    //função não sofre elevação para o escopo global
    var serie3 = 'GoT'
    console.log(serie)
    console.log(serie2)
    console.log(serie3)
}

x()
