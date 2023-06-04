function count() {
    let exit = document.getElementById('exit')
    for(let c = 1; c <= 10; c++) {
        exit.innerHTML += 'Contando de 1 até 10'
        document.body.style.fontSize = '2em'
    }
    exit.innerHTML += `${c}`
}