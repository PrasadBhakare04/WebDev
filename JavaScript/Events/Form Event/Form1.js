const btn = document.querySelector('form');
const list = document.querySelector('#list');
const input = document.querySelector('#ip');
btn.addEventListener('submit', function (e) {
    e.preventDefault();
    const ip = input.value;
    const newList = document.createElement('LI');
    newList.innerText = ip;
    list.append(newList);
    input.value = ''
})