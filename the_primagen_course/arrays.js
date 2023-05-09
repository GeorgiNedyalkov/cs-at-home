// Array methods
// concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 7];

const arr3 = arr1.concat(arr2);

console.log(arr3);

// every
/*
The every() method is an iterative method. 
It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. 
If such an element is found, every() immediately returns false and stops iterating through the array.
Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.
*/
const isBellowTen = (currentValue) => currentValue < 10;

console.log(arr1.every((n) => isBellowTen(n)));

// filter
// filter method creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the
// provided callback function

const phonePrices = [100, 200, 300, 500, 2000];

const cheapPhones = phonePrices.filter((price) => price < 300);

console.log(cheapPhones);

// searching in array with filter

const fruits = ["apples", "orange", "banana", "strawberries"];

function filterFruits(arr, fruit) {
  return arr.filter((f) => f.toLowerCase().includes(fruit.toLowerCase()));
}

const apples = filterFruits(fruits, "apple");

console.log(apples);

// flat
// returns a new array will all sub array elements into recursively specified depth.

const arrWithArr = [1, 2, 3, [4, 5, 6]];
const flatenedArr = arrWithArr.flat();

console.log(flatenedArr);

// forEach
// the forEach method executes a provided function for each one array elemetn

const numbersArr = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbersArr.forEach((n) => console.log(n * 2));

console.log(doubledNumbers);

// indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ["ant", "bison", "camel", "bison"];

console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bat"));

// lastIndexOf
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

console.log(beasts.lastIndexOf("bison"));

// map
// map method creates a new array populated with the data from the result of calling the callback function provided for each element of the array.

const singleNumbersArr = [1, 2, 3, 4, 5, 6];
const doubleNumberArr = singleNumbersArr.map((n) => n * 2);
console.log(doubleNumberArr);

// reduce
// the reduce method runs a reducer function on each element of the array in order, passing the return value from the calculation of the preceding element.
// It returns a single value.

const initialValue = 0;

const sumAllNumbers = singleNumbersArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(singleNumbersArr);
console.log(sumAllNumbers);

// reverse
// The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const reversedArr = doubleNumberArr.reverse();
console.log(reversedArr);

// slice
// returns a shallow copy of a portion of an array into a new array object selected from start to end
// where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "duck", "elephant", "camel"];

console.log(animals.slice(2));
console.log(animals.slice(1, 3));
console.log(animals.slice(2, 3));
console.log(animals.slice(3));

// some
// tests whether at least on element in the array passes the test implemented by the provided function.

console.log(animals.some((a) => a === "Bison".toLowerCase()));

// sort
// sorts the array and returns the reference to the same array now sorted.

// splice
// The splice method changes the contents of an array by removing or replacing the existing elements
// and/ or adding new elements in place.

const months = ["Jan", "Feb", "March", "April", "May", "June", "July"];

months.splice(months.length, 0, "August");
