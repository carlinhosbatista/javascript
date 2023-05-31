
function go() {
    let val1 = Number(prompt('Primeiro valor:'))
    let val2 = Number(prompt('Segundo valor:'))
    let op = prompt(`Valores informados: ${val1} e ${val2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir
    `)

    let res = document.querySelector('section#result')
    res.innerHTML = '<h2>Calculando</h2>'
    switch (op) {
        case 1:
            res.innerHTML += `${val1} + ${val2} = ${}`
            break
        case 2:
            res.innerHTML = 
            break
        case 3:
            res.innerHTML = 
            break
        case 4:
            res.innerHTML = 
            break
        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${val1} e ${val2}, mas não sei o que fazer com eles.</p>`
            break

    }
    

    
}