function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let date = new Date()
    let hour = date.getHours()
    msg.innerHTML = `Agora são ${hour} horas. `
    if (hour >= 0 && hour < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'fotomanha.png'
    } else if (hour >= 12 && hour < 18) {
        msg.innerHTML += 'Boa tarde!'
        img.src = 'fototarde.png'
    } else {
        msg.innerHTML += 'Boa noite!'
        img.src = 'fotonoite.png'
    }
}
