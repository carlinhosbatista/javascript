let shot = document.querySelector('section#guess')

function rand() {
    let min = 1
    let max = 100
    let dif = max - min
    let comp = Math.random()
    let n = min + Math.trunc(dif * comp)

    
}


function guess() {
    let player = Number(prompt('Qual é o seu palpite?'))
    if(player == comp) {
        shot.innerHTML += `Parabéns! Você acertou! Eu tinha sorteado o valor ${n}`
    }
}