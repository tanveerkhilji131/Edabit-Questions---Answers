// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// function toNumberArray(arr){
//     let res = []
//    for (let value of arr) {
//     res.push(Number(value))
//    }
//    return res
// }

// -------------------------------------------- qusation 1 complete

// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4

function totalAmountAdjectives(obj){
 return Object.keys(obj).length
}


// -------------------------------------------- qusation 2 complete
// ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"]
var [ , , lips] = arr;

// -------------------------------------------- qusation 3 complete

// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
function length(s) {
    let res = 0;
	for (let i = 0; i <= s.length; i++) {
       res = i + 0
        
    }
    return res
}

// -------------------------------------------- qusation 4 complete
//Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
function halfQuarterEighth(n) {
	let half1 = n / 2
    let half2 = half1 / 2
    let half3 = half2 / 2
    return [half1,half2,half3];
}

// -------------------------------------------- qusation 5 complete
// Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"
function nSidedShape(n) {
	switch(n){
        case 1:{
            return  "circle"
            break;
        }
        case 2:{
            return  "semi-circle"
            break;
        }
        case 3:{
            return  "triangle"
            break;
        }
        case 4:{
            return  "square"
            break;
        }
        case 5:{
            return  "pentagon"
            break;
        }
        case 6:{
            return  "hexagon"
            break;
        }
        case 7:{
            return  "heptagon"
            break;
        }
        case 8:{
            return  "octagon"
            break;
        }
        case 9:{
            return "nonagon"
            break;
        }
        case 10:{
            return  "decagon"
            break;
        }
        default :{
            return  "plese enter value number"
        }
    }
}


// -------------------------------------------- qusation 6 complete

// Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

function getMultipliedArr(arr) {
	return [arr[0]*2, arr[1]*2,arr[2]*2]
}

// -------------------------------------------- qusation 7 complete

// Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

function wordLengths(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].length)
        
    }
    return res
}


// -------------------------------------------- qusation 8 complete

// First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// 1.In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// 2.In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
//3.In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.

// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples
// determineLever(["e", "f", "l"]) ➞ "first class lever"

// determineLever(["e", "l", "f"]) ➞ "second class lever"

// determineLever(["f", "e", "l"]) ➞ "third class lever"
function determineLever(arr) {
    return arr[0] == "e" && arr[1] == "f" && arr[2] == "l" ? "first class lever" : arr[0] == "e" && arr[1] == "l" && arr[2] == "f" ? "second class lever" : arr[0] == "f" && arr[1] == "e" && arr[2] == "l" ? "third class lever" : "plase enter valid determineLever"
	
}

// -------------------------------------------- qusation 9 complete
// Difference of Volumes of Cuboids
/*
Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Examples
findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
*/
function findDifference(a, b) {
	let volumeA = a[0]*a[1]*a[2]
    let volumeB = b[0]*b[1]*b[2]
    return volumeB - volumeA
}


// -------------------------------------------- qusation 10 complete
