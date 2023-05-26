function calc() {
    let a = parseFloat(prompt('Qual é o valor de a?')) 
    let b = parseFloat(prompt('Qual é o valor de b?')) 
    let c = parseFloat(prompt('Qual é o valor de c?')) 
    let res = document.querySelector('section#res')


    
    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + 2 = 0</strong></p>`
    res.innerHTML += `O cálculo realizado será ▲ = ${b}`
}