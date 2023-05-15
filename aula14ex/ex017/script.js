function tabuada() {
    let num = document.querySelector('input#txtn')

    if (num.value == 0) {
        alert('Digite novamente!')
    } else {
        let n = Number(num.value)
        let item = document.querySelector('select#seltab')
        item = document.createElement('option')
        for(c = 1; c <= 10; c++) {
            item.text = `${}`    
    }
    }
    
    
}