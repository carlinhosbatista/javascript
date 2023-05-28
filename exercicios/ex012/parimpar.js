function test() {
    let n = Number(prompt('Digite um número:'))
    let tipo = ''
    if (n % 2 == 0) {
        tipo = 'PAR'
    } else {
        tipo = 'ÍMPAR'
    }

    let res = document.querySelector('section#res')
    res.innerHTML = `<p>O número ${n} que foi digitado é <strong font-size: 1.3em;>${tipo}!</strong></p>`
}