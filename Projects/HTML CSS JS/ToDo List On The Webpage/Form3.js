//Delegation means we want to do anything after the click
const list = document.querySelector('#list');
const ip = document.querySelector('#ip');
const btn = document.querySelector('#btn');
btn.addEventListener('submit', function (e) {
    e.preventDefault();
    const val = ip.value;
    const newList = document.createElement('LI');
    newList.innerText = val;
    list.append(newList);
    ip.value = ''
})
list.addEventListener('click', function (e) {
    e.target.remove()
})