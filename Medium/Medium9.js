// Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

// Examples
// flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]

// flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]

// flattenCurve([4]) ➞ [4]

// flattenCurve([]) ➞ []

function flattenCurve(arr) {
    let avg = 0
	for (let i = 0; i < arr.length; i++) {
       avg += arr[i] % 2
        
    }
    return arr.map(a => avg)
}

// quastion 1 complete

    // Flick Switch
    // Start with true. For each item, switch the current value when the item is the lowercase string "flick", then add the current value to the result.

    // Examples
    // flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

    // flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

    // flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]


    function flickSwitch(arr) {
        let res = []
        let check = true;
        for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "flick" ){
            
            check = !check
        }
        res.push(check)
    
        }
        return res
    }

// quastion 2 complete

// Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Examples
// checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true

// checkSum([4, 5, 6, 7, 8, 9], 13) ➞ true

// checkSum([0, 98, 76, 23], 174) ➞ true

// checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39) ➞ false


function checkSum(arr, n) {
    
   
    let value = null
	for (let i = 0; i < arr.length; i++) {
        
       if(!!arr.includes(n - arr[i])) {
        return true
       }else{
         value = false
       }
    
    }
    return value
}

// quastion 3 complete

// Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// Examples
// isScalable([1, 2, 4, 6, 7, 8]) ➞ true

// isScalable([40, 45, 50, 45, 47, 52]) ➞ true

// isScalable([2, 9, 11, 10, 18, 21]) ➞ false


function isScalable(arr) {
    let diff = null
	// for (let i = 0; i < arr.length-1; i++) {
    //     diff  = arr[i+1] - arr[i]
    //     if(diff <= 5){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    let res = null
    return arr.reduce((acc,value,i)=>{
       acc =  arr[i+1] - value
        if(acc <= 5){return true }else{return false}
        if(i == arr.length -1 ){
            return
        }
    },null)
}

console.log(
// isScalable([1, 2, 4, 6, 7, 8]) //➞ true
isScalable([2, 9, 11, 10, 18, 21]) //➞ false
)

// quastion 4 complete

// Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples
// removeEnemies(["Fred"], []) ➞ ["Fred"]

// removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

// removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]

function removeEnemies(names, enemies) {
    // console.log(enemies.join(" ") == names[0])
    let res = []
	for (let i = 0; i < names.length; i++) {
        let check = true;
            for (let j = 0; j < enemies.length; j++) {
                if(names[i] === enemies[j]){
                    check = false
                    break;
                }else{
                    check = true
                }
                
            }
            if(check){
                res.push(names[i])
            }
        
    }
    return res
}



// quastion 5 complete

// The Museum of Incredibly DULL Things
// A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.

// Examples
// removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]

// removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]

// removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]


function removeSmallest(arr) {
   let smalest = [...arr].sort((a,b)=> a-b)
   let res = []
   let check =false
   for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== smalest[0]){
        res.push(arr[i]) 
        }
           else if(arr[i]== smalest[0] && check){
            res.push(arr[i])
        }
      else  if(arr[i] == smalest[0]){
            check = !check
        }
    
    
   }
   return res
}

// quastion 6 complete

// An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Square every coordinate, add the squares, and return the square root of that sum.

// Examples
// magnitude([3, 4]) ➞ 5

// magnitude([0, 0, -10]) ➞ 10

// magnitude([]) ➞ 0

// magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311

var magnitude = vector => {
   let arr = vector.map(a => a*a)
   return Math.sqrt(arr.reduce((a,b)=> a+b))
}


// quastion 7 complete

// Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

// Examples
// peelLayerOff([
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
//   ["i", "j", "k", "l"],
//   ["m", "n", "o", "p"]
// ]) ➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]

// peelLayerOff([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35]
// ]) ➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

// peelLayerOff([
//   [true, false, true],
//   [false, false, true],
//   [true, true, true]
// ]) ➞ [[false]]

// peelLayerOff([
//   ["hello", "world"],
//   ["hello", "world"]
// ]) ➞ []

function peelLayerOff(arr) {
      arr.shift()
        arr.pop()

	for (let i = 0; i < arr.length; i++) {
        arr[i].shift()
        arr[i].pop()   
    }
    return arr
}

// quastion 8 complete

// String to Dictionary
// Create a function that takes an array of strings and returns a dictionary/map. Each string supplies a key and value separated by =.

// Examples
// stringToDictionary(["1=one", "2=two", "3=three", "4=four"]) ➞ { "1": "one", "2": "two", "3": "three", "4": "four" }

// stringToDictionary(["dog=bark", "cat=meow", "cow=moo"]) ➞ { "dog": "bark", "cat": "meow", "cow": "moo" }

// stringToDictionary(["bob=human", "lola=dog", "mittens=cat", "todd=frog"]) ➞ { "bob": "human", "lola": "dog", "mittens": "cat", "todd": "frog" }

function stringToDictionary (...args) {
    let obj ={}
   
     for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            let index = args[i][j].indexOf("=")
          
            obj[args[i][j].slice(0,index)] = args[i][j].slice(index+1)
            
        }
        
     }
     return obj
}


// quastion 9 complete

// Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// Examples
// upwardTrend([1, 2, 3, 4]) ➞ true

// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false

// upwardTrend([1, 2, 3, "4"]) //➞ "Strings not permitted!"

// upwardTrend([1, 2, 3, 6, 7]) ➞ true

function upwardTrend(arr) {
    let res = []
	for (let i = 0; i < arr.length-1; i++) {
        if(typeof arr[i+1] == "string") return "Strings not permitted!"
       if(arr[i] < arr[i+1]){
        res.push(true)
       }else{
        res.push(false)
       }
        
    }
    return res.every(a=> a)
}

// quastion 10 complete
