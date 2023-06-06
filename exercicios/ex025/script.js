function count() {
    let num = Number(document.getElementById('num').value) 
    let exit = document.getElementById('exit')

    exit.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    for(c = 0; c <= num; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
}