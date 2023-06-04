function season() {
    let month = prompt('Digite o mês por extenso (ex: Setembro')
    let exit = document.getElementById('exit')
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
            season = 'INDEFINIDA'
            break

    }
    exit.innerHTML = `<P>No mês de <mark>${month}</mark>, estamos na estação <strong><mark>${season}</mark></strong>.</P>`
}