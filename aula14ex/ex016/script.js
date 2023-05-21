function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value == 0 || fim.value == 0 || passo.value.lenght == 0) {
        alert('[ERRO] Informe o camp solicitado!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if (p == 0) {
            alert('Passo incorreto! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }
    }
}