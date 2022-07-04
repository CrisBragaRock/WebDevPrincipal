function exibirArtigo(id, callbackSucesso, callbackErro) {
    //lógica: recuperar o artigo via requisição http
    if ( true ) {
        callbackSucesseo('Funções de Callback em JS', 'Funções de calback são muito utilizadas orem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, aliquam ducimus atque deleniti reprehenderit debitis ipsa veritatis quas vero nemo, incidunt impedit architecto eius autem alias sapiente facilis repudiandae corrupti.')
    } else {
        callbackErro('Não conseguimos recuperar os dados.')
    }
}

var callbackSucesseo = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')


}

var callbackErro = function(erro) {
    alert('ERRO: ' + erro)

}

exibirArtigo(1, callbackSucesseo, callbackErro)