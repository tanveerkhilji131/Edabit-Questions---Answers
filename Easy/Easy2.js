// Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
// isAvgWhole([1, 3]) ➞ true

// isAvgWhole([1, 2, 3, 4]) ➞ false

// isAvgWhole([1, 5, 6]) ➞ true

// isAvgWhole([1, 1, 1]) ➞ true

// isAvgWhole([9, 2, 2, 5]) ➞ false

function isAvgWhole(arr) {
//     let res = 0
// 	for (let i = 0; i < arr.length; i++) {
//       res+= arr[i]
        
//     }
//    return  (res /  arr.length ) % 2 == 0
    // let value = arr.reduce((a,b)=>{
    //     a+=b
    //     return a 
    // },0)
    // return (value / arr.length) % 2 == 0
    //3
    let total = 0 
    let sum = arr.map(a=>{ return total+= a})
    return (sum.at(-1) / arr.length) % 2 == 0
}
//  complete 1

// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

// getAbsSum([-1]) ➞ 1

function getAbsSum(arr) {
    //1
    let res = 0
	for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? res+=arr[i] : res += -arr[i]
    }    
    return res
    //2
    return arr.reduce((a,b)=>{
        return b > 0 ? a+=b : a+=-b
    },0)
    }
//  complete 2

// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

// sortNumsAscending(null) ➞ []

// sortNumsAscending([]) ➞ []
// Notes
// Test input can be positive or negative.

function sortNumsAscending(arr) {
	// return arr.sort((a,b)=>{return a-b})
    // bubble sort
    let newarr = [...arr]
    // for (let i = 0; i < newarr.length; i++) {
    //     for (let j = i + 1; j < newarr.length; j++) {         
    //         if(newarr[i] > newarr[j]){
    //             let temp = newarr[i]
    //             newarr[i] = newarr[j]
    //             newarr[j] = temp              
    //         }        
    //     }     
    // }
    // return newarr
    // selection sort
    for (let i = 0; i < newarr.length - 1; i++) {
       let minIndex = i
        for (let j = 1; j < newarr.length ; j++) {
            if(newarr[i] > newarr[j]){
                minIndex = j
            }
        
    }
        let temp = newarr[i]
            newarr[i] = newarr[minIndex]
            newarr[minIndex] = temp
    }
    
  
   
return newarr
}

//  complete 3

// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]

function findLargestNums(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
         res.push(Math.max(...arr[i]))     
    }
    return res
}
console.log(
    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
)

//  complete 4

// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]

function set(arr) {
    let newarr = arr.sort((a,b)=>{return a-b})
   let res = []
	for (let i = 0; i <= newarr.length -1; i++) {
      if(newarr[i] !== newarr[i +1] ){
        res.push(newarr[i])
      }
        
    }
    return res
}

console.log(
    set([3, 3, 3, 2, 1])
  
)
//  complete 5

// Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
function formatPhoneNumber(numbers) {
    let one = numbers.slice(0,3).join("")
    let two = numbers.slice(3,6).join("")
    let last = numbers.slice(6).join("")
      return `(${one}) ${two}-${last}`
}


//  complete 6

// Amplify the Multiples of Four
// Create an array containing every integer from 1 through the given number. Multiply each multiple of 4 by 10, and leave every other value unchanged.

// Examples
// amplify(4) ➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40

// amplify(3) ➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4

// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

function amplify(num) {
    let res = []
	for (let i = 1; i <= num; i++) {
        res.push(i)   
    }
    return res.map(a=>   a % 4 == 0? a * 10 : a   )
    
}

//  complete 7

// Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// Create a slice of an array with n elements dropped from the end. If n is omitted, drop one element.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
// dropRight([1, 2, 3]) ➞ [1, 2]

// dropRight([1, 2, 3], 2) ➞ [1]

// dropRight([1, 2, 3], 5) ➞ []

// dropRight([1, 2, 3], 0) ➞ [1, 2, 3]

function dropRight(arr, num = 1) {
    //1
    let clone = [...arr]
	for (let i = 0; i < num; i++) {
      clone.pop()     
    }
    // return clone
    //2
    let i = 0
    while(i < num){
        clone.pop()
        i++
    }
    // return clone
}

//  complete 8

// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

// Notes
// The secret society's name should be entirely uppercased.
function societyName(friends) {
	let sortedorderlist = friends.sort()
    return (sortedorderlist[0][0] + sortedorderlist[1][0] + sortedorderlist[2][0]).toUpperCase()
}

console.log(
    societyName(["Adam", "Sarah", "Malcolm"])
)
//  complete 9

// Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// Examples
// arrayOperation(1, 10, 3) ➞ [3, 6, 9]

// arrayOperation(7, 9, 2) ➞ [8]

// arrayOperation(15, 20, 7) ➞ []
// Notes
// N/A

function arrayOperation(x, y, n) {
    let res = []
	for (let i = x; i <= y; i++) {
        i % n == 0 ? res.push(i) : null
    }
    return res
}

//  complete 10


