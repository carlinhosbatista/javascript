function calc() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let res = document.getElementById('exit')

    res.innerHTML += `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`

}