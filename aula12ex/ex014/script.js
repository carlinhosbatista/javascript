function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let date = new Date()
    let hour = 19//date.getHours()
    msg.innerHTML = `Agora são ${hour} horas. `
    if (hour >= 0 && hour < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        msg.innerHTML += 'Boa tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
