// Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples
// evenOrOdd("22471") ➞ "Even and Odd are the same"

// evenOrOdd("213613") ➞ "Even and Odd are the same"

// evenOrOdd("23456") ➞ "Even is greater than Odd"
// Notes
// The input will be a string of numbers.

function evenOrOdd(str) {
    let even = 0
    let odd = 0
	let arrvalue = [...str].reduce((arr,value)=>{
        value % 2 == 0 ? even+=+value : odd += +value 
        arr.push(even)
        arr.push(odd)
        return arr
    },[])

    return even > odd ? "even is grather than " : even == odd ? "both same even and odd" : null

}

// quastion 1 complete


// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples
// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]


function reverseImage(image) {
    let clone = image.map(arr => [...arr])
	// for (let i = 0; i < clone.length; i++) {
    //     for (let j = 0; j < clone[i].length; j++) {
    //        if(clone[i][j]){
    //         clone[i][j] = 0
    //        }else{
    //         clone[i][j] = 1
    //        }
            
    //     } 
    // }
    // return clone
    // for (const arr of clone) {
    //     for (const [index,values] of arr.entries()) {
    //         if(values){
    //             arr[index] = 0
    //         }else{
    //             arr[index] = 1
    //         }
    //     }
    // }
    // return clone
}

console.log(
     reverseImage([
  [1, 0, 0],
  [1, 0, 0]
])
)
// quastion 2 complete

// Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// sumArray([1, 2, 3]) ➞ 6
// // 1 + 2 + 3 = 6

// sumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.

function sumArray(arr) {
   let flatedarr =  arr.flat((Infinity))
    return flatedarr.reduce((acc,value) =>  acc += value)
}
// quastion 3 complete

// Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// Examples
// sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// // The number 3 was found at indexes 1, 2 and 5.
// // 8 = 1 + 2 + 5

// sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2

// sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10

// sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0

function sumFoundIndexes(arr, n) {
	let total = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == n){
           total += i
        }
        
    }
    return total
}

// quastion 4 complete


// Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples
// countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.

// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

// countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

// countPosSumNeg([]) ➞ []


function countPosSumNeg(arr) {
   
    let totalofpositive = 0
    let sumofnagtive = 0
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            totalofpositive +=1    
        }
        if(arr[i] < 0){
            sumofnagtive += arr[i]
        }
        
    }
    return [totalofpositive,sumofnagtive]
}

// quastion 5 complete

// Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
// sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ]) ➞ 6

// // 2 + 4 = 6

// sumOfEvens([
//   [1, 1],
//   [1, 1]
// ]) ➞ 0

// sumOfEvens([
//   [42, 9],
//   [16, 8]
// ]) ➞ 66

// sumOfEvens([
//   [],
//   [],
//   []
// ]) ➞ 0

function sumOfEvens(arr) {
    let totalofsum = 0
	for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
               if(arr[i][j] % 2 == 0){
                totalofsum += arr[i][j]
               }
                
            }
        
    }
    // return totalofsum
    let totalofsum2 = 0

    for (const array of arr) {
        for (const values of array) {
            if(values % 2 == 0) {totalofsum2 +=values}
        }
    }
    return totalofsum2
}


// quastion 6 complete

// Inclusive Array Ranges
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

// Examples
// inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

// inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

// inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// inclusiveArray(17, 5) ➞ [17]

function inclusiveArray(startNum, endNum) {
    if(startNum > endNum) return [startNum]
    let res = []
	for (let i = startNum; i <= endNum; i++) {
        res.push(i)
        
    }
    return res
}

// quastion 7 complete

// Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
// ➞ true

// // Agatha's pieces: [4, 3], [2, 4], [1, 2]
// // Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// // Total area of Agatha's chocolate
// // 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// // Total area of Bertha's chocolate is:
// // 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
// // Examples
// // testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true

// // testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false

// // testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true

// // testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false

function testFairness(agatha, bertha) {
    let agathasum = 0
    let berthasum = 0
	for (const arr of agatha) {
        agathasum += arr[0] * arr[1]
    }for (const arr of bertha) {
        berthasum += arr[0] * arr[1]
    }
    return agathasum === berthasum 
}

// quastion 8 complete

// Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples
// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]

function filterUnique(arr) {
   
    let res = []
	for (let i = 0; i < arr.length; i++) {
       
       let condition = true
       let k = 0
        for (let j = 1; j < arr[i].length; j++) {
           for (let k = 0; k < j; k++) {
                if(arr[i][k] === arr[i][j]){
                 condition = false
           }
           }
            
        }        
        if(condition){
            res.push(arr[i])
        }
    }
    return res
}

// quastion 9 complete

// Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// Examples
// miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.

// miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]

// miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []

function miniPeaks(arr) {
	let res = []
    for (let i = 1; i < arr.length -1 ; i++) {
        if(arr[i] > arr[i -1] && arr[i] > arr[i + 1]){
            res.push(arr[i])
        }
        
    }
    return res

}


// quastion 10 complete
