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
    res.innerHTML += `<p><strong>${km.toFixed(3).toString().replace(".", ",")} quilômetros (Km)</strong></p>`
    res.innerHTML += `<p><strong>${hm.toFixed(3).toString().replace(".", ",")} hectômetros (Hm)</strong></p>`
    res.innerHTML += `<p><strong>${dam.toFixed(3).toString().replace(".", ",")} decâmetros (Dam)</strong></p>`
    res.innerHTML += `<p><strong>${dm.toLocaleString('pt-BR')} decímetro (dm)</strong></p>`
    res.innerHTML += `<p><strong>${cm.toLocaleString('pt-BR')} centímetro (cm)</strong></p>`
    res.innerHTML += `<p><strong>${mm.toLocaleString('pt-BR')} milímetro (mm)</strong></p>`
}