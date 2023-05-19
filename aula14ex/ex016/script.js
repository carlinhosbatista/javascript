function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Preencha o campo e tente novamente!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    }
}