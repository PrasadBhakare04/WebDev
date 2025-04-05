const reQ = (url) => {
    return new Promise((resolve, reject) => {
        const r = 1001;
        setTimeout(() => {
            if (r > 1000) {
                reject();
                console.log('rejected')
            }
            else {
                resolve();
                console.log('resolved')
            }
        }, 1000)
    })
}
reQ('jfdjgfj')
    .then(function () {
        console.log('succceddd')
    })
    .catch(function () {
        console.log('faileedddd')
    })