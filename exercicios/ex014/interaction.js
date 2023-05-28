let bt = document.querySelector('button#bt') // Button

bt.addEventListener('click', interact)

function interact() {
    let date = new Date
    let int = document.querySelector('section#int') // Interagir
    int.innerHTML = `<p>O que eu recebi do sistema foi <mark>${date}</mark></p>`
}