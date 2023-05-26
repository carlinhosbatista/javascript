function calc() {
    let a = parseFloat(prompt('Qual é o valor de a?')) 
    let b = parseFloat(prompt('Qual é o valor de b?')) 
    let c = parseFloat(prompt('Qual é o valor de c?')) 
    let res = document.querySelector('section#res')
    let d = (b*2) - 4*a*b 
    
    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x&sup2; + ${b}x + 2 = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>\u{0394} = ${b}&sup2; - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `O valor calcuado foi <strong>\u{0394} = ${d}`
}