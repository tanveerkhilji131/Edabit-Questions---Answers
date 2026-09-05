
// Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples
// trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2

// // 1 + 1 = 2

// trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ 15

// // 1 + 5 + 9 = 15

// trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]) ➞ 10

// // 1 + 2 + 3 + 4 = 10



function trace(arr) {
	let total = 0
    for (let i = 0; i < arr.length; i++) {
               total +=arr[i][i]
                
        
    }
    // return total
    return arr.reduce((acc,value,i)=>{
        return acc += value[i]
    },0)

}

// quastion 1 complete

// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
// Notes
// N/A

function uniqueSort(arr) {
	let res = [];
    let cloneandsort = arr.sort((a,b)=>{return a-b})
    for (let i = 0; i < cloneandsort.length; i++) {
        if(!res.includes(cloneandsort[i])){
            res.push(cloneandsort[i])
        }   
    }
    // return res
    return cloneandsort.reduce((acc,value)=>{
        return !acc.includes(value) ? [...acc,value] : acc
    },[])

}


// quastion 2 complete

// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// Examples
// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]

function reverseArr(num) {
	let arr = String(num)
    let res = []
    for (let i = arr.length-1; i >= 0; i--) {
                    res.push(+arr[i])
    }
    return res
}

// quastion 3 complete

// Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
// mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
// Notes
// Do not repeat the last item of the given array.

function mirror(arr) {
	let res = [...arr]
    for (let i = arr.length-2; i >= 0; i--) {
        res.push(res[i])      
    }
    // return res
    return [...arr,...arr.slice(0,-1).reverse() ]
  
   
}

// quastion 4 complete

// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

function hackerSpeak(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        str[i] === "a" ? res+=4 : str[i] === "e" ?
         res+=3 : str[i] === "i" ? res+=1 : str[i] === "o" ? res+=0 : str[i] === "s" ? res+=5 : res+=str[i]
        
    }
    return  res
}


// quastion 5 complete

// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

function capMe(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
	  res.push(arr[i][0].toUpperCase() +arr[i].slice(1).toLowerCase())
        
    }
    return res
}


console.log(
     capMe(["mAvis", "senaida", "letty"])
)
// quastion 6 complete

// Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples
// lineLength([15, 7], [22, 11]) ➞ 8.06

// lineLength([0, 0], [0, 0]) ➞ 0

// lineLength([0, 0], [1, 1]) ➞ 1.41
// Notes
// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.

function lineLength([x1, y1], [x2, y2]) {
	let lessone = x2 - x1
	let lesstwo = y2 - y1

    return Math.sqrt(lessone ** 2 + lesstwo ** 2).toFixed(2)
}

// quastion 7 complete

// Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// Examples
// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519

function sumTwoSmallestNums(arr) {
	let sortarr = arr.sort((a,b)=>{return a-b})
    return sortarr[0] + sortarr[1]
}


// quastion 8 complete

// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0


function numOfSubbarrays(arr) {
	for (let i = 0; i < arr.length; i++) {
        
        if(!Array.isArray(arr[i])){
            return 0
        }
        return arr.length
    }
}


// quastion 9 complete

// War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// warOfNumbers([12, 90, 75]) ➞ 27

// warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) ➞ 168
// Notes
// The given array contains only positive integers.

function warOfNumbers(arr) {
    let even = 0
    let odd = 0
	for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 ==0 ? even+=arr[i] : odd+=arr[i]

        
    }
    return even > odd ? even - odd : odd - even
}

// quastion 10 complete
