function count() {
    let n = document.querySelector('input#num').value
    let exit = document.querySelector('p#exit')

    exit.innerHTML += `<h2>Contando de 0 até ${n}</h2>`
    for(c = 0; c <= n; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}