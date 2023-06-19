let cotD = parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
let res = document.getElementById('res')

function convert() {
    let reais = parseFloat(prompt('Quantos R$ você tem na carteira?'))
    let dol = reais/cotD
    res.innerHTML += `<p>Com ${reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, você vai conseguir comprar ${dol.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}.</p>`
}