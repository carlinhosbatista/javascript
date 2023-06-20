function reajuste() {
    let name = prompt('Qual é o nome do funcionário?')
    let sal = parseFloat(prompt(`Qual é o salário de ${name}?`))
    let perc = parseFloat(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`))
    let res = document.querySelector('p#res')

    let reajuste = sal*perc/100
    res.innerHTML = `<h2>${name} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual é ${sal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
    res.innerHTML += `<p>Com um aumento de ${perc}%, o salário vai aumentar ${reajuste.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${name} vai passar a ganhar ${(sal+reajuste).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
}