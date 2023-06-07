function fatorial() {
    let n = Number(document.querySelector('input#num').value)
    let exit = document.querySelector('p#exit')
    let fat = 1
    exit.innerHTML += `<h2>Calculando ${n}!</h2>`
   for(let c = n; c > 1; c--)  {
        exit.innerHTML += `${c} x `
        fat *= c
   }
   exit.innerHTML += `1 = ${fat.toLocaleString('pt-BR')}`
}

