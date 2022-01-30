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
console.log("ECMAScript 6 and new array functionalities \n")

// foreach
console.log("foreach \n")
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd');
}

// iterator
console.log("iterator \n")
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1 
console.log(iterator.next().value); // 2 

iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}

// entries
console.log("entries \n")
let aEntries = [1, 2].entries(); // retrieve iterator of key/value 
console.log(aEntries.next().value); // [0, 1] - position 0, value 1 
console.log(aEntries.next().value); // [1, 2] - position 1, value 2
console.log(aEntries.next()); // { value: undefined, done: true }

aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}

// keys
console.log("keys \n")
const aKeys = [1, 2].keys(); // retrieve iterator of keys 
console.log(aKeys.next()); // { value: 0, done: false }  
console.log(aKeys.next()); // { value: 1, done: false } 
console.log(aKeys.next()); // { value: undefined, done: true } 

// values
console.log("values \n")
const aValues = [1, 2].values(); // retrieve iterator of values 
console.log(aValues.next()); // { value: 0, done: false }  
console.log(aValues.next()); // { value: 1, done: false } 
console.log(aValues.next()); // { value: undefined, done: true } 

// Using the from method
console.log("Using the from method \n")
let numbers2 = Array.from(numbers);
let evens = Array.from(numbers, isEven);

// Using the Array.of method
console.log("Using the Array.of method \n")
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
let numbersCopy = Array.of(...numbers4);

// Using the fill method
console.log("Using the fill method \n")
numbersCopy.fill(0);
console.log(numbersCopy);

numbersCopy.fill(2, 1);
console.log(numbersCopy);

numbersCopy.fill(1, 3, 5);
console.log(numbersCopy);

let ones = Array(6).fill(1);
console.log(ones);

// Using the copyWithin method
console.log("Using the copyWithin method \n")
let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
console.log(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log(copyArray);

// Sorting elements
console.log("Sorting elements \n")
console.log("Numbers array ", numbers)
numbers.reverse();
console.log("Reversed numbers array ", numbers)
numbers.sort();
console.log("Sorted numbers array (lexicographically) ", numbers)
numbers.sort((a, b) => a - b);
console.log("Sorted numbers array ", numbers)

// Custom sorting
console.log("Custom sorting \n")
const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }, // trailing comma ES2017 
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));

// Sorting strings
console.log("Sorting strings \n")
let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

names = ['Ana', 'ana', 'john', 'John']; // reset array original state 
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));

console.log(names.sort((a, b) => a.localeCompare(b)));

const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

// Searching
console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

// ECMAScript 2015 - the find and findIndex methods
function multipleOf13(element, index, array) {
    return (element % 13 == 0);
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

// ECMAScript 2016 - using the includes method
console.log(numbers.includes(15));
console.log(numbers.includes(20));

numbers2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers2.includes(4, 5));

// Outputting the array into a string
console.log(numbers.toString());
const numbersString = numbers.join('-');
console.log(numbersString);

// The TypedArray class
let length = 5;
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for (let i = 0; i < length; i++) {
    int16[i] = i + 1;
}
console.log(int16); 