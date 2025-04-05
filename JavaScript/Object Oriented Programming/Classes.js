// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name
//     }
//     rgb() {
//         const { r, g, b } = this
//         return `rgb(${r},${g},${b})`
//     }
// }

// class Pet {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
// }
// class Cat extends Pet {
//     meow() {
//         return `meow`
//     }
// }
// class Dog extends Pet {
//     bark() {
//         return `woof`
//     }
// }

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    eat() {
        return `${this.name} is eating`
    }
}
class Cat extends Pet {
    constructor(name, age, lives) {
        super(name, age);
        this.lives = lives
    }
    meow() {
        return `meow`
    }
}