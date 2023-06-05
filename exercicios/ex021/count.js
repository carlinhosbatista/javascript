function count() {
    let exit = document.querySelector('p#exit')
    exit.innerHTML += '<p><h2>Contando de 1 até 10</h2></p>'
    for(c = 1; c <= 10; c++) {
        exit.innerHTML += ` ${c} \u{1f449}`
    }
    exit.innerHTML += ` \u{1f3c1}`
   
}