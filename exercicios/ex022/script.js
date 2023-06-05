function count() {
    let exit = document.querySelector('p#exit')
    let c = 1
    exit.innerHTML += '<h2>Contando de 1 até 10, marcando os pares</h2>'
    while (c <= 10) {
        if (c%2 == 0)     {
            exit.innerHTML += ` ${c} \u{1f449}`
            c++
        } else {
            exit.innerHTML += ` ${c} \u{1f449}`
            c++
        }
    }
}