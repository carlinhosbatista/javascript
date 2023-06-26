function calc() {
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let delta = (Math.pow(b, 2)) - 4 * a * c

    let res = document.querySelector('p#res')
    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + 2 = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>\u{0394} = ${b}<sup>2</sup> -4 . 3 . 2</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>
        <mark>\u{0394} = ${delta}</mark>
    </strong></p>`
}