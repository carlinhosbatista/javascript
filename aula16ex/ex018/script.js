let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { // Descobrir se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) { // Se o número(n) for >= a 1 e <= a 100
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) { // Se na lista o número(n) do índice for diferente de -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Se o valor de num é um número e se o valor de (num, valores-array) não está na lista
        valores.push(Number(num.value)) // Valores.push -> adicionar um elemento no vetor, no caso o valor do Number(num.value).
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] // Descobrir o maior número no vetor
        let menor = valores[0] // Descobrir o menor número no vetor
        let soma = 0
        let media = 0
        for(let pos in valores) { // Pra cada posição em valores
            soma += valores[pos]
            if (valores[pos] > maior) // Se valores[pos] for maior que o maior valor digitado
                maior = valores[pos] // maior recebe o MAIOR valor da posição de valores
            if (valores[pos] < menor) // Se valores[pos] for menor que o menor valor digitado
                menor = valores[pos] // menor recebe o MENOR valor da posição de valores
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}