// Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// // A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

// Examples
// subset([1, 3], [1, 3, 3, 5]) ➞ true

// subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true

// subset([1, 3], [1, 33]) ➞ false

// subset([1, 3, 10], [10, 8, 8, 8]) ➞ false

function subset(arr1, arr2) {
	let check = null;
   for (let i = 0; i < arr1.length; i++) {
      check = arr2.includes(arr1[i]) ?  true : false
    
   }
//    return check
   return arr1.every(a=>{
      return  arr2.includes(a)
   })
    
}
// quastion 1 complete

// Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples
// measureDepth([]) ➞ 1

// measureDepth([[]]) ➞ 2

// measureDepth([[[]]]) ➞ 3

// measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11

function measureDepth(arr) {
    return JSON.stringify(arr).length /2
}

// quastion 2 complete

// Record Temperatures
// You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.

// [[record low, record high], ...]
// The current week array contains the daily low/high temperatures for each day of the current week.

// [[daily low, daily high], ...]
// A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.

// Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.

// There may be multiple record temperatures in a week.
// If there are no broken records return the original records array.
// Example
// //             sun       mon      tues       wed      thur      fri       sat
// recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
//             [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])

// ➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]

function recordTemps(records, currentWeek) {
	let res = [];
    let temp = null
    for (let i = 0; i < records.length; i++) {
         temp= [...records[i]]
       for (let j = 0; j < records[i].length; j++) {
            if( j == 0 && currentWeek[i][j] < records[i][j] ){
                temp[j]=currentWeek[i][j]
            }
            if(j == 1 && currentWeek[i][j] > records[i][j] ){
                temp[j] = currentWeek[i][j]
            }else{
                // res.push(records[i][j])
            }
            
        }
   
        res.push(temp)
    }
    return res
}
console.log(
    recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
            [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])
)

// quastion 3 complete

// Filtering by Star Rating
// Return an object containing entries with the requested star rating, or No results found when none match.

// Example
// filterByRating({"Luxury Chocolates":"*****","Tasty Chocolates":"****","Aunty May Chocolates":"*****"}, "*****") ➞ {"Luxury Chocolates":"*****","Aunty May Chocolates":"*****"}

function filterByRating (obj,star) { 
    let res = {}
    for (const [key,value] of Object.entries(obj)) {
        if(value == star){
            res[key] = value;
        }
    }
    return res
 }

// quastion 4 complete

// Spin Around, Touch The Ground
// Each "left" or "right" turns 90 degrees. Use the net turn: left and right cancel each other. Return the non-negative number of complete 360-degree rotations in the net turn, ignoring any incomplete remainder.

// Examples
// spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

// spinAround(["left", "right", "left", "right"]) ➞ 0

// spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

// spinAround(["left", "left", "left", "left"]) ➞ 1

function spinAround(r) {
	return 90 * r.length / 360
}

// quastion 5 complete

// Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48
// Examples
// evenLast([]) ➞ 0

// evenLast([1, 3, 3, 1, 10]) ➞ 140

// evenLast([-11, 3, 3, 1, 10]) ➞ 20
// Notes
// If the array is empty, return 0.

function evenLast(arr) {
    let total =0
	for (let i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
          total+=  arr[i]
        }
        
    }
    // return total * arr.at(-1)
    let value= arr.reduce((acc,value,i)=>{
       return  i % 2 == 0 ? acc+ value : acc 

    },0)
         
    // return value * arr.at(-1)

}

// quastion 6 complete

// Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

// Examples
// letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D") ➞ 3

// // "D" shows up 3 times: twice in the first row, once in the third row.

// letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "H") ➞ 2


function letterCounter(arr, letter) {
    let count = 0
	for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == letter){
                count++
            }
            
        }
        
    }
    return count
}

// quastion 7 complete

// Increment to Top
// Return the total number of single-step increments needed to raise every number in the array to its largest value.

// Examples
// incrementToTop([3, 4, 5]) ➞ 3
// // Maximal element in the array is 5.
// // To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// // To transform 4 to 5 requires 1 step: 4 -> 5.
// // Total steps required is 3.

// incrementToTop([4, 3, 4]) ➞ 1
// // Maximal element in the array is 4.
// // To transform 3 to 4 requires 1 steps: 3 -> 4.
// // Total steps required is 1.

// incrementToTop([3, 3, 3]) ➞ 0

// incrementToTop([3, 10, 3]) ➞ 14

function incrementToTop(arr) {
	let maxnum = Math.max(...arr)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += maxnum -arr[i]
        
    }
    return sum
}


// quastion 8 complete

// Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples
// backToHome("EEWE") ➞ false

// backToHome("NENESSWW") ➞ true

// backToHome("NEESSW") ➞ false

function backToHome(directions){
  let x = 0
  let y = 0
  for (const direction of directions) {
     direction == "E" ? x++ : direction == "W" ? x-- : direction == "N" ? y++ : direction == "S" ? y-- : null
  }
  return x == 0 && y == 0
}


// quastion 9 complete

    // No Hidden Fees
    // Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

    // Examples
    // hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

    // hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

    // hasHiddenFee(["$1"], "$4") ➞ true
    // Notes
    // Remember that each price is given as a string.
    // All $ signs will be at the beginning of the number.

function hasHiddenFee(prices, t) {
    let acualprice = +t.split("").slice(1).join("")
    let total = 0
	for (let i = 0; i < prices.length; i++) {
       total +=  +prices[i].split("").slice(-1).join("")
        
    }
    return  acualprice > total
}

// quastion 10 complete
