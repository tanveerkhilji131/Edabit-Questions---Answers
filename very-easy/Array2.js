// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1JIT compilation

function search(arr,index){
    return arr.indexOf(index)
}
// -------------------------------------------------------------------Q1//
/*
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24
*/

function sumArray(arr){
    let sum = 0;
   for (const value of arr) {
    sum+=value
   };
   return sum;
}

// ------------------------------------------------------------------------Q2//

/*
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false
*/

function check(arr, el) {
	return arr.includes(el);
}

// --------------------------------------------------------------------------Q3//

/*
Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

Examples
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

*/
function arrBetween(num1, num2, arr) {
   let filterData = arr.filter(v=> v > num1 && v < num2)
   return filterData
}

// ------------------------------------------------------------------------------------------------------------------Q4//
 
/*
The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

Examples
fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
*/
function fiftyThirtyTwenty(ati){
    let finalresult = {"Needs": null, "Wants": null, "Savings": null};
    let Fifty = ati * 50 /100;
    let Thirty = ati * 30 /100;
    let Twenty = ati * 20 /100;

    finalresult.Needs = Fifty
    finalresult.Wants = Thirty
    finalresult.Savings = Twenty
    return finalresult
}

// --------------------------------------------------------------------------------Q5//
/*
Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

Examples
hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) ➞ true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) ➞ false

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
) ➞ false
*/
function hasSameBread(arr1, arr2) {
	return arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length-1]
}

// --------------------------------------------------------------------------------Q6//

/*
Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

Examples
parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

parseArray([]) ➞ []
*/
function parseArray(arr){
    arr = String(arr)
 return arr.split(",")
}

// --------------------------------------------------------------------------------Q7//

/*
Create a function that takes an array and returns the types of values (data types) in a new array.

Examples
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]
*/

function arrayValuesTypes(arr) {
    let result = []
	for (let i = 0; i < arr.length; i++) {
        result.push(typeof arr[i])
        
    }
    return result;
}

// --------------------------------------------------------------------------------Q8//

/*
There is an easy way to assign to array values to the nth index by using rest parameter syntax.

var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2
But how could I make tail = [2, 3, 4] instead of tail = 2?
*/

[head,...tail] = [1,2,3,4];
// console.log(tail); // [2,3,4]

// --------------------------------------------------------------------------------Q9//

/*
Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

Examples
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true
*/
function checkSquareAndCube(arr) {
  let squareRoot = Math.sqrt(arr[0]); // pehla number ka square root
  let cubeRoot = Math.cbrt(arr[1]);   // doosra number ka cube root
  return squareRoot === cubeRoot;
}



// --------------------------------------------------------------------------------Q10//




