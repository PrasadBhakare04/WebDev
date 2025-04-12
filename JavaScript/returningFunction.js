// function isBetween(min, max) {
//     return function (num) {
//         return min <= num && num <= max
//     }
// } This is used as function factory or function creator
// function Op(Operation) {
//     if (Operation === 1) {
//         return function (x, y) {
//             console.log(x + y)
//         }
//     } else {
//         return function (x, y) {
//             console.log(x - y)
//         }
//     }
// }
const func = function (min, max) {
    return function (x) {
        if (x < max && x > min) {
            console.log("the number is in between")
        }
        else {
            console.log("the numbber is not in between")
        }
    }
}