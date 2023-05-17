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
    if (l.indexOf(Number(n)) != -1) { // Se na lista o número(n) do índice for diferente de  -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}