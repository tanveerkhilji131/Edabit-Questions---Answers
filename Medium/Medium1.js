
// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
function countTrue(arr) {
    //1
	let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //    arr[i] ? count +=1 : null
        
    // }
    // return count
    //2
    // return arr.reduce((count,vlaue)=>{
    //      return  vlaue ? count+1 : count
        
    // },0)
    //3
        return arr.filter(a=>{
            return a
        }).length;
    
}

// quastion 1 complete

// Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.


function compact(arr) {
    // my own version
    let res = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]) res.push(arr[i])   
    // }
    // return res
	// return arr.filter(a=> a)
    return arr.reduce((a,b)=>{ 
   return  b ? [...a,b] : a
    },[])
}

// quastion 2 complete

// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj) {
  if (!Object.keys(obj).length){ return []}
    let keys = Object.keys(obj)
	let value = Object.values(obj)
    return [[keys[0],value[0]],[keys[1],value[1]]]
}

// quastion 3 complete


// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

function concat(...args) {
	// return args.flat(Infinity)
    //2
    let res= []
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        res.push(args[i][j])
      }
    }
    // return res
    //3
    // let res2 = []
    // for (const valueouter of args) {
    //     for (const valueInner of valueouter) {
    //         res2.push(valueInner)
    //     }
    // }
    // return res2
}

// quastion 4 complete

// Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

function changeEnough(change, amountDue) {
	let quarter = change[0] * 0.25;
	let dime = change[1] * 0.10;
	let nickel = change[2] * 0.05;
	let penny = change[3] * 0.01;
   let  total = quarter + dime + nickel + penny
    return total >= amountDue ? true : false



}

console.log(
    // changeEnough([2, 100, 0, 0], 14.11) 
    // changeEnough([0, 0, 20, 5], 0.75)
    changeEnough([10, 0, 0, 50], 3.85)
)
// quastion 5 complete

// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

function arrayOfMultiples (num, length) {
    let res = []
	for (let i = 1; i <= length; i++) {  
        res.push( num * i)        
    }
    // return res
  
}

// quastion 6 complete

// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A

function objectToArray(obj) {
	let Objkey = Object.keys(obj)
	let Objvalue = Object.values(obj)
    return [[Objkey[0],Objvalue[0]],[Objkey[1],Objvalue[1]],[Objkey[2],Objvalue[2]] ]
}


// quastion 7 complete

// Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

function sortIt(arr) {
	let falted = arr.flat(-Infinity)
    return falted.sort((a,b)=>{return a-b})
}


console.log(
    // sortIt([4, 1, 3])
    // sortIt([[4], [1], [3]])
    sortIt([4, [1], 3])
)

// quastion 8 complete

// Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
// flatten([[1, 2], [3, 4]]) ➞ []
// // Expected: [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]]) ➞ []
// // Expected: ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]]) ➞ []
// // Expected: [true, false, false, false]

// Fix this incorrect code so that all tests pass!

function flatten(arr) {
//   return arr.flat()
let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
            arr2.push(arr[i][j])        
    }
    
  }
  return arr2
}


// quastion 9 complete

// Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23
// Notes
// There will be at least two numbers in the array.

function secondLargest(arr) {
	let sortarr = arr.sort((a,b)=>{return b-a})
    return sortarr[1]
}

// quastion 10 complete
