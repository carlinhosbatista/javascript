function tab() {
    let n = Number(document.getElementById('num').value)
    let exit = document.getElementById('exit')
    exit.innerHTML = `<h2>Tabuada de ${n}</h2>`
    for (c = 1; c <= 10; c++) {
        exit.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
    }
}