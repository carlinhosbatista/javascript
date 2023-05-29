function calcAge() {
    let now = new Date // Agora
    let year = now.getFullYear()
    
    let bDay = Number(prompt('Em que ano você nasceu?')) // Birth day
    let age = year - bDay

    let calc = document.querySelector('section#calc')
    calc.innerHTML = `<p>Quem nasceu em ${bDay} vai completar <strong>${age}</strong> anos em ${year}</p>`
}