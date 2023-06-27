function average() {
    let name = prompt('Qual é o nome do aluno?')
    let grade1 = parseFloat(prompt(`Primeira nota de ${name}:`))
    let grade2 = parseFloat(prompt(`Segunda nota de ${name}:`))
    let FinalA = (grade1+grade2)/ 2
    let exit = document.querySelector('p#exit')
    result = ''
    if (FinalA < 3) {
        result += '<strong style = "color: red">REPROVADO</strong>'
    } else if (FinalA >= 3 && (FinalA < 6)) {
        result += 'em <strong style = "color: orange">RECUPERAÇÃO</strong>'
    } else {
        result += '<strong style = "color: green">APROVADO</strong>'
    }
    exit.innerHTML += `<p>Com a média ${FinalA}, o aluno ${name} está ${result}!</p>`
}