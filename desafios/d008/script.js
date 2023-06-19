function desc() {
    let item = prompt('Qual é o produto que está comprando?')
    let price = parseFloat(prompt(`Qual é o preço de ${item}?`))
    let desc = 10/100 * price

    let res = document.querySelector('p#res')
    res.innerHTML = `<h2>Calculando desconto de 10% para ${item}</h2>`
    res.innerHTML += `<p>O preço original era ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${(price-desc).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${item}.</p>`
}