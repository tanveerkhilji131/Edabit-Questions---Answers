
// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

function allTruthy(...args) {
	//1
   return args.every(a=> !!a)
   //2
        return args.reduce((acc,value)=>{
          return  !value ? [...acc,false ]:acc.includes(false) ? false :true
        },[])
        //3
        for (let i = 0; i < args.length; i++) {
            if(!args[i]){
                return false
            }
            
        }
        // return true
}


// quastion 1 complete

// Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// Examples
// findNaN([1, 2, NaN]) ➞ 2

// findNaN([NaN, 1, 2, 3, 4]) ➞ 0

// findNaN([0, 1, 2, 3, 4]) ➞ -1

function findNaN(number) {
	// return number.indexOf(isNaN(NaN))
        // let index = -1;
        // for (let i = 0; i < number.length; i++) {
        //    if(isNaN(number[i])) { index = i }      
        // }
        // return index
        // return number.reduce((acc,value,i)=>{
        //     return isNaN(value) ? acc = i : acc
        // },-1)
        let i = 0
        let nan = -1
       while(index < number.length){
            if(isNaN(number[i])){  nan = i}            

        index++
       }
       return nan
        
       
    }

// quastion 2 complete

// Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
// Examples
// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

function evenOddTransform(arr, n) {
    let res = []
       for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
            for (let j = 0; j < n; j++) {

                  if(value % 2 === 0){
         value = value   - 2
       }
       if(value % 2 !== 0){
        value = value + 2
       } 
            }
            res.push(value) 

       }
    // return res
    

    }
   

// quastion 3 complete

// Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
// Notes
// Notes
// All of the letters in the input list will always be lowercase.

function mapping(letters) {
    let res = {}
	for (let i = 0; i < letters.length; i++) {
      res[letters[i]] = letters[i].toUpperCase()  
    }
    // return res
    return letters.reduce((a,b)=>{
         a[b] = b.toUpperCase()
        return a
    },{})
}
// quastion 4 complete

// Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
// zipIt(["Elise", "Mary"], ["John", "Rick"])
//  ➞ [["Elise", "John"], ["Mary", "Rick"]]

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//  ➞ "sizes don't match"

// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

function zipIt(women, men) {
   if( women.length !== men.length) {return "sizes don't match"}
    let res = []
	for (let i = 0; i < women.length; i++) {
        res.push(women[i] ) + res.push(men[i])
        
    }
    return res
}

// quastion 5 complete

// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples
// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

// transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]

function transformUpvotes(str) {
	let res = []
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        
                if(arr[i].includes("k") ) {
                 res.push( arr[i].slice(0,-1) * 1000)
                  }           
        
    } 
     return res
}

// quastion 6 complete

// Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// Examples
// removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"

// removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"

// removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
// Notes
// N/A


function removeSpecialCharacters(str) {
	let arr = [...str]
    let spical = [..."!@#$%^&*()/."]
    // return spical
    // return arr.filter((a,i)=>{
    //     return !spical.includes(a)
    // }).join("")
    //2
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        if(!spical.includes(arr[i])){
            res += (arr[i])
        }
        
    }
    return res
}

console.log(
    removeSpecialCharacters("%fd76$fd(-)6GvKlO.")
)

// quastion 7 complete

// Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// // 1/RTotal = 1/6 + 1/3 + 1/6
// // 1/RTotal = 2/3
// // RTotal = 3/2 = 1.5
// Examples
// parallelResistance([6, 3]) ➞ 2

// parallelResistance([10, 20, 10]) ➞ 4

// parallelResistance([500, 500, 500]) ➞ 166.7
// // Round to the nearest tenth

function parallelResistance(arr) {
    let total = 0
	for (const value of arr) {
        total +=  1/ value
    }
    
    // return 1 / total
    
   return 1 / arr.reduce((acc,value)=>{
        return acc += (1 / value)  
    },0) 

   
}

// quastion 8 complete

// Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Examples
// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]
// Notes
// Return the elements in the order that they are found in the array.
// Your function should also work for empty arrays.

function uniqueArr(arr) {
	let res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && !res.includes(arr[i])){
            res.push(arr[i])
        }
        
    }
    return res
}


// quastion 9 complete

// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"]) 
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
// ➞ []

function identicalFilter(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
        let firstarr = arr[i][0]
         let check = true

        for (let j = 1; j < arr[i].length; j++) {
            if(firstarr !== arr[i][j]){
              check = false
            }
        }
        if(check){
            res.push(arr[i])
        }
    }
    return res
}

console.log(
    identicalFilter(["88", "999", "22", "545", "133"])
)
// quastion 10 complete
