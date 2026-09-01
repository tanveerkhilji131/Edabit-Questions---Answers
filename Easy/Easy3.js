// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40


function maxTotal(nums) {
    //1
	let order = nums.sort((a,b)=>{return b-a})
    let total = 0
    for (let i = 0; i <= 4; i++) {
       total += order[i]
        
    }
    // return total
    //2
//  let total = 0;
    for (let i = 0; i < 5; i++) {
        let max = -Infinity
        let maxindex = 0
        for (let j= 0; j< nums.length; j++){
            if(nums[j] > max){
                max = nums[j]
                maxindex = j
            }      
        }
        nums[maxindex] = -Infinity
         total +=max
        
    }
    return total

   
}
//  quastion 1  complete

// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

// Examples
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false

function isOmnipresent(arr, val) {
//1
	for (let i = 0; i < arr.length; i++) {
     // return   !!arr[i].includes(val) ? true : false   
    }
    // 2
   return arr.reduce((a,b)=>{
   return  a && b.includes(val)
      
   },true)

}

//  quastion 2  complete

// Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.
// Examples
// toArray(235) ➞ [2, 3, 5]

// toArray(0) ➞ [0]

// toNumber([2, 3, 5]) ➞ 235

// toNumber([0]) ➞ 0
// Notes
// All test cases will be weakly positive numbers: >= 0

function toArray(num) {
    //1
	// return String(num).split("").map(a=> +a)
    //2
        let clone = String(num)
        let res = []
    for (let i = 0; i <  clone.length; i++) {
      res.push(+clone[i])
        
    }
    return res
     
}

function toNumber(arr) {
    //1
	// return  +arr.join("")
    //2
    let number = ""
    for (let i = 0; i < arr.length; i++) {
        number += arr[i]
        
    }
    return +number
}

//  quastion 3  complete

// Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3) ➞ 24
// // The parameter n is specified as 3.
// // The first 3 numbers in the list are 9, 8 and 7.
// // The sum of these 3 numbers is 24 (9 + 8 + 7).
// // Return the answer.
// Examples
// sliceSum([1, 3, 2], 2) ➞ 4

// sliceSum([4, 2, 5, 7], 4) ➞ 18

// sliceSum([3, 6, 2], 0) ➞ 0

function sliceSum(arr, n) {
    //1
	let sum = arr.slice(0,n);
//  return sum.reduce((a,b)=>{return a+=b},0)
    //2
 let sum = 0
    for (let i = 0; i < n; i++) {
        sum+= arr[i]
        
    }
    return sum
 
}

//  quastion 4  complete

// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples
// countOnes([
//   [1, 0],
//   [0, 0]
// ]) ➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) ➞ 2

function countOnes(matrix) {
    let totalofone = 0 ;
	for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix.length; j++) {
           if(matrix[i][j] === 1 ){
            totalofone += 1
           }       
       }     
    }
    return totalofone

}

//  quastion 5  complete

// Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// Examples
// isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true

// isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true

// isSubset([1, 2], [3, 5, 9, 1]) ➞ false

function isSubset(arr1, arr2) {
    let res = null
	for (let i = 0; i < arr1.length; i++) {
       res = arr2.includes(arr1[i])  ? true : false
        
    }
    return res
}


//  quastion 6  complete

// Chat Room Status
// Given the names of the online users, return a chat-room status message. Return "no one online" for no users, "user1 online" for one, and "user1 and user2 online" for two. For more than two, return "user1, user2 and n more online", where n is the number of remaining users. Preserve the users’ order.

// Examples
// chatroomStatus([]) ➞ "no one online"

// chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

// chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

// chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
// ➞ "pap_ier44, townieBOY and 4 more online"

function chatroomStatus(users) {
    if(users.length == 0) return "no one online"
    if(users.length == 1) return `${users[0]} online`
    if(users.length == 2) return `${users[0]} and ${users[1]} online`
 return `${users[0]}, ${users[1]} and ${users.length - 2} more online`
   
}

console.log(
chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
)
//  quastion 7  complete

// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples
// spelling("bee") ➞ ["b", "be", "bee"]

// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

function spelling(str) {
    //1
	let res = []
    for (let i = 1; i <= str.length; i++) {
      res.push(str.slice(0,i))
        
    }
    // return res
    //2
    let  i = 1
    while (i <= str.length) {
      res.push(str.slice(0,i))
        i++
    }
    return res
}

//  quastion 8  complete

// First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

// Examples
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

// charIndex("happy", "h") ➞ [0, 0]
// // Only one "h" exists, so the first and last index is 0.

// charIndex("happy", "e") ➞ undefined
// // "e" does not exist in "happy", so we return undefined.

function charIndex(word, char) {
  first =  word.indexOf(char)
  last =   word.lastIndexOf(char)
return [first,last]
}

//  quastion 9  complete
// Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.
// Examples
// mauriceWins([3, 5, 10], [4, 7, 11]) ➞ true
// // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

// mauriceWins([6, 8, 9], [7, 12, 14]) ➞ false
// // Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

// mauriceWins([1, 8, 20], [2, 9, 100]) ➞ true
// mSnails[0] > sSnails[2]
// mSnails[1] > sSnails[0]
// mSnails[2] > sSnails[1]

function mauriceWins(mSnails, sSnails) {
    return  ( mSnails[0] > sSnails[2] &&  mSnails[1] > sSnails[0]) || ( mSnails[0] > sSnails[2] &&  mSnails[2] > sSnails[1]) || ( mSnails[1] > sSnails[0] &&  mSnails[2] > sSnails[1] ) ? true : false
}

//  quastion 10  complete



