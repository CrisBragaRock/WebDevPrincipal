function acionaCampo() {
    document.getElementById('campo').style.background = "gold"
    }

function validaCampo() {
    var valorCampo = document.getElementById('campo').value
    if(valorCampo.length < 3) {
    document.getElementById('campo').style.background = "salmon"
    } else {
    document.getElementById('campo').style.background = "lightgreen"
    }
}