function val() {
    let n1 = Number(prompt('Digite um número:'))
    let n2 = Number(prompt('Digite outro valor:'))

    let res = document.querySelector('section#exit')
    if (n1 > n2) {
        res.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}`
    } else if (n1 < n2) {
        res.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}`
    } else {
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, ambos são <strong>IGUAIS</strong></p>`
    }
}