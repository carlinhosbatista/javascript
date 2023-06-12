let exit = document.querySelector('section#exit')

function generate() {
    let num = Math.floor(100* Math.random())
    exit.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function cleanse() {
    exit.innerHTML = null
}