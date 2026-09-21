
// Diamond Shaped Array
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// Examples
// diamondArrays(1) ➞ [[1]]

// diamondArrays(2) ➞ [[1], [2, 2], [1]]

// diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

function diamondArrays(x) {
    let res = []
	for (let i = 1; i <= x; i++) {
        let count = 0;
        let temparr = []
       for (let j = 0; j < i; j++) {
      
        temparr.push(i)
       
           }
   

        res.push(temparr)
    }
    return res
}

// question 1 complete

// Dance for Cash
// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Examples
// danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

// danceConvert("32a1") ➞ "Invalid input."

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
	switch(pin){
        case "0000":
            return MOVES.slice(0,4)
               case "3856":
                  return MOVES.slice(3)
                     case "9999":
                          return [MOVES.slice(-1) ].concat(MOVES.slice(0,3)).flat(Infinity)
                          default : 
                          return  "Invalid input."
    }
    
}


// question 2 complete

// Learn Lodash (3): _.differenceWith, Find the Difference in Arrays Using a Comparison Function
// According to the lodash documentation, This method is like _.difference except it accepts a comparator which is invoked to compare elements of the array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Using a car dealership example, if you have two parking lots and want to see which cars are different this function enables you to check each car in one lot against each car in the other using a comparison function which checks two values and returns true or false if they are equal or not. So you could check engine size and compare to see which cars are different according to the size of their engines. If lot one has a car that has a v6 engine and lot two doesn't have any cars that have v6 engines this would be the difference and the function would return the car with the v6 engine.

// There is only one first array that is used to look for the difference but there can be many values arrays that are used to check against.

// Examples
// differenceWith([
//   { make: "mazda", engine: "v8" },   // This is the first array we compare with.
//   { make: "toyota",  engine: "v6" },
// ],
//   [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
//   (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
// ) ➞ [
//   { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
// ]

function differenceWith(array, ...values) {
   let res = []
    for (let i = 0; i < array.length; i++) {
        let check = false;
       for (let j = 0; j < values[0].length; j++) {
         if(values[1](array[i],values[0][j])){
            check = true
         }
        
       }   
       if(!check){
        res.push(array[i])
       }
    }
  return res
}


console.log(
differenceWith([
  { make: "mazda", engine: "v8" },   // This is the first array we compare with.
  { make: "toyota",  engine: "v6" },
],
  [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
  (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
)
)

// question 3 complete

// Who Left the Array?
// You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.

// Examples
// missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2

// missing([true, true, false, false, true], [false, true, false, true]) ➞ true

// missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"

function missing(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
          if(!arr2.includes(arr1[i])){
            return arr1[i]
          }
        
    }
    
}

// question 4 complete
// All About Strings
// Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
// Examples
// allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

function allAboutStrings(str) {
   
	let arr = [str.length,str[0],str.at(-1)]
    let len = 0
    let point5 = ""
   for (let i = 0; i < str.length; i++) {
    len += str[i].length
    console.log(str[i])
    if(str[1] == str[i] && i !== 1){
        point5 = `@ index ${i}`
    }else if(i === str.length-1 && point5 == ""){
         point5 = `NOt Found`
    }
   }
    if(len % 2 == 0){
    arr.push(str[len / 2-1]+str[len / 2])
    }else{
    arr.push(str[Math.floor(len / 2)])

    }
    
     arr.push(point5)
     return arr
}


 // question 5 complete
// Moving Partition
// Create a function to partition an array from left to right.

// Examples
// movingPartition([-1, -1, -1, -1])
// ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// movingPartition([1, 2, 3, 4, 5])
// ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// movingPartition([]) ➞ []
// Notes
// With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// An empty array should return an empty array: []

function movingPartition(arr) {
    let res = []
	for (let i = 1; i < arr.length; i++) {  
         res.push([arr.slice(0,i),arr.slice(i)])
    }
    return res
}

// question 6 complete
// Return Duplicate Numbers
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// Examples
// duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

// duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

// duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null

function duplicateNums(nums) {
	let res = []
    for (let i = 0; i < nums.length; i++) {
        let check = false;
       for (let j = 0; j < nums.length; j++) {
       if(i == j){
        continue
       }
       if(nums[i] === nums[j]){
        check = true
       }
        
       }
        if(check){
           if(!res.includes(nums[i])){
            res.push(nums[i])
           }
        }
    }
    return res
}

// question 7 complete

// Word to Bitstring to Boolean Array
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.
// Examples
// toBoolArray("deep") ➞ [false, true, true, false]
// // deep converts to 0110
// // d is the 4th alphabet - 0
// // e is the 5th alphabet - 1
// // e is the 5th alphabet - 1
// // p is the 16th alphabet - 0

// toBoolArray("loves") ➞ [false, true, false, true, true]

// toBoolArray("tesh") ➞ [false, true, true, false]
// Notes
// The letter A is at position 1 and Z at 26.
// All input strings are in lowercase letters of the English alphabet.

function toBoolArray(word) {
	// return word[0].charCodeAt(0) -97
    let res = []
    for (let i = 0; i < word.length; i++) {
       let index = word[i].charCodeAt(0) - 97
       if(index % 2 == 0){
        res.push(true)
       }else{
        res.push(false)
       }
        
    }
    // return res
   return [...word].map((a,i)=>{
    return ((a.charCodeAt(0) - 96) % 2 == 0) ? false : true
   })
}

// question 8 complete

// Burglary Series (16): Nested objects
// Receive an object containing one entry per round. Each round has me and spouse scores. Add each person's scores across all provided rounds. Return:

// "ME!" if your total is higher.
// "SPOUSE!" if your spouse's total is higher.
// "DRAW!" if the totals are equal.
// Examples
// determineWhoCursedTheMost({
//   round1: {
//     me: 10,
//     spouse: 5,
//   },
//   round2: {
//     me: 5,
//     spouse: 10,
//   },
//   round3: {
//     me: 10,
//     spouse: 10,
//   },
// }) ➞ "DRAW!"


// determineWhoCursedTheMost({
//   round1: {
//     me: 40,
//     spouse: 5,
//   },
//   round2: {
//     me: 9,
//     spouse: 10,
//   },
//   round3: {
//     me: 9,
//     spouse: 10,
//   },
// }) ➞ "ME!"


// determineWhoCursedTheMost({
//   round1: {
//     me: 10,
//     spouse: 5,
//   },
//   round2: {
//     me: 9,
//     spouse: 44,
//   },
//   round3: {
//     me: 10,
//     spouse: 55,
//   },
// }) ➞ "SPOUSE!"

function determineWhoCursedTheMost(obj) {
    let myscortotal = 0
    let spousetotal = 0
    for (const vlaue in obj) {
        myscortotal +=obj[vlaue].me
        spousetotal +=obj[vlaue].spouse
        
    }
    return myscortotal == spousetotal ? "DRAW!" : 
    myscortotal > spousetotal ? "ME!" : "SPOUSE!"
}
// question 9 complete

// Algorithms III: Binary Search
// Use the supplied inclusive left and right indexes to report whether elem occurs in the sorted array.

// Example
// binarySearch([1,2,3,4,5,6,7,8,9,10], 0, 9, 7) ➞ true

function binarySearch (...args) {
    console.log(args[2])
  for (let i = args[1]; i < args[2]; i++) {
     if(args[0][i] === args[2]){return true}
  }

}


// question 10 complete
