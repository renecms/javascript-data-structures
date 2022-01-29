// Creating and initializing arrays
let daysOfWeek = new Array(); // {1} 
daysOfWeek = new Array(7); // {2} 
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3} 

daysOfWeek = [];
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(daysOfWeek.length);

// Accessing elements and iterating an array
for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

// Fibonnaci example
const fibonacci = []; // {1} 
fibonacci[1] = 1; // {2} 
fibonacci[2] = 1; // {3} 

for (let i = 3; i < 5; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4} 
}

for (let i = 1; i < fibonacci.length; i++) { // {5} 
    console.log(fibonacci[i]); // {6} 
}


// Inserting an element at the end of the array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

// Inserting an element in the first position
numbers.unshift(-2);
numbers.unshift(-4, -3);

// Removing an element from the end of the array
numbers.pop();

// Removing an element in the first position
numbers.shift();

// Adding and removing elements from a specific position
numbers.splice(5, 3);  // removing
numbers.splice(5, 0, 2, 3, 4); // adding back
numbers.splice(5, 3, 2, 3, 4);  // removes 3 elements and add them back

console.log(numbers);

// Two-dimensional and multi-dimensional arrays
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}
printMatrix(averageTemp);

// Joining multiple arrays
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);

// Iterator functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isEven = x => x % 2 === 0;

console.log('Every: ', numbers.every(isEven));
console.log('Some: ', numbers.some(isEven));
numbers.forEach(number => console.log(`forEach ${number}: `, isEven(number)));

const myMap = numbers.map(isEven);
console.log('Numbers mapped to isEven', myMap);

const evenNumbers = numbers.filter(isEven);
console.log('Filtered even numbers: ', evenNumbers);

const reduceResult = numbers.reduce((previous, current) => previous + current);
console.log('Reduce result: ', reduceResult);

// ECMAScript 6 and new array functionalities

// foreach
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
} 

// iterator
let iterator = numbers[Symbol.iterator](); 
console.log(iterator.next().value); // 1 
console.log(iterator.next().value); // 2 

iterator = numbers[Symbol.iterator](); 
for (const n of iterator) { 
  console.log(n); 
} 

// entries
let aEntries = [1, 2].entries(); // retrieve iterator of key/value 
console.log(aEntries.next().value); // [0, 1] - position 0, value 1 
console.log(aEntries.next().value); // [1, 2] - position 1, value 2
console.log(aEntries.next()); // { value: undefined, done: true }

aEntries = numbers.entries(); 
for (const n of aEntries) { 
  console.log(n); 
}

// keys
const aKeys = [1, 2].keys(); // retrieve iterator of keys 
console.log(aKeys.next()); // { value: 0, done: false }  
console.log(aKeys.next()); // { value: 1, done: false } 
console.log(aKeys.next()); // { value: undefined, done: true } 

// values
const aValues = [1, 2].keys(); // retrieve iterator of values 
console.log(aValues.next()); // { value: 0, done: false }  
console.log(aValues.next()); // { value: 1, done: false } 
console.log(aValues.next()); // { value: undefined, done: true } 

// Using the from method
let numbers2 = Array.from(numbers); 
let evens = Array.from(numbers, isEven); 

// Using the Array.of method
let numbers4 = Array.of(1,2,3,4,5,6); 
let numbersCopy = Array.of(...numbers4); 

// Using the fill method
numbersCopy.fill(0); 
console.log(numbersCopy);

numbersCopy.fill(2, 1); 
console.log(numbersCopy);

numbersCopy.fill(1, 3, 5); 
console.log(numbersCopy);

let ones = Array(6).fill(1); 
console.log(ones);