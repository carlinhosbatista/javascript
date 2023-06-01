function season() {
    let month = prompt('Digite o mês por extenso (ex: Setembro')
    let exit = document.getElementById('exit')
    let season = ''
    switch (month) {
        case 'Janeiro': case 'Fevereiro': case 'Março':
            season = 'INVERNO'
            break
        case 'Abril': case 'Maio': case 'Junho':
            season = 'PRIMAVERA'
            break
        case 'Julho': case 'Agosto': case 'Setembro':
            season = 'VERÃO'
            break
        case 'Outubro': case 'Novembro': case 'Dezembro':
            season = 'OUTONO'
            break
        default:
            season = 'INDEFINIDA'
            break

    }
    exit.innerHTML = `<P>No mês de <mark>${month}</mark>, estamos na estação <strong><mark>${season}</mark></strong>.</P>`
}