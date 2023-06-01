function season() {
    let month = Number(prompt('Digite o mês por extenso (ex: Setembro'))

    let exit = document.getElementById('exit')
    switch (month) {
        case 1:
            if (month == 'Janeiro' || month == 'Fevereiro' || month == 'Março')
                exit.innerHTML = `<P>No mês de ${month}, estamos na estação INVERNO.</P>`
            break;
    
        default:
            break;
    }
}