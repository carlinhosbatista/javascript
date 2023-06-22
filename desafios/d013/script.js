function average() {
    let name = prompt('Qual é o nome do aluno?')
    let grade1 = parseFloat(prompt(`Primeira nota de ${name}:`))
    let grade2 = parseFloat(prompt(`Segunda nota de ${name}:`))

    let average = (grade1 + grade2)/ 2
    let situation = ''
    if (average < 3) {
        situation = 'REPROVADO!'
    } else if (average = 3 || (average <= 6)) {
        situation = 'em RECUPERAÇÃO!'
    }
    let exit = document.querySelector('p#exit')
    exit.innerHTML += `<p>AS notas do(a) aluno(a) ${name} foram ${grade1} e ${grade2}.</p>`

}