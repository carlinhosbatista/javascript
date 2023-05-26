function reajuste() {
    let nome = prompt('Qual é o nome do funcionário?')
    let sal = parseFloat(prompt(`Qual é o salário de ${nome}`))  
    let porc = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    let aumento = sal*porc/100
    let nSal = parseFloat(sal) + parseFloat(aumento)  
    let res = document.querySelector('section#res')

    res.innerHTML = `<p><h2>${nome} recebeu um aumento salarial!</h2></p>`
    res.innerHTML += `<p>O salário atual era ${sal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salário vai aumentar ${aumento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar ${nSal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`
}