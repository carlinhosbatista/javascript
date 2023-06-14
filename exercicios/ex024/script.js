function count() {
    let exit = document.getElementById('exit')

    exit.innerHTML += '<h2>Contagem regressiva de 10 a 1</h2>'
    for(let c = 10; c >= 1; c--) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}