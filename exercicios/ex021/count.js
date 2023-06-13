function count() {
    let exit = document.querySelector('p#exit')
    exit.innerHTML += '<h2>Contando de 1 até 10.</h2>'
    for(let c = 1; c <= 10; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}