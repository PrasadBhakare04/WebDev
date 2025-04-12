// axios.get('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('From default .then', res.data)
//     })
//     .catch((e) => {
//         console.log('ERROR', e)
//     })


// const getPerson = async (url) => {
//     try {
//         const res = await axios.get(url);
//         console.log('From the ASYNC function', res.data)
//     } catch (e) { console.log(e) }
// }
// getPerson('https://swapi.dev/api/people/1/');

// const getJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res.data.joke)
// };
// getJoke()

const btn = document.querySelector('#btn');
const List = document.querySelector('#List');

const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    } catch (e) {
        return 'JOKE NOT AVAILABLE'
    }
};

const addJoke = async () => {
    const text = await getJoke();
    const li = document.createElement('LI');
    li.append(text);
    List.append(li)
}

btn.addEventListener('click', addJoke)