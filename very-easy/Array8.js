
/*
Convert Number to Corresponding Month Name
Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Number	Month Name
1	January
2	February
3	March
4	April
5	May
6	June
7	July
8	August
9	September
10	October
11	November
12	December
Examples
monthName(3) ➞ "March"

monthName(12) ➞ "December"

monthName(6) ➞ "June"
*/
function monthName(num){
    return num == 1 ? "January" : num == 2 ? "February" : num == 3 ? "March" : num == 4 ? "April" : num == 5 ? "May" : num == 6 ? "June" : num == 7 ? "July" : num == 8 ? "August" : num == 9 ? "September" : num == 10 ? "October" : num == 11 ? "November" : num == 12 ? "December" : "plese enter valid number"
}
// -------------------------------------------- qusation 1 complete
/*
Find the Average of the Letters 📊
Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

A = 1
B = 2
C = 3
D = 4
E = 5
average = total sum of all numbers / number of item in the set
Return the result rounded to two decimal points.

Examples
averageIndex(["a", "b", "c", "i"]) ➞ 3.75

averageIndex(["e", "d", "a", "b", "i", "t"]) ➞ 6.83

averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]) ➞ 12.62
*/
function averageIndex(arr) {
    let sum = 0
	for (let i = 0; i < arr.length; i++) {
        arr[i].toLowerCase()
      let convetinNumber =arr[i].charCodeAt(0) - 96
       sum +=convetinNumber
    }
     return sum / arr.length
}	

// -------------------------------------------- qusation 2 complete
/*
RegEx: Boundary Assertions II
You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

Examples
accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]

accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]

accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
*/
function accepted(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
       if(arr[i][0] == "C"){
        continue
       }
       res.push(arr[i])

        
    }
    return res
}

// -------------------------------------------- qusation 3 complete
/*
Unlucky 13
Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

Examples
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.
*/
function unlucky13(nums) {
	let res = []
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] %13 == 0){
         continue
       }
        res.push(nums[i])
        
    }
    return res
}

// -------------------------------------------- qusation 4 complete
/*
Fix the Error: Filtering out Empty Arrays
I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
  return arr.filter(x => x !== [])
}
However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

Examples
// What I want:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// What I am getting:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
Notes
N/A
*/
function removeEmptyArrays(arr) {
    return arr.flat()
}
// -------------------------------------------- qusation 5 complete
/*
String Pairs
Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

See the below examples for a better understanding:

Examples
stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

stringPairs("edabit") ➞ ["ed", "ab", "it"]

stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
*/
function stringPairs(str) {
    let res = []
   
	for (let i = 0; i < str.length -1; i++) {
       res.push(str[i] + str[i+1])
       
    }
   
    return res.slice(0,-1)
   
}

// -------------------------------------------- qusation 6 complete


/*
Unlucky 13
Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

Examples
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.

*/
function unlucky13(nums) {
    let res = []
	for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 13 !== 0){
            res.push(nums[i])
        }
        
    }
    return res
   
    // second method using method 

   return nums.filter(num => num % 13 !== 0)
    
}

// -------------------------------------------- qusation 7 complete

/*
Fix the Error: Filtering out Empty Arrays
I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
  return arr.filter(x => x !== [])
}
However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

Examples
// What I want:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// What I am getting:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
*/

function removeEmptyArrays(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])){
            res.push(arr[i])
        }
        
    }
    return res

    second solution
    return arr.filter(a=>{
      return  !Array.isArray(a)
    })
}

// -------------------------------------------- qusation 8 complete

/*
Product Divisible by Sum?
Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

Examples
divisible([3, 2, 4, 2]) ➞ false

divisible([4, 2, 6]) ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)

divisible([3, 5, 1]) ➞ false
*/
function divisible(arr) {
    let sum = 0
    let dvide = 1
	for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        dvide *= arr[i]     
    }
    return dvide % sum == 0
    using mehod
    let sum = arr.reduce((a,b)=>{
     return   a +=b
    },null)
     let devide = arr.reduce((a,b)=>{
     return   a *=b
    },1)
    return devide % sum == 0
}

// -------------------------------------------- qusation 9 complete
/*
Where is Bob!?!
Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

Examples
findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

findBob(["Jimmy", "Layla", "James"]) ➞ -1
Notes
Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").
*/

function findBob(arr){
   let newArr = arr.map(a => a.toLowerCase())
    return newArr.indexOf("bob")
}

// -------------------------------------------- quastion 10 complete
