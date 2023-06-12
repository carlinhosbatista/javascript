let comp = Math.floor(Math.random() * 100 + 1)

function guess() {
    let player = Number(prompt('Qual é o seu palpite?'))
    let guess = document.querySelector('section#guess')

    if (player > comp) {
        guess.innerHTML += `<p>Você falou ${player}. O meu número é <strong>MENOR!</strong></p>`
    } else if (player < comp) {
        guess.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MAIOR!</strong></p>`
    } else {
        guess.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${comp}</p>`
        let bt = document.getElementById('bt').style.visibility = 'hidden'
    }
}