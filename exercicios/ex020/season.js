function season() {
    let month = prompt('Digite o mês em extenso (ex: Setembro')
    let exit = document.querySelector('section#exit')
    let season = ''
    switch (season.toUpperCase()){
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            season = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            season = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            season = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            season = 'OUTONO'
            break
        default:
            season = 'INDEFINIDA'
            break;
    }
    exit.innerHTML = `<p>No mês de ${month}, estamos na estação ${season}</p>`
}