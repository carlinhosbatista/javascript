function converter() {
    let dis = parseFloat(prompt('Digite uma distância em metros (m)'))
    let res = document.querySelector('section#res')
    let dist = dis.toString().replace(".", ",")
    let km = dis/1000
    let hm = dis/100
    let dam = dis/10
    let dm = dis*10
    let cm = dis*100
    let mm = dis*1000

    res.innerHTML = `<h2>A distância de ${dist} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km.toFixed(3).toString().replace(".", ",")} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm.toFixed(3).toString().replace(".", ",")} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam.toFixed(3).toString().replace(".", ",")} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm.toLocaleString('pt-BR')} decímetro (dm)</p>`
    res.innerHTML += `<p>${cm.toLocaleString('pt-BR')} centímetro (cm)</p>`
    res.innerHTML += `<p><strong>${mm.toLocaleString('pt-BR')} milímetro (mm)</strong></p>`
}