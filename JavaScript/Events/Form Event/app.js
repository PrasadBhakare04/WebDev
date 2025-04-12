// const btn = document.querySelector('form');
// btn.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log('SUBMITTED!!!')
// })
// const btn = document.querySelector('#ip')
// btn.addEventListener("change", function (e) {
//     e.preventDefault();
//     console.log(btn.value)
// })
const h1 = document.querySelector('#hh');
const btn = document.querySelector('#ip');
btn.addEventListener('input', function (e) {
    e.preventDefault();
    h1.innerText = btn.value
})
// btn.addEventListener('input', function(){
//     if(btn.value ===''){
//         h1.innerText = 'Enter Your Username'
//     }
//     else{
//         h1.innerText = `Welcome, ${btn.value}`
//     }
// })