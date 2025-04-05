const link = 'https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon';
const container = document.querySelector('#container');
for (let i = 1; i <= 100; i++) {
    const image = document.createElement('img');
    image.src = `${link}${i}.png`;
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    const num = document.createElement('span');
    num.innerText = i;
    newDiv.append(image);
    newDiv.append(num);
    container.appendChild(newDiv)

}