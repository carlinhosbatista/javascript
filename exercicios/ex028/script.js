function fatorial() {
    let n = Number(document.getElementById('num').value)
    let exit = document.getElementById('exit')
    let fat = 1
    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    
    for(c = n; c >= 1; c--) {
        exit.innerHTML += ` ${c} x`
        fat *= c
    }
    exit.innerHTML += ` = ${fat}`
}