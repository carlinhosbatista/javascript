function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.querySelector('input#res')
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('Impossível contar!')    
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value) 
        
        for(let c = i; c <= f; c+= p)
    } 
}



/*
else {
    
    
    if(p == 0) {
        p=1
    }
    */