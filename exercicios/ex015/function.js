function dateH() {
    let months = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let week = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let now = new Date
    let day = now.getDay()
    let month = now.getMonth()
    let year = now.getFullYear()

    let exit = document.querySelector('section#exit')
    exit.innerHTML = `<p>Dia: <mark>${week[day]}</mark></p>`
    exit.innerHTML += `<p>Mês: <mark>${months[month]}</mark></p>`
    exit.innerHTML += `<p>Ano: ${year}</p>`
}