function count() {
    let num = document.querySelector('input#num') 
    let exit = document.querySelector('p#exit')
    let n = Number(num.value)
    exit.innerHTML += `<h2>Contando de 0 até ${n}</h2>`
    for (c = 0; c <= n; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}