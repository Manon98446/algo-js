/*
Exercise 4.5
Create a function named calcDistance which takes the coordinates of two different points 
A and B in a 2D space. That function must return the distance between those two points.

Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical 
formula to do that. You will also probably need to search for useful functions in 
JavaScript to help you making complex mathematical formulas...
*/

//formule math: distanceAB=((x2-X1)^2+(y2-y1)^2)^0.5
let pointA=[1,1];
let pointB=[3,1];
function calcDistance(A,B){
    let X = Math.pow((B[0]-A[0]),2);
    let Y = Math.pow((B[1]-A[1]),2);
    let distance= Math.pow((X+Y), 0.5);
    return distance;
}
console.log(calcDistance(pointA, pointB));