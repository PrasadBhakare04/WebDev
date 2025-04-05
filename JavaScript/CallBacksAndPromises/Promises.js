const fakeRequest = (url) => {
    return new Promise(function (resolve, reject) {
        const randTime = Math.random();
        setTimeout(() => {
            if (randTime < 0.7) {
                resolve();
                console.log('Resolved')
            }
            else {
                reject();
                console.log('Rejected')
            }
        }, 1000)

    })
}
fakeRequest('hello.com')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, 1000)
    })
}
delayedColorChange('red', 1000)
    .then(() => { return delayedColorChange('blue', 1000) })