function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados ${n1} e ${n2}.\n O que vamos fazer?\n [1] Somar\n [2] Subtrair\n [3] Multiplicar\n [4] Dividir`))

    let result = document.querySelector('section#result')
    result.innerHTML = '<h2>Calculando...</h2>'
    switch (op) {
        case 1:
            result.innerHTML += `<p>${n1} + ${n2} = ${(n1+n2)}</p>`
            break;
    
        default:
            break;
    }
}