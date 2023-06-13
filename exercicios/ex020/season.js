function season() {
    let month = prompt('Digite o mês em extenso (ex: Setembro)')

    let exit = document.getElementById('exit')
    let season = ''
    switch (month.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            season = 'INVERNO'
            break;
    
        default:
            break;
    }
    exit.innerHTML = `<p>No mês de ${month}, estamos na estação ${season}.</p>`
}