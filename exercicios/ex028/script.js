function fatorial() {
    let n = Number(document.getElementById('num').value)
    let exit = document.getElementById('exit')
    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    let fat = 1
    for (let c = n; c > 1; c--) {
        exit.innerHTML += `${c} x `
    }
}