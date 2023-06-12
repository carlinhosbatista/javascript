function rand() {
    let min = 1
    let max = 100
    let dif = max - min
    let comp = Math.random()
    let n = min + Math.trunc(dif * comp)
}