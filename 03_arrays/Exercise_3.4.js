/*
Exercise 3.4
Write a program that will display the minimum and maximum elements of a given array.
*/
let arr=[8,3,45,1,9];
let max=arr[0];
let min=arr[0];

for(i=0; i<= arr.length; i++){
    
    if(arr[i]<arr[i+1] && arr[i]<min){
        min=arr[i];
        
    }
    else if (arr[i]>arr[i+1] && arr[i]>max){
        max=arr[i];
        
    }
   
       
}
console.log(min, max);
