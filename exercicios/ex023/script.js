function count() {
    let exit = document.getElementById('exit')
    let c = 2
    exit.innerHTML += '<h2>Números pares de 1 até 10</h2>'
    do {
        exit.innerHTML += ` ${c} \u{1f449}`
        c += 2
    } while (c <= 10)
    exit.innerHTML += ` \u{1f3c1}`
}