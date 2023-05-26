function desc() {
    let prod = prompt('Qual é o produto que você está comprando?')
    let val = parseFloat(prompt(`Qual é o preço de ${prod}?`)) 
    let dis = (val*10)/100
    let tot = val - dis
    let res = document.querySelector('section#res')

    res.innerHTML = `<p><strong>Calculando o desconto de 10% para ${prod}.</strong></p>`
    res.innerHTML += `<p>O preço original era ${val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${dis.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `No fim, você vai pagar ${tot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${prod}.`
}