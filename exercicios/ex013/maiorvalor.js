let bt = document.querySelector('button#bt')
let res = document.querySelector('section#res')

bt.addEventListener('click', bigNumber)

function bigNumber() {
    let n1 = Number(prompt('Digite um número:'))
    let n2 = Number(prompt('Digite outro número:'))
    let big = ''
    if (n1 > n2) {
        big = n1
    } else {
        big = n2
    }
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${big}</strong></p>`
}