function converter() {
    let metros = prompt('Digite uma distância em metros (m)')
    let km = parseInt(metros)/1000
    let hm = metros/100
    let dam = metros/10
    let dm = metros*10
    let cm = metros*100
    let mm = metros*1000

    let res = document.querySelector('section#res')
    res.innerHTML = `<p><h2>A distância de ${metros.toString().replace(".", ",")} metros, corresponde a...</h2></p>`
    res.innerHTML += `<p>${km.toString().replace(".", ",")} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm.toFixed(3).toString().replace(".", ",")} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam.toString().replace(".", ",")} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm.toLocaleString()} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm.toLocaleString()} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm.toLocaleString()} milímetros (mm)</p>`
}

function converter() {
    let dis = parseFloat(prompt('Digite uma distância em metros (m)'))
    let res = document.querySelector('section#res')
    let dist = dis.toString().replace(".", ",")
    let km = dis/1000

    res.innerHTML = `<h2>A distância de ${dist} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km.toFixed(3).toString().replace(".", ",")} quilômetros (Km)</p>`
}