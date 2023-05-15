function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')

    if (ini.value == 0 || fim.value == 0 || passo.value.lenght == 0) {
        alert('[ERRO] Digite novamente!')
    } else {
        alert('Tudo ok!')
    }
}