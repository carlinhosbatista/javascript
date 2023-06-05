function count() {
    let exit = document.getElementById('exit')
    exit.innerHTML += '<h2>Contando de 1 até 10, marcando os pares</h2>'
    for(let c = 1; c <= 10; c++) {
        if(c % 2 == 0) {
            exit.innerHTML += ` <mark>${c}</mark> \u{1f449}`
        } else {
            exit.innerHTML += ` ${c} \u{1f449}`    
        }
    }
    exit.innerHTML += `\u{1f3c1}`
}