let res = document.querySelector('section#result')
let comp = 0
let player = 0

function rand() {
    let min = 1
    let max = 100
    let dif = max - min
    let random = Math.random()
    comp = min + Math.trunc(dif * random)
}

function shot() {
    player = Number(prompt('Qual a sua tentativa?'))
    if (player > comp) {
        res.innerHTML += `Você falou ${player}. Mu númer é MENOR!`
    }
}