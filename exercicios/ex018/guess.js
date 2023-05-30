let aut = Math.floor(Math.random() * 100 +1)

function guess() {
    let num = Number(prompt('Qual é o seu palpite?'))
    let guess = document.querySelector('section#guess')
    if (num == aut) {
       guess.innerHTML += `<p><strong>PARABENS!</strong> Você acertou! Eu tinha sorteado o valor ${aut}</p>`
    } else if (num > aut) {
        guess.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR!</strong></p>`
    } else {
        guess.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MAIOR!</strong></p>`
    }
}