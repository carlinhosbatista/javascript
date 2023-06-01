function season() {
    let month = prompt('Digite o mês em extenso (ex: Setembro')
    let op  
    let exit = document.getElementById('exit')
    let season

    switch (op) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            season = 'INVERNO'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            break
        default:
            'INDEFINIDO'
            break;
    }

}