const req = new XMLHttpRequest();
req.onload = function () {
    console.log('IT Loaded');
    const data = JSON.parse(this.responseText);
    console.log(data)
    console.log(this.status)
}
req.onerror = function () {
    console.log('error');
    console.log(this.status)
}
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();