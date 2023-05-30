function dateH() {
    let months = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let week = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let now = new Date
    let day = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()
    let dayW = now.getDay()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    let exit = document.querySelector('section#exit')
    exit.innerHTML = `<p>Dia: <mark>${day}</mark></p>`
    exit.innerHTML += `<p>Mês: <mark>${months[month]}</mark></p>`
    exit.innerHTML += `<p>Ano: <mark>${year}</mark></p>`
    exit.innerHTML += `<p>Dia da semana: <mark>${week[dayW]}</mark></p>`
    exit.innerHTML += `<p>Hora: <mark>${hour}</mark></p>`
    exit.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    exit.innerHTML += `<p>Segundos: <mark>${sec}</mark></p>`
}