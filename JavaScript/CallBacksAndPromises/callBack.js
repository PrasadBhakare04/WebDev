function delayedColorChange(newColor, delay, doNext) {
    setTimeout(function () {
        document.body.style.backgroundColor = newColor;
        doNext && doNext()
    }, delay)
}
delayedColorChange('red', 3000, () => {
    delayedColorChange('blue', 3000, () => {
        delayedColorChange('green', 3000)
    })
})
// delayedColorChange('red', 3000, function () {
//     delayedColorChange('blue', 3000, function () {
//         delayedColorChange('green', 3000)
//     })
// })
// function fakeRequest(color, delay, doNext) {
//     setTimeout(function () {
//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     }, delay)
// }
// fakeRequest('red', 1000,
//     function () { fakeRequest('blue', 1000) }
// );