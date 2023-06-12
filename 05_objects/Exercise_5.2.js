const readlineSync = require("readline-sync");



/*
function askTvSerie(){
    let a = readlineSync.question("Enter the name of your favorite tv show: ");
    let b = readlineSync.question("Production year: ");
    let c =readlineSync.question("Castmembers: ");
    let myObject={
        name: a ,
        prodYear:b ,
        castmembers:c ,
    }
    return myObject;
}
let newObject=askTvSerie();
console.log(newObject);
*/

/*
Exercise 5.2
Create a function named randomizeCast(tvSerie) that will take as argument the data structure 
you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a 
TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.
*/

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





function randomizeCast(){
    let fixedTvSerie={
        name : "a" ,
        prodYear :"b" ,
        castmembers:["c", "t", "a", "b", "d", 3, "Hey"]
    };
    let newCastList=fixedTvSerie["castmembers"];
    shuffle(newCastList);

    
    console.log(newCastList);

}

randomizeCast();

