function fatorial() {
    let n = Number(document.querySelector('input#num').value)
    let exit = document.querySelector('p#exit')
    let res = 1
    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
    
    for(c = 1 ; c <= n; c++) {
        res *= c
        exit.innerHTML += `${n} x ${c} = ${res}`
        
    }
}