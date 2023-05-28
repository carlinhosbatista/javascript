function dateH() {
    let months = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let week = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let now = new Date
    let exit = document.querySelector('section#exit')
    let day = now.getDate()

    exit.innerHTML = `<p>
        Dia: <mark>${day}</mark>
    </p>`
}