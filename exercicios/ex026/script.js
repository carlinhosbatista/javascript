function count() {
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)
    let exit = document.querySelector('p#exit')
    exit.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`
    if(n1 < n2) {
        for (c = n1; c <= n2; c++) {
            exit.innerHTML += `${c} \u{1f449}`
        }
    } else {
        for(c = n1; c >= n2; c--) {
            exit.innerHTML += `${c} \u{1f449}`
        }
    }
    exit.innerHTML += ` \u{1f3c1}`
}