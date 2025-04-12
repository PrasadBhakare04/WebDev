const fakeRequest = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(function () {
        if (delay > 4000) {
            failure('failleedd')
        }
        else {
            success('Succeess')
        }
    }), delay
}


fakeRequest('hello.com', function (message) {
    console.log('suceeeeedddedd');
    console.log(message)
}, function () {
    console.log('faillleeeedddd')
})