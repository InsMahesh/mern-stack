// Example Usage for Question 1
const words = ["apple", "banana", "cherry"];
console.log(capitalizeStrings(words)); // Output: ["Apple", "Banana", "Cherry"]

// Question 1: Capitalize each string in an array
function capitalizeStrings(arr) {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

// Example Usage for Question 2
const arr = [3, 1, 4, 2, 5];
console.log(secondLargest(arr)); // Output: 4

// Question 2: Find the second largest element in an array
function secondLargest(arr) {
  if (arr.length < 2) {
    return null; // Not enough elements
  }
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

// Example Usage for Question 3
const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}];
const key = "name";
console.log(getValuesByKey(objects, key)); // Output: ["John", "Jane", "Jim"]

// Question 3: Get values by key from an array of objects
function getValuesByKey(objects, key) {
  return objects.map(obj => obj[key]);
}

// Example Usage for Question 4
const numbers = [1, 2, 3, 4];
console.log(factorialArray(numbers)); // Output: [1, 2, 6, 24]

// Question 4: Calculate the factorial of each element in an array
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function factorialArray(arr) {
  return arr.map(num => factorial(num));
}

// Example Usage for Question 5
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2)); // Output: [3, 4]

// Question 5: Find the intersection of two arrays
function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}