/*
Exercice 6.2
Create a Person class. It will have two properties, firstname and lastname, and method sayHello, 
which will return "Hello, [firstname] [lastname]!".

Test the class: Create an instance of the Person class and return the value of the sayHello method inside the console.
*/

class Person {
    constructor(firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }
    sayHello() {
        console.log ("Hello, ", this._firstname, this._lastname,"!");
    }
}

const manon = new Person ("Manon", "Van de Merckt");
console.log(manon._firstname);
manon.sayHello();