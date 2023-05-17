let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
// VALORES GLOBAIS: QUANDO ESTÃO FORA DAS FUNÇÕES

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
        valores.push(Number(num.value)) // Adicionar 'valores(índice).push -> adicionar um elemento no vetor, no caso o valor do Number(num.value). Verificar se o programa está funcionando corretamente
        let item = document.createElement('option') 
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}