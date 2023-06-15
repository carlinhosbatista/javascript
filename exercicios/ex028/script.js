function fatorial() {
    let n = Number(document.querySelector('input#num').value)
    let exit = document.querySelector('p#exit')
    fat = 1

    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    for(c = n; c >= 1; c--) {
        exit.innerHTML += `${c} x `
        fat *= c
    }
    exit.innerHTML += ` = <strong>${fat}</strong>`
}