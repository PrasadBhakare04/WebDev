// const myMath = {
//     PI: 3.1459,
//     add: function (x, y) {
//         console.log(x + y)
//     },
//     multiply: function (x, y) {
//         console.log(x * y)
//     },
//     square: function (x) {
//         console.log(x ** 2)
//     },
//     cube: function (x) {
//         console.log(x ** 3)
//     }
// }
//Another Syntax --------
const myMath = {
    PI: 3.1459,
    add(x, y) {
        console.log(x + y)
    },
    cube(x) {
        console.log(x ** 3)
    }
}