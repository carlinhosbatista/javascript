function season() {
    let month = prompt('Digite o mês em extenso (ex: Setembro)')

    let exit = document.getElementById('exit')
    let season = ''
    switch (month.toUpperCase()) {
        case 'Janeiro': case 'Fevereiro': case 'Março':
            season = 'INVERNO'
            break;
        case 'Abril': case 'MAIO': case 'JUNHO':
            season = 'PRIMAVERA'
            break
    
        default:
            break;
    }
    exit.innerHTML = `<p>No mês de ${month}, estamos na estação ${season}.</p>`
}