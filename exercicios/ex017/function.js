let gen = document.querySelector('section#gen')

function generate() {
    let num = Math.floor(100* Math.random())
    if (num.value != ''){
        gen.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
    } else {
        gerar.innerHTML = ''
    }
    

    
}


function clear(){
   
}
