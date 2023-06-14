function fatorial() {
    let n = Number(document.getElementById('num').value)
    let exit = document.getElementById('exit')

    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    exit.innerHTML += `${n}`
    for(c = 4; c >= 1; c--) {
        exit.innerHTML += ` x ${c}`
        fat = fat * c
    }
    exit.innerHTML += ` = ${fat}`
}