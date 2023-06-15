function converter() {
    let dis = parseFloat(prompt('Digite uma distância em metros (m)'))
    let res = document.querySelector('section#res')
    let dist = dis.toString().replace(".", ",")
    let km = dis/1000

    res.innerHTML = `<h2>A distância de ${dist} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km.toFixed(3).toString().replace(".", ",")} quilômetros (Km)</p>`
}