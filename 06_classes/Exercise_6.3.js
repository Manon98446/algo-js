/*
Exercice 6.3
In the code below, there is a prewritten class named: Animal.
From this class, create the two classes, Cat and Dog. 
They will each have two properties, name and greeting (the second property must be static).

    class Animal {
        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }
Test the class: Create an instance of the Dog class and an instance of the Cat class and 
display the return value of the sayHello method inside the console.
*/

class Animal {
    constructor(name){
        this._name = name;
        this._greeting = "Hello";
    }
    get greeting() {
        return this._greeting;
    }
    get name() {
        return this._name;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}
class Cat extends Animal {
    constructor(name) {
      super(name);
    }
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
}

const lolotteCat = new Cat("Lolotte");
console.log(lolotteCat.sayHello());