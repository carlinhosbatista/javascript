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
        res.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MENOR!</strong></p>`
    } else if (player < comp) {
        res.innerHTML += `<p>Você falou ${player}. Meu númenor é <strong>MAIOR!</strong></p>`
    } else {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${comp}!</p>`
        let bt = document.querySelector('button#bt').style.visibility = 'hidden'
    }
}