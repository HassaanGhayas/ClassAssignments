// Task 1: Creating a Lesson Plan(Using for loop )

// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate whether each lesson is running this year.

let myWork: any[] = [] // Array Creation

  // Loop Creation
for (let i = 1; i <= 10; i++) {
       
    // Object Creation
    let totalLesson = {
        name: `Lesson ${i}`,
        status: i % 2 == 0}

    myWork.push(totalLesson)   //Pushing the Objects into the Array
    
}
console.log(myWork); // Printing the array

// Task 2: Guessing Game (Using while loop )

// Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.

let maxNumber = 50 //Declaring the maximum number

let randomNumber = Math.floor(Math.random() * maxNumber + 1) //Generating a random number

console.log(randomNumber); //Printing the Random Number

let userGuess = false // User guess which is initiallu false which will be set to true when the guess is correct
let totalGuesses = [19, 27, 49, 8] //An array of predefines Guesses

let iterator = 0 // This Variable helps checking every item in the array

while (iterator<totalGuesses.length) {
  if (totalGuesses[iterator] === randomNumber) {
    console.log("Your guess is correct");
    userGuess = true
  }
  else{
  if(totalGuesses[iterator] < randomNumber){
    console.log("Your Guess is too low");
  }
  else if(totalGuesses[iterator] > randomNumber){
    console.log("Your Guess is too high");
  }}
  iterator++
}

// Task 3: Counter Incrementer (Using do while loop)

let counterVariable = 0 // Creating the counter variable

let steps = 3 // number of steps

do { // Do while loop
  console.log(`Counter ${counterVariable}`);
  counterVariable += steps 
} while (counterVariable<100); //The Condition

// Task 4: Exploring Objects with for...in Loop

// Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.

let objectWithThreeItems: any = {item01: "Car", item02: "Bicycle", item03: "Noodles"} // An object containing three items

for (const key in objectWithThreeItems) { // For in loop
  console.log(`${key}: ${objectWithThreeItems[key]}`);
  }

// Task 5: Exploring Arrays with Loops(Using loop)

// Objective: Practice working with arrays in TypeScript and using for loops and for...of loops to iterate through array elements.

let myArray = [] // An empty array

for (let i = 1; i <= 10; i++) { // for loop
  myArray.push(i) //Pushing the value
}
console.log(myArray); //Printing the myArray

for (let i = 0; i < myArray.length; i++) { // Printing with index
  console.log(`Index: ${myArray.indexOf(i+1)}, Value: ${myArray[i]}`);
}

for (const iterator of myArray) { // Printing each element using for-of loop
  console.log(iterator);
}


