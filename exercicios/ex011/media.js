function calc() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let res = document.getElementById('exit')
    media = (n1+n2)/2
    res.innerHTML += `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
    if(media < 6) {
        res.innerHTML += `A mensagem que temos é: Estude um pouco mais!`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: Meus parabéns!</p>`
    }
}