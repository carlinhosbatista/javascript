function leapY() {
    let year = Number(prompt('Qual é o ano que você quer verificar?'))
    let exit = document.querySelector('p#exit')
    let leapYear = ''
    exit.innerHTML = `<h2>Analisando o ano de ${year}...</h2>`
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 100 == 0)) {
        leapYear = `<strong style = "background-color: lightgreen; color: green;"> É BISSEXTO</strong> \u{2705}`
    } else {
        leapYear = `<strong style = "background-color: #f18f8f; color: darkred;"> NÃO É BISSEXTO</strong> \u{274C}`
    }
    exit.innerHTML += `O ano de ${year} ${leapYear}`
}