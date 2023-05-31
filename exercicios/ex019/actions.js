function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados ${n1} e ${n2}.\nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let exit = document.querySelector('section#result')
    exit.innerHTML = '<h2>Calculando...</h2>'
    switch (op) {
        case 1:
            exit.innerHTML += `${n1} + ${n2} = ${n1+n2}`
            break;
    
        default:
            exit.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
            break;
    }
}