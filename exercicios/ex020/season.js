function season() {
    let season = prompt('Digite o mês em extenso (ex: Setembro')
    let exit = document.querySelector('section#exit')
    switch (season.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            season = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            season = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'OUTUBRO'
        default:
            break;
    }
}