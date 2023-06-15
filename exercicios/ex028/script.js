function fatorial() {
    let n = Number(document.querySelector('input#num').value)
    let exit = document.getElementById('exit')
    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    let fat = 1
    for(c = n; c > 1; c--) {
        exit.innerHTML += `${c} x `
        fat *= c
    }
    exit.innerHTML += `= <strong>${fat}</strong>`
}