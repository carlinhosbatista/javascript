function sis() {
    let now = new Date()

    let exit = document.querySelector('section#exit')
    exit.innerHTML = `<p>O que recebi do sistema foi <mark>${now}</mark></p>`
}