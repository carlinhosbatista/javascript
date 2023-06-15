function converter() {
    let celsius = parseFloat(prompt('Digite uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')
    let k = celsius + 273.15 
    let f = (celsius * 9/5) + 32

    res.innerHTML = `<h2>A temperatura de ${celsius.toLocaleString('pt-BR')}&#176;C, corresponde a...</h2>`
    res.innerHTML += `<p><strong>${k.toLocaleString('pt-BR')}&#176;K (Kelvin)</strong></p>`
    res.innerHTML += `<p><strong>${f.toLocaleString('pt-BR')}&#176;F (Fahrenheit)</strong></p>`
}