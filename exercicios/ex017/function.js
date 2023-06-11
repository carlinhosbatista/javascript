let exit = document.querySelector('section#exit')

function generate() {
    let random = Math.random() * 100
    exit.innerHTML += `<p>Acabei de pensar no número <mark>${random}</mark>!</p>`
}

function cleanse() {
    exit.innerHTML = ''
}