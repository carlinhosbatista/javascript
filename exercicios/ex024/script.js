function count() {
    let exit = document.querySelector('p#exit')
    let c = 10
    exit.innerHTML += '<h2>Contagem regressiva de 10 a 1</h2>'
    do {
        exit.innerHTML += ` ${c} \u{1f449}`
        c -= 1
    } while (c >= 1)
}