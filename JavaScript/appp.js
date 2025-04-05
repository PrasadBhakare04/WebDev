const arr = [1, 2, 3, 4, 5, 6, 7]
function allEvens(arr) {
    const eve = arr.filter(function (x) {
        return x % 2 === 0
    })
    console.log(eve)
}