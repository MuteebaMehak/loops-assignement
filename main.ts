// loops assignment... //
// .. Q 1 .. //
//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate

//whether each lesson is running this year.

type Lesson = {
    name: string;
    status: boolean;
}
// Initialize an empty array with the type Lesson[]
let myWork: Lesson[] = [];

for (let i = 1; i <= 10; i++) {
    let lesson: Lesson = {
        name: "Lesson " + i,
        status: i % 2 === 0? true:false , // Alternate status between true and false
    };
    myWork.push(lesson);
}
console.log(myWork);

// .... Q 2 .... //
//2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.

let maxValue: number = 60 ;
const randomNumber: number = Math.floor(Math.random() * maxValue + 1);
console.log(randomNumber)
let guessNumber = [13, 58, 17, 19, randomNumber];
let index: number = 0;
while (
    index < guessNumber .length
){
    let currentGuess = guessNumber[index]
    if(currentGuess === randomNumber)
        console.log(" Congratulation you guessed a correct num");

 else if (
    currentGuess < randomNumber
){
    console.log("Oh! you guessed is to low.")
}
else (currentGuess > randomNumber)
{
    console.log("You guessed is to high!")
}
index++;
}

// // ... Q 3 ...//
// // Counter Incrementer (Using do while loop )
// //Objective: Create a program that increments a counter by a specified step value using a
// //do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// // Steps to Follow:
// // 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// // 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// // the value by which the counter will be incremented.
// // 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// // the step amount each iteration.
// // 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// // as long as the counter is less than 100.

let counter = 0;
let step = 1;
do{
    console.log(counter)
    counter += step
}
while(step < 100);
 
// // ... Q 4 ...//
// // Exploring Objects with for...in Loop
// // Objective: Practice working with objects in TypeScript and iterating over their properties using
// // a for...in loop.

// // for in loop
// //use tp iterate over the enumerable properties of an object. It allows you to access the keys of the
// // object rather then values
const myObject = {
    item1: "laptop",
    item2: "watch",
    item3: "shirt"
}
for (let y in myObject){
    console.log(`${y}: ${myObject[y]}`);
}

// // ... Q 5 ...//
// // Exploring Arrays with Loops(Using loop )
// // Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
// // to iterate through array elements.

// //for of loop is used to iterate over the values in an iterable object, such as array or a string
// // It allows you to access the object directly.

const myArray: number[]=[]
for(let i=1; i<= 10; i++){
    myArray.push(i)
}
console.log(myArray)
for( let i = 0;i<myArray.length;i++ ){
    console.log(`index: ${i}, value ${myArray[i]}`);
}
for (let y of myArray){
    console.log(`value: ${y}`);
}