function contar(){
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}