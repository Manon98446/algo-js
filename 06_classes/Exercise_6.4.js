/*
Exercice 6.4
Create a class named Person. It will have two properties, firstname and lastname, 
as well as a getter name, which will return "[firstname] [lastname]", and a setter name, 
which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.

Test the class: Create an instance of the Person class and display the value of the 
name inside the console, then assigns a new value to it and displays the state of the instance 
inside the console at the end of the process.
*/

class Person{
    constructor (firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }
    get firstname (){
        return this._firstname;
    }
    get lastname (){
        return this._lastname;
    }
    get name (){
        return (this._firstname +" "+ this._lastname);
    }
    set name(name){
        this._name = name;
    }
}

const manon = new Person("Manon","Van de Merckt");

console.log(manon.name);