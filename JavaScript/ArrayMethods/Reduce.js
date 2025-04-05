const arr = [111, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = arr.reduce(function (min, curr) {
    if (min < curr) {
        return min
    }
    else {
        return curr
    }
})