// Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
// arithmetic operators.



function calculateCircleArea(radius) {
    const pi = 3.14; 
    let area = pi * radius * radius; 
    return area;
}


let radius = 10; 


let area = calculateCircleArea(radius);
console.log("The area of the circle with radius " + radius + " is: " + area.toFixed(2));
