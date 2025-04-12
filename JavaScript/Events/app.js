const button = document.querySelector('button');
button.onmouseenter = function () {
    console.log('You hovered your mouse on the button')
};
// const btn = document.querySelector('#EventLis');
// btn.addEventListener('click', function () {
//     console.log('You Clicked!!!')
// });
const btn = document.querySelector('#EventLis');
btn.addEventListener('click', function () {
    console.log('You Clicked!!!')
}, { once: true });

//FOR KEYBOARD---
// const btnn = document.querySelector('#ip');
// btnn.addEventListener('keydown', function () {
//     console.log("Key Pressed!!!")
// });
const btnn = document.querySelector('#ip');
btnn.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code)
});
// window.addEventListener('keydown', function (e) {
//     console.log(e.key)
// })
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('Up!!!');
            break;
        case 'ArrowDown':
            console.log('Down!!!');
            break;
        case 'ArrowLeft':
            console.log('Left!!!');
            break;
        case 'ArrowRight':
            console.log('Right!!!');
            break;
        default:
            console.log('Ignored!!!');
            break;
    }

})
