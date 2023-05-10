function contar(){
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar'
        //alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando... '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // Contagem progressiva
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}