function tab() {
    let n = Number(document.querySelector('input#num').value)
    let exit = document.querySelector('p#exit')

    exit.innerHTML += `<h2>Tabuada de ${n}</h2>`
    for(c = 1; c <= 10; c++) {
        exit.innerHTML += `${n} x ${c} = <strong>${n*c}</strong> <br>`
    }
}