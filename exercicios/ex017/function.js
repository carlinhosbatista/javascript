function generate() {
    let num = Math.floor(100* Math.random())
    let gen = document.querySelector('section#gen')
    gerar.innerHTML += `<p>Acabei de pensar no número <mark>${num}!</mark></p>`

}

function clear() {
    let clear = document.querySelector('button#clear')
    clear.innerHTML = ''
}