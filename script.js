// let a = prompt("Input the first number");
// a = Number(a);
// let b = Number(prompt("Input the second number"));

// let c = alert(a + b);

// // Multiplication
// let first = Number(prompt("Input the first number"));
// let second = Number(prompt("Input the second number"));

// let answer = alert(first * second);

// // Subtraction
// let e = Number(prompt("Input the first number"));
// let f = Number(prompt("Input the second number"));

// let subtraction = alert(e - f);

// let num = Number(prompt("Input the number"));
// let res = alert(num ** 0.5);

// let a = Number(prompt("input the coefficient of x square"));
// let b = Number(prompt("input the coefficient of x"));
// let c = Number(prompt("input the constant"));

// let step_1 = b ** 2 - 4 * a * c;
// let step_2 = Math.sqrt(step_1);
// let step_3 = - b + step_2;
// let step_4 = step_3 / 2 * a;

// let oneStepPlus = ( -b + Math.sqrt(b**2 - 4 * a * c)) / 2 * a
// let oneStepMinus = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;

// alert(oneStepPlus);
// alert(oneStepMinus);

// let num = 10;

// if (num === 10) {
//     // some block of code
//     console.log("Yes, you're correct")
// } else if (num === 0) {
//     // run this block of code
//     console.log("No, The number is zero")
// }

// Automate a keyless car

// let userAge = Number(prompt("Please input your Age"));

// if (userAge < 18) {
//     // runs if user age is less than 18
//     alert("Sorry, you're too young to be driving at the moment!");
// } else if (userAge === 18) {
//     // runs only if user age is 18
//     alert("Congratulations on your first year of driving");
// } else if (userAge > 18 && userAge < 100) {
//     alert("Boss you be big man, Carry Go!");
// } else {
//     alert("You're too old boss, try employ driver");
// }

// let color = prompt("enter your traffic color").toLowerCase();

// if (color === "red") {
//   alert("Stop");
// } else if (color === "yellow") {
//   alert("get ready");
// } else if (color === "green") {
//   alert("Go");
// } else {
//   alert("input a valid colour");
// }

// using switch statement
// let color = prompt("enter your traffic color").toLowerCase();
// switch (color) {
//   case "red":
//     alert("Stop");
//     break;
//   case "yellow":
//     alert("get ready");
//     break;
//   case "green":
//     alert("Go");
//     break;
//   default:
//     alert("Input a valid color");
//     break;
// }

// let num1 = Number(prompt("Please enter number 1"));
// let num2 = Number(prompt("please enter number 2"));

// if (num1 > num2) {
//   alert("Number one is greater than number 2");
// } else if (num2 > num1) {
//   alert("Number 2 is greater than number 1");
// } else if (num1 === num2) {
//   alert("number one is equal to number 2");
// }

// let name = "Samuel";

// name === "John" ? console.log("Name is John") : console.log("Omo i no know");

// LOOPS

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// // do while 

// let number = 30;

// do {
//     console.log(number);
//     number++;
// } while (number < 10); 


// concatenation

// let myName = "Samuel";

// console.log('Hello, \"my name\" is " + myName + ". I\'m 2222 years old');

// console.log(`Hello "my name" is ${myName}. I'm 2222 years old.`)


// working on our arrays with loops 



// for (let i = 0; i <= 5; i++) {
//     if (i === 2) {
//         continue;
//     }
//     console.log(i);
// }



// let array = ["Samuel", "Babatunde", 299, "John", 123, "Victor"];


// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         continue;
//     } else {
//         console.log(array[i]);
//     }
// }


// console.log(typeof "trsuf")

// function myName(userName, timeOfDay = "Good Night") {
//     console.log(`Hello ${timeOfDay}, how are you ${userName}`);
// }

// myName("Samuel", "Good Morning");



// Function Expression

// const myName = function (userName, timeOfDay = "Good Night") {
//     console.log(`Hello ${timeOfDay}, how are you ${userName}`);
// };

// myName("Samuel", "Good Morning");



// let num = 2;

// function 


// const addsTwoNumbers = function(num1, num2) {
//     return num1 + num2;
// }

// const answer = addsTwoNumbers(20, 15);
// console.log(answer);



// const calcArea = function(length, breadth) {
//     return length * breadth;
// };

// const answer = calcArea(
//   Number(prompt("Please enter the first number")),
//   Number(prompt("Please enter the second number"))
// );
// console.log(answer);


// arrow functions

// const calcVolumeCube = (length) => Math.pow(length, 3);


// const res = calcVolumeCube(10);
// console.log(res)