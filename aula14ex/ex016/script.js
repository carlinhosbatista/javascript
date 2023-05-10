function contar() {
    var inicio = document.querySelector('div#txtini')
    var fim = document.querySelector('div#txtfim')
    var passo = document.querySelector('div#txtpas')
    var res = document.querySelector('div#res')
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('Impossível contar!')    
    } else if (Number(passo.value) > inicio) {
        alert(`Passo inválido! Considerando PASSO ${inicio}`)
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    }
}