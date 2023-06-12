function rand() {
    let min = 1
    let max = 100
    let dif = max - min
    let comp = Math.random()
    let n = min + Math.trunc(dif * comp)
}

let guess = document.querySelector('section#guess')
function guess() {
    let player = Number(prompt('Qual é o seu palpite?'))
}