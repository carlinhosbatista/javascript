function check() {
    let pBefore = parseFloat(prompt('Qual era o preço anterior do produto?'))// price before
    let pAfter = parseFloat(prompt('Qual é o preço atual do produto?'))// price after
    let exit = document.querySelector('p#exit')

    exit.innerHTML = '<h2>Analisando os valores informados</h2>'
    exit.innerHTML += `<p>O produto custava ${pBefore.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e agora custa ${pAfter.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`

    let percent = ''
    if (pAfter > pBefore) {
        let percent = (pAfter/pBefore - 1) * 100
        exit.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        exit.innerHTML += `O preço subiu ${(pAfter-pBefore).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior.`
        exit.innerHTML += `<p>Uma variação de ${percent.toFixed(1)}\u{0025} pra cima.</p>`
    } else {
        let percent = (pBefore/pAfter - 1) * 100
        exit.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        exit.innerHTML += `<p>O preço caiu ${(pBefore-pAfter).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em relação ao preço anterior.</p>`
        exit.innerHTML += `uma variação de ${Math.abs(percent.toFixed(2))}\u{0025} pra baixo.`
    }
    
}