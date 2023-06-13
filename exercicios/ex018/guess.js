/*
let aut = Math.floor(Math.random() * 100 + 1)

function guess() {
    let num = Number(prompt('Qual é o seu palpite?'))
    let guess = document.querySelector('section#guess')
    if (num == aut) {
       guess.innerHTML += `<p><strong>PARABENS!</strong> Você acertou! Eu tinha sorteado o valor ${aut}</p>`
       document.querySelector('button#bt').style.visibility = 'hidden'
    } else if (num > aut) {
        guess.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR!</strong></p>`
    } else {
        guess.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MAIOR!</strong></p>`
    }
}
*/

// An alternative way...

let shot = document.getElementById('guess')
let comp = 0
let player = 0

function rand() {
    let min = 1
    let max = 100
    let dif = max - min
    let rand = Math.random()
    comp = min + Math.trunc(dif * rand)
}

function guess() {
    player = Number(prompt('Qual é o seu palpite?'))
    if (player > comp) {
        shot.innerHTML += `<p>Você falou ${player}. O meu número é <strong>MENOR!</strong></p>`
    } else if (player < comp) {
        shot.innerHTML += `<p>Você falou ${player}. O meu número é <strong>MAIOR!</strong></p>`
    } else {
        shot.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${comp}</p>`
        let bt = document.getElementById('bt').style.visibility = 'hidden'
    }
}