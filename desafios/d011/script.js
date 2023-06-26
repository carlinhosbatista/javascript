function leapY() {
    let year = Number(prompt('Qual é o ano que você quer verificar?'))
    let exit = document.querySelector('p#exit')
    let lYear = ''
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        lYear = '<strong style = "background-color: #9ff89f; color: green">É BISSEXTO</strong> \u{2705}'
    } else {
        lYear = '<strong style = "background-color: #f17b7b; color: darkred">NÃO É BISSEXTO</strong> \u{274C}'
    }
    
    exit.innerHTML = `<h2>Analisando o ano de ${year}...</h2>`
    exit.innerHTML += `<p>O ano de ${year} ${lYear}</p>`
}