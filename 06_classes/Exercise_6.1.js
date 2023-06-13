/*
In the code below, there is a class defined, named: Cat. Copy-paste it in your js file.

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
Test the class: Display in the console two instances of the class Cat: Skitty, 9 years and Pixel, 6 years.
*/
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const skitty=new Cat("Skitty", 9);
const pixel = new Cat ("Pixel", 6);
console.log (pixel);
console.log (skitty);