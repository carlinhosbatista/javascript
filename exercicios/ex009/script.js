let c = 0
let res = document.getElementById('exit')
function clicou() {
    c++
    res.innerHTML = `<p>O contador está com ${c} cliques.</p>`
}
