// fetch('https://swapi.dev/api/people/2/')
//     .then((res) => {
//         console.log('resolved');
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const func = async () => {
//     const data = await fetch('https://swapi.dev/api/people/2/');
//     const res = await data.json();
//     console.log(res)
// }
// func();

const req = new XMLHttpRequest();
req.onload = function () {
    console.log('solved');
    const data = JSON.parse(this.responseText)
    console.log(data)
}
req.onerror = function () {
    console.log('ERROR', err)
}
req.open('GET', 'https://swapi.dev/api/people/2/');
req.send()