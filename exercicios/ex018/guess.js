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

function guess() {
    player = Number(prompt('Qual é o seu palpite?'))
    
    if (player == comp) {
       res.innerHTML += `<p><strong>PARABENS!</strong> Você acertou! Eu tinha sorteado o valor ${comp}</p>`

    } else if (player > comp) {
        res.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MENOR!</strong></p>`
    } else {
        res.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MAIOR!</strong></p>`
    }
}