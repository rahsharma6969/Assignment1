// Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.

function calculateSimpleInterest(principal, rate, time) {
 
    let interest = (principal * rate * time) / 100;
    return interest;
}



let principal = 1000;
let rate = 5; 
let time = 3; 

let interest = calculateSimpleInterest(principal, rate, time);
console.log("The simple interest is: $" + interest);
