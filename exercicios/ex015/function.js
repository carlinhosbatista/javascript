function sistem() {
    let now = new Date()
    let week = new Array('Dom', ' Seg', 'Ter', 'Qua', 'Qui', ' Sex', 'Sáb')
    let months = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let day = now.getDate()
    let month = now.getMonth()
    let exit = document.querySelector('section#exit')

    exit.innerHTML += `<p>Dia: <mark>${day}</mark></p>`
    exit.innerHTML += `<p>Mês: <mark>${months[month]}</mark></p>`
}