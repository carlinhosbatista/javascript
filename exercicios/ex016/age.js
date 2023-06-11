function calcAge() {
    let now = new Date()
    let date = now.getFullYear()
    let bDay = Number(prompt('Em que ano você nasceu?'))

    let age = document.getElementById('age')
    age.innerHTML = `<p>Quem nasceu em ${bDay} vai completar <strong>${Math.trunc(bDay-date)}</strong> anos de idade.</p>`
}