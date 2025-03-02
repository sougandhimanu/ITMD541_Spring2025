// Sougandhi Manonmani Pendiyala
// A20549991

// ITMD 541-01 Graduate Student

// ====================================
// Exercise 1: minMaxAverage

// "Total Numbers: xx, Min Value: xx, Max Value: xx, Average: xx"
// ====================================

function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);    
    let sum = 0;

    for (let i = 0; i < total; i++) {
    sum += numbers[i];
    }

    let avg = sum / total;
    // Format average to two decimals
    return `Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`;
}

// Test cases for Exercise 1:
console.log("Exercise 1:");
console.log(minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]));  
console.log(minMaxAverage([8, 15, 27, 1, 2, 2, 5, 6, 13]));  
console.log(minMaxAverage([7, 8, 2, 4, 15]));

// ====================================
// Exercise 2: countVowels

// Word: "x" vowels
// ====================================
function countVowels(str) {
    // Regular expression to match vowels (both uppercase and lowercase)
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Test cases for Exercise 2:
console.log("\nExercise 2:");
console.log(`Winter: ${countVowels("Winter")} vowels`);
console.log(`Sougandhi: ${countVowels("Sougandhi")} vowels`);
console.log(`Javascript: ${countVowels("Javascript")} vowels`);


// ====================================
// Exercise 3: sortNumbers
//
// Original Array: [x4, x1, x2, x3]  Sorted Array: [x1, x2, x3, x4]
// ====================================
function sortNumbers(arr) {
    // Create a copy of the array to avoid modifying the original
    let arr2 = [...arr];
    return arr2.sort((a, b) => a - b);
}

// Test cases for Exercise 3:
console.log("\nExercise 3:");
let testArray1 = [9, 4, 6, 2];
console.log(`Original Array: [${testArray1}]  Sorted Array: [${sortNumbers(testArray1)}]`);

let testArray2 = [10, 3, 5, 8, 1];
console.log(`Original Array: [${testArray2}]  Sorted Array: [${sortNumbers(testArray2)}]`);

let testArray3 = [20, 10, 30, 5, 15];
console.log(`Original Array: [${testArray3}]  Sorted Array: [${sortNumbers(testArray3)}]`);

// ====================================
// Exercise 4: celsiusToFahrenheit
// 
// x Celsius = x Fahrenheit
// ====================================
function celsiusToFahrenheit(temp) {
    // Convert to number if a string is passed
    let celsius = typeof temp === "string" ? parseFloat(temp) : temp;
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`;
}

// Test cases for Exercise 4:
console.log("\nExercise 4:");
// Numeric inputs
console.log(celsiusToFahrenheit(37.5));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-10));
// Additional tests with string inputs (graduate requirement)
console.log(celsiusToFahrenheit("24.5"));
console.log(celsiusToFahrenheit("100"));

// ====================================
// Exercise 5: sortPeople
// 
// "name is age and from city"
// ====================================
function sortPeople(peopleArray) {
    // Sort the array by age ascending
    let sortedPeople = [...peopleArray].sort((a, b) => a.age - b.age);
    // Map sorted objects to introduction strings
    return sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
}

// Test cases for Exercise 5:
console.log("\nExercise 5:");
// Test Array 1
let peopleTest1 = [
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 22, city: "Los Angeles"},
    {name: "Charlie", age: 30, city: "Chicago"},
    {name: "Diana", age: 20, city: "Houston"},
    {name: "Ethan", age: 28, city: "Phoenix"}
];
console.log("Test Array 1 Introductions:");
console.log(sortPeople(peopleTest1));

// Test Array 2
let peopleTest2 = [
    {name: "Fiona", age: 32, city: "Miami"},
    {name: "George", age: 27, city: "Seattle"},
    {name: "Hannah", age: 19, city: "Boston"},
    {name: "Ian", age: 24, city: "Denver"},
    {name: "Jack", age: 29, city: "San Francisco"}
];
console.log("Test Array 2 Introductions:");
console.log(sortPeople(peopleTest2));

// Test Array 3
let peopleTest3 = [
    {name: "Michael", age: 40, city: "Concord"},
    {name: "Dwight Schrute", age: 35, city: "Seattle"},
    {name: "Jim Harpert", age: 26, city: "Newton"},
    {name: "Pam Beesly", age: 24, city: "Fort Wayne"},
    {name: "Ryan Howard", age: 26, city: "Newton"}
];
console.log("Test Array 3 Introductions:");
console.log(sortPeople(peopleTest3));