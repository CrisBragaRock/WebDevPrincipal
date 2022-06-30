var parametro = prompt('Escolha um numero de 1 até 3')

parametro = parseInt(parametro)

switch (parametro) {
    case 1:
        //se parametro === 1
        document.write('Parametro 1')
        break

    case 2:
        //se parametro === 2
        document.write('Parametro 2')
        break

    case 3:
        //se parametro === 3
        document.write('Parametro 3')
        break

    default:
        //se parametro nao encontrado pode ser omitido
        document.write('Parametro inválido. Selecione um numero de 1 até 3 após atualizar a página')
        break
}