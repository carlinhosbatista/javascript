function converter() {
    let cel = prompt('Digite uma temperatura em °C (Celsius)')
    let kel = parseFloat(cel)+273.15
    let fah = cel*9/5 + 32
    let res = document.querySelector('section#res')

    res.innerHTML = `<p><strong>A temperatura ${cel.toString().replace('.', ',')}&#176;C, corresponde a...</strong></p>`
    res.innerHTML += `<p><strong>${kel.toLocaleString().toString().replace('.', ',')}&#176;K (Kelvin)</strong></p>`
    res.innerHTML += `<p><strong>${fah.toLocaleString()}°F (Fahrenheit)</strong></p>`
}