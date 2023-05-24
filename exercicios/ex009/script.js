let c = 0
let res = document.querySelector('section#res')
function clicou() {
    c++
    res.innerHTML = `<p>O contador está com <mark>${c}</mark> cliques</p>`
}

function finalizar() {
    res.innerHTML = `${c = ''}`
    
}