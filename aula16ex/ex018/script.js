let num = document.querySelector('input#fnum')
let list = document.querySelector('input#flista')
let res = document.querySelector('div#res')
let val = []

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, val)) {
        alert('Tudo ok!')    
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
}

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {

}