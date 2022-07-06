var nome = document.getElementById('nome')
var pontos = 0


function start() {
    document.getElementById('game').style.display = ''
}

//acertos
function acerto01() {
    document.getElementById('area-questoes1').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto02() {
    document.getElementById('area-questoes2').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto03() {
    document.getElementById('area-questoes3').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto04() {
    document.getElementById('area-questoes4').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto05() {
    document.getElementById('area-questoes5').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto06() {
    document.getElementById('area-questoes6').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto07() {
    document.getElementById('area-questoes7').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto08() {
    document.getElementById('area-questoes8').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto09() {
    document.getElementById('area-questoes9').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

function acerto10() {
    document.getElementById('area-questoes10').style.backgroundColor = 'lightgreen' 
    pontos += 1
}

//erros
function respErrada() {
    document.getElementById('area-questoes1').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada2() {
    document.getElementById('area-questoes2').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada3() {
    document.getElementById('area-questoes3').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada4() {
    document.getElementById('area-questoes4').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada5() {
    document.getElementById('area-questoes5').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada6() {
    document.getElementById('area-questoes6').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada7() {
    document.getElementById('area-questoes7').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada8() {
    document.getElementById('area-questoes8').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada9() {
    document.getElementById('area-questoes9').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

function respErrada10() {
    document.getElementById('area-questoes10').style.backgroundColor = 'lightsalmon' 
    pontos -= 1
}

//calculo dos pontos e exibição
function analise() {
    document.getElementById('score').innerHTML = nome.value + ' sua pontuação foi: ' + pontos
}