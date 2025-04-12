Sound = {
    s: 'hello',
    give() {
        console.log(this.s)
    }
}
let meow = Sound.give;