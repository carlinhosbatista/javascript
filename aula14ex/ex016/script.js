function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    if (ini.value == 0 || fim.value == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Digite novamente!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(c = i; c <= 10; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            for(c = i; c >= 10; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
    }
}