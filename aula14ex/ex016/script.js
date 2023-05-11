function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || pas.value.lenght == 0) {
        alert('[ERRO] Digite novamente!')
    } else {
        alert('Tudo ok!')
    }
}