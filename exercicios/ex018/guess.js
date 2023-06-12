let comp = Math.floor(Math.random() * 100 + 1)

function guess() {
    let player = Number(prompt('Qual é o seu palpite?'))
    let guess = document.querySelector('section#guess')

    if (player > comp) {
        guess.innerHTML = `<p>Você falou ${player}. O meu n´mero é <strong>MENOR!</strong></p>`
    } else if (player < comp) {
        guess.innerHTML += `<p>Você falou ${player}. Meu número é <strong>MAIOR!</strong></p>`
    }
}