// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []
// first way
function reverse1(array){
  return array.reverse()
}
//  seconde way
function reverse2(array){
  let res = []
 for (let i = array[array.length-1]; i >= 0; i--) {
  res.push(array[i])
 }
 return res
}
// threed way
function reverse3(array){
  if(array.length == 0) return [];
  return [array.pop()].concat(reverse3(array))
}

// ------------------------------------------------------------ 1//

// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]


function makePair(one,two){
  return [one,two]
}
// second way 
function makePair2(one,two){
 return [].concat(one,two)
}

// ------------------------------------------------------------2 //

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]

// drop([1, 2, 3], 2) ➞ [3]

// drop([1, 2, 3], 5) ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]

function drop1(array,val = 1){
  return array.slice(val)
}
function drop2(array,val = 1){
  let res = []
  for (let i = val; i < array.length; i++) {
    res.push(array[i])
  }
  return res
}

// ------------------------------------------------------------3 //

/*
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
*/

function getVoteCount(votes){
  return votes.upvotes - votes.downvotes;
}

// ------------------------------------------------------------4//

/*
Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

Examples
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
*/

function incrementItems(arr){
  let result = [];
  for (const value of arr) {
    result.push(value+ 1)
  }
  return result;
}


// ------------------------------------------------------------5//
/*
You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
*/
const arr = [1, 2, 3, 4, 5, 6]
  let [a , b] = arr;
//   console.log(a);
//   console.log(b);

  
// ------------------------------------------------------------ 6//

/*
Create a function that accepts an array and returns the last item in the array.

Examples
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true
*/
function getLastItem(arr){
  return arr[arr.length-1]
}

// ------------------------------------------------------------ 7//

/*
Create a function that takes an array of numbers or letters and returns a string.

Examples
arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
*/
function arrayToString(arr){
  return arr.toString();
}

// ------------------------------------------------------------ 8//

/*

Create a function to concatenate two integer arrays.

Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

*/

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}




// ------------------------------------------------------------ 9//

/*
Create a function that takes an array and a string as arguments and returns the index of the string.

Examples
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

*/
function findIndex(arr,str){
  for (let i = 0; i < arr.length; i++) {
   if(arr[i].includes(str)){
    return  i
  }
  }
}

// ------------------------------------------------------------ 10//


/*

Given an index and an array, return the value of the array with the given index.

Examples
valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

*/  

function valueAt(arr,i){
  let calculate = Math.floor(i);
  for (let i = 0; i < arr.length; i++) {
    return arr[calculate]    
  }
}
