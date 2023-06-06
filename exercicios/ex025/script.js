function count() {
    let num = document.getElementById('num')
    let exit = document.getElementById('exit')
    let n = Number(num.value)

    exit.innerHTML += `<h2>Contando de 0 até ${n}</h2>`
    for(c = 0; c <= n; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}