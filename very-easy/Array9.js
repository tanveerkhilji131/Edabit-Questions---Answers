// // Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
// findLargestNum([4, 5, 1, 3]) ➞ 5

// findLargestNum([300, 200, 600, 150]) ➞ 600

// findLargestNum([1000, 1001, 857, 1]) ➞ 1001
// Notes
// Expect either a positive number or zero (there are no negative numbers).

function findLargestNum(arr) {
    // let higestnum = arr[0]
	// for (let i = 0; i < arr.length; i++) {
    //     if(higestnum < arr[i]){
    //         higestnum = arr[i]
    //     }
        
    // }
    // return higestnum

    // second method 
   return arr.reduce((higestnum,arr)=>{
        return higestnum < arr ? higestnum = arr : higestnum
    },arr[0])
}
// -------------------------------------------- quastion 1 complete
/*
Typing Game
You're in the midst of creating a typing game.

Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

Inputs:
User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

Output: [1, 1, -1, -1, 1]
Examples
correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
) ➞ [1, 1, -1]

correctStream(
  ["april", "showrs", "bring", "may", "flowers"],
  ["april", "showers", "bring", "may", "flowers"]
) ➞ [1, -1, 1, 1, 1]
Notes
The input array lengths will always be the same.
*/

function correctStream(user, correct) {
    // let res = []
    // for (let i = 0; i < user.length; i++) {
    //     if(user[i] !== correct[i]){
    //         res.push(-1)
    //     }else{
    //         res.push(1)
    //     }
        
    // }
    // return res

    // using method Map method
    return user.map((v,i)=>{
        return v !== correct[i] ? -1 : 1
    })
}

// -------------------------------------------- quastion 2 complete
/*
Next Element in Arithmetic Sequence
Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

Examples
nextElement([3, 5, 7, 9]) ➞ 11

nextElement([-5, -6, -7]) ➞ -8

nextElement([2, 2, 2, 2, 2]) ➞ 2
Notes
All input arrays will contain integers only.
*/
function nextElement(arr) { 
	let diff = arr[arr.length-1] - arr[arr.length-2]
    return arr[arr.length-1] + diff
   
    
}
// -------------------------------------------- quastion 3 complete
/*
Capture the Rook
Write a function that returns true if two rooks can attack each other, and false otherwise.

Examples
canCapture(["A8", "E8"]) ➞ true

canCapture(["A1", "B2"]) ➞ false

canCapture(["H4", "H3"]) ➞ true

canCapture(["F5", "C8"]) ➞ false

*/
function canCapture([yourRook, opponentsRook]) {
	return yourRook[0] == opponentsRook[0] ? true : yourRook[1] == opponentsRook[1] ? true : false
}
// -------------------------------------------- quastion 4 complete
/*
Fix the Error / Comparing Arrays (Part #2)
Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.

To solve this question, your friend initially wrote the following code (see this challenge):

function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}
If you're unsure why the above code doesn't work, I recommend doing that challenge first.

Your friend did some more research and he fixed the code into the following:

function checkEquals(arr1, arr2) {
  if (arr1.join("") === arr2.join("")) {
    return true
   } else {
    return false
   }
}
It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

Examples
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([1, 12], [11, 2]) ➞ false
*/
function checkEquals(arr1, arr2) {
    let res = []
	for (let i = 0; i < arr1.length; i++) {
       res.push (arr1[i] == arr2[i])
        
    }
    return !!(res.includes(false)) ? false : true
}

// -------------------------------------------- quastion 5 complete
/*
Word Endings
Create a function that adds a string ending to each member in an array.

Examples
addEnding(["clever", "meek", "hurried", "nice"], "ly")
➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")
➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")
➞ ["bending", "sharpening", "meaning"]
Notes
Don't forget to return the result.
*/
function addEnding(arr, ending) {

	return arr.map(a=>{
        return a + ending
    })

    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + ending)    
    }
    return res

    return arr.reduce((a,b)=>{
        a.push(b+ending)
        return a
    },[])
}
// -------------------------------------------- quastion 6 complete
/*
Array of Consecutive Numbers
Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

Examples
getSequence(1, 5) ➞ [1, 2, 3, 4, 5]

getSequence(98, 100) ➞ [98, 99, 100]

getSequence(1000, 1000) ➞ [1000]

*/

function getSequence(low, high) {
    let res = []
	for (let i = low; i <= high; i++) {    
        res.push(i)
    }
    return res
}

// -------------------------------------------- quastion 7 complete
/*
Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.

Negating a positive value -+n will return -n, because all +'s are removed.
Negating a negative value --n will return n, because the first - turns the second minus into a +.
Examples
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

negate([]) ➞ []
*/
function negate(arr) {
	return arr.map(v => -v)
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(-arr[i])        
    }
    return res
}

// -------------------------------------------- quastion 8 complete
/*
Return the Four Letter Strings
Create a function that takes an array of strings and returns the words that are exactly four letters.

Examples
isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

*/
function isFourLetters(arr) {
	return arr.filter(a=>{
        return a.length == 4
    })
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length == 4){
            res.push(arr[i])
        }
        
    }
    return res
}
// -------------------------------------------- quastion 9 complete
/*
Maximum Difference

JavaScript
Given an array of integers, return the difference between the largest and smallest integers in the array.

Examples
difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// 15 - (-9) = 24

difference([4, 17, 12, 2, 10, 2]) ➞ 15
Notes
N/A
*/
function difference(arr){
    let hightolow = arr.sort((a,b)=>{return b-a})
    return hightolow[0] - hightolow[hightolow.length-1]

    let max = arr[0]
    let min =  arr.filter(a=>{
        return a < max ? max = a : null
    })
    let maxim = arr.filter(a=>{
        return a > max ? max = a : null
    })
   return maxim[maxim.length-1] - min

   
        let arrmax= arr.reduce((current,value)=>{
          return value > max ? max = value : current
        },[])
        let arrmin = arr.reduce ((current,value)=>{
            return value < max ? max = value : current
        },[])
        return arrmax - arrmin
}
console.log(
    difference([10, 15, 20, 2, 10, 6])
)
// -------------------------------------------- quastion 10 complete
