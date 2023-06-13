function count() {
    let exit = document.querySelector('p#exit')
    exit.innerHTML += '<h2>Números pares de 1 até 10</h2>'

    for(c = 2; c <= 10; c++) {
        if (c%2 == 0) {
            exit.innerHTML += ` ${c} \u{1f449}`
        }
    }
    exit.innerHTML += ` \u{1f3c1}`
}