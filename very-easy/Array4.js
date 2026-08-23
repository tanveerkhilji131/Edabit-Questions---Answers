/*
Spaces Between Each Character
Create a function that takes a string and returns a string with spaces in between all of the characters.

Examples
spaceMeOut("space") ➞ "s p a c e"

spaceMeOut("far out") ➞ "f a r   o u t"

spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
*/
function spaceMeOut(s){
    return Array.from(s).join(" ")
}
// -------------------------------------------- qusation 1 complete


/*
ES6: Destructuring Arrays II
You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

let trans1 = arr[0]
let trans2 = arr[1]
let trans3 = arr[2][0]
let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
*/
// i solve this qustion secodne way using desturturing Array
const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
const [
  trans1,
  trans2,
  [trans3InsideOne,[trans3InsideTwo]]
] = arr

// -------------------------------------------- qusation 2 complete
/*
Even or Odd?
Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).

Examples
evenOrOdd([0]) ➞ "even"

evenOrOdd([1]) ➞ "odd"

evenOrOdd([]) ➞ "even"

evenOrOdd([0, 1, 5]) ➞ "even"
*/
function evenOrOdd(arr){
   let sum = 0;      
    if(arr.length == 0 && arr === undefined){
                    arr = [0]
      } 

         for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
    }
   

   return sum /2 == 0 ? "even" : "odd"
    
    }


// -------------------------------------------- qusation 3 complete

/*
Get the Sum of All Array Elements
Create a function that takes an array and returns the sum of all numbers in the array.

Examples
getSumOfItems([2, 7, 4]) ➞ 13

getSumOfItems([45, 3, 0]) ➞ 48

getSumOfItems([-2, 84, 23]) ➞ 105

*/

function getSumOfItems(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
        
    }
    return sum
}

// -------------------------------------------- qusation 4 complete

/*
Rotate the Array by One 🔄
Given an array, rotate the values clockwise by one (the last value is sent to the first position).

Check the examples for a better understanding.

Examples
rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]
*/
function rotateByOne(arr){
    let res = []
    for (let i = 0; i < arr.length-1; i++) {
      res.push( arr[i]) 
        
        
    }
    let a = [arr[arr.length-1],res];
    return a.flat()
}

// -------------------------------------------- qusation 5 complete

/*
Invert an Array
Create a function that takes an array of numbers arr and returns an inverted array.

Examples
invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

invertArray([]) ➞ []
*/

function invertArray(arr){
  return arr.map(value => -value)
}



// -------------------------------------------- qusation 6 complete

/*
Get the File Name
Create a function that returns the selected filename from a path. Include the extension in your answer.

Examples
getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

getFilename("ffprobe.exe") ➞ "ffprobe.exe"
*/
function getFilename(path) {
    let arr = path.split("/")
	return arr[arr.length-1]
}

// -------------------------------------------- qusation 7 complete

/*
Array From a Range of Numbers
Create a function that returns an array of all the integers between two given numbers start and end.

Examples
rangeOfNum(2, 4) ➞ [3]

rangeOfNum(5, 9) ➞ [6, 7, 8]

rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

*/
function rangeOfNum(start, end) {
    let res = []
	for (let i = start+1; i <= end-1; i++) {
       res.push(i)
        
        
    }
    return res
}

// -------------------------------------------- qusation 8 complete
/*
Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

cola
fanta
Examples
skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

*/
function skipTooMuchSugarDrinks(drinks) {
    let res = []
	for (let i = 0; i < drinks.length; i++) {
     if(drinks[i] == "water" || drinks[i] == "beer" || drinks[i] == "lemonade"){
        res.push(drinks[i])
     }
        
    }
    return res
}


// -------------------------------------------- qusation 9 complete

/*
Add the Index
Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

Examples
addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
*/
function addIndexes(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]+i)
        
    }
    return res
}


// -------------------------------------------- qusation 10 complete
