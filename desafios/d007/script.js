let cot = prompt('Antes de mais nada. Quanto está a cotação do dolár agora?') // Cotação
    function convert() {
        let real = prompt('Quantos R$ você tem na carteira?')
        let reais = parseFloat(real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //Conversão para moeda corrente
        let rdolar = real/cot
        let res = document.querySelector('section#res')

        res.innerHTML = `<p>Com ${reais} que você tem e a cotação de hoje, você vai conseguir comprar ${rdolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.</p>`
    }