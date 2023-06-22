function average() {
    let name = prompt('Qual é o nome do aluno?')
    let grade1 = parseFloat(prompt(`Primeira nota de ${name}:`))
    let grade2 = parseFloat(prompt(`Segunda nota de ${name}:`))
    let average = (grade1 + grade2)/ 2

    let exit = document.querySelector('p#exit')
    exit.innerHTML = `<h2>As notas de ${name} foram ${(grade1).toFixed(1)} e ${(grade2).toFixed(1)}</h2>`
    let situation = ''
    if (average > 6) {
        situation = 'foi <strong style = "color: green;">APROVADO!</strong>'
    } else if (average < 6 && (average >= 3)) {
        situation = 'ficou em <strong style = "color: orange;">RECUPERAÇÃO!</strong>'
    } else {
        situation = 'foi <strong style = "color: red;">REPROVADO!</strong>'
    }
    exit.innerHTML += `<p>A média de ${name} foi ${(average).toFixed(1)}.</p>`
    exit.innerHTML += `<p>Com a média ${average}, o(a) aluno(a) ${situation}</p>`
}