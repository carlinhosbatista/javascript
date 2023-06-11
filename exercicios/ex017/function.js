let res = document.querySelector('section#res')

function generate() {
    let num = Math.floor(100* Math.random())
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function cleanse() {
    res.innerHTML = ''
}