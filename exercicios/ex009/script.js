let c = 0
let res = document.getElementById('exit')
function clicou() {
    c++
    res.innerHTML = `<p>O contador está com <mark>${c}</mark> cliques.</p>`
}

function finalizar() {
    res.innerHTML = 0
}
