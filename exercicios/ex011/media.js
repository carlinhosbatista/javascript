function calc() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let media = (n1 + n2)/2
    
    let msg = ''
    if (media >= 6) {
            msg = 'Meus Parabéns!'
        } else {
            msg = 'Estude um pouco mais!'
        }

    let res = document.querySelector('section#res')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}

