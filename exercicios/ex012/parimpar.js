function test() {
    let n = prompt('Diga um número:')
    let res = document.querySelector('section#exit')
    let resp = ''
    if (n%2 == 0) {
        resp = "PAR!"
    } else {
        resp = 'ÍMPAR!'
    }
    res.innerHTML = `<p>O número ${n} que foi digitado é ${resp}</p>`
}