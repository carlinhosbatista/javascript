function season() {
    let month = prompt('Digite o mês em extenso (ex: Setembro')
    let exit = document.querySelector('section#exit')
    let season

    switch (month.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            season = 'INVERNO'
            break
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
            season = 'INDEFINIDO'
            break;
    }
    exit.innerHTML = `<p>No mês ${month}, estamos na estação ${season}</p>`
}