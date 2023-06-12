const readlineSync = require("readline-sync");

/*
Exercise 5.2
Create a function named randomizeCast(tvSerie) that will take as argument the data structure 
you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a 
TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.
*/
//Pas très propre ni compréhensible, A REFAIRE dans quelques jours!!!!!!!!!


//Fisher Yates shuffle
function shuffle(array) {
    let counter = array.length;
    for(i=counter-1;i>0;i--){
        let j = Math.floor(Math.random()*counter);
        //we swap the array[i] with the random array[j]
        [array[i],array[j]]=[array[j],array[i]]
    }
    return array;
}


//function from exercise 5.1
let a = readlineSync.question("Enter the name of your favorite tv show: ");
let b = readlineSync.question("Production year: ");
let c =readlineSync.question("Castmembers: (separeted by a comma)");
let castmembers=c.split(",");

function askTvSerie(){
    
    let myObject={
        name: a ,
        prodYear:b ,
        castmembers:castmembers
    }
    return myObject;
}

let newObject=askTvSerie();
console.log(newObject);






function randomizeCast(someSerie){
    let serieObject =someSerie;
    let newCastList = serieObject["castmembers"];
    
    shuffle(newCastList);    
    console.log(newCastList);
}

randomizeCast(askTvSerie());

