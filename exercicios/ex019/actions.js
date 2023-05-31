
function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = prompt(`Valores informados: ${n1} e ${n2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir
    `)

    let res = document.querySelector('section#result')
    res.innerHTML = '<h2>Calculando</h2>'
    switch (op) {
        case 1:
            res.innerHTML += `${n1} + ${n2} = ${n1 + n2}`
            break
        case 2:
            res.innerHTML += `${n1} + ${n2} = ${n1-n2}`
            break
        case 3:
            res.innerHTML += `${n1} * ${n2} = ${n1*n2}`
            break
        case 4:
            res.innerHTML += `${n1} / ${n2} = ${n1/n2}`
            break
        default:
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
            break

    }
    

    
}