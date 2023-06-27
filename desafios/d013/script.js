function average() {
    let name = prompt('Qual é o nome do aluno?')
    let grade1 = parseFloat(prompt(`Primeira nota de ${name}:`))
    let grade2 = parseFloat(prompt(`Segunda nota de ${name}:`))
    let FinalA = (grade1+grade2)/ 2
    let exit = document.querySelector('p#exit')
    result = ''
    if (FinalA < 3) {
        result = '<strong style = "color: red">REPROVADO</strong>'
    } else if (FinalA >= 3 && (FinalA < 6)) {
        result = 'em <strong style = "color: orange">RECUPERAÇÃO</strong>'
    } else {
        result = '<strong style = "color: green">APROVADO</strong>'
    }
    exit.innerHTML = `<h2>Analisando a situação do(a) aluno(a) ${name}.</h2>`
    exit.innerHTML += `<p>A primeira nota de ${name} foi ${grade1.toFixed(1)} e a segunda nota foi ${grade2}.</p>`
    exit.innerHTML += `<p>Com as notas ${grade1.toFixed(1)} e ${grade2.toFixed(1)}, a média de ${name} foi ${FinalA}.</p>`
    exit.innerHTML += `<p>Com a média ${FinalA.toFixed(1)}, o aluno ${name} está ${result}!</p>`
}