// Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.


function calculateBMI(weight, height) {
  
    let bmi = weight / (height * height);
    return bmi;
}


let weight = 70; 
let height = 1.75; 


let bmi = calculateBMI(weight, height);
console.log("Your Body Mass Index (BMI) is: " + bmi.toFixed(2));
