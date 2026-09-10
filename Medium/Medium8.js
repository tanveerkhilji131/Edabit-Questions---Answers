
// Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// // Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// // Final string: "apargrapepesple"
// Examples
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

// fruitSalad(["banana"]) ➞ "anaban"

function fruitSalad(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
        if(arr[i].length % 2 == 0){
          let length = (arr[i].length / 2)
            res.push(arr[i].slice(0,length)) +  res.push(arr[i].slice(length))
           
        } if(arr[i].length % 2 !== 0){
          let length = (arr[i].length / 2)
            res.push(arr[i].slice(Math.floor(length))) + res.push(arr[i].slice(0,Math.floor(length)))
         
        }
            
            
    }
    return res.sort().join("")
}

// quastion 1 complete

// Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.
// Example
// sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9]

// sumOddAndEven([0, 0]) ➞ [0, 0]

function sumOddAndEven(arr) {
   let even = 0
   let odd = 0
   for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
           even += arr[i]
        }else{
            odd += arr[i]
        }
   }
   return [even,odd]
 
  

	
}


// quastion 2 complete

// Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// Examples
// diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

function diceGame(arr) {
	let total = 0;
    for (let i = 0; i < arr.length; i++) {
            if(arr[i][0] !== arr[i][1]){
                total +=arr[i][0] + arr[i][1]
            }if(arr[i][0] === arr[i][1]){
               return 0
            }
                
                  
    }
    return total
}


// quastion 3 complete

// Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// Examples
// simonSays([1, 2], [5, 1]) ➞ true

// simonSays([1, 2], [5, 5]) ➞ false

// simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true

// simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false
function simonSays(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] == arr2[i + 1]){
            return true
        }else{
            return false
        }
        
    }
}

// quastion 4 complete

// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
// flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

// flipEndChars("ada") ➞ "Two's a pair."

// flipEndChars("Ada") ➞ "adA"

// flipEndChars("z") ➞ "Incompatible."

// flipEndChars([1, 2, 3]) ➞ "Incompatible."

function flipEndChars(str) {
    let res = ""
	for (let i = 0; i < str.length; i++) {
        if(str.length < 2 || typeof str[i] !== "string" ){
            res =  "Incompatible."
        }
      else if(str[0] == str.at(-1) ) {res =  "Two's a pair."}
        else if(str.length > 2){
       res = str.at(-1) + str.slice(1,-1) + str.at(0)
        }
    }
    return res
}



// quastion 5 complete

// Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// Examples
// nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]

// nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]

// nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]

// nextInLine([], 6) ➞ "No array has been selected"

function nextInLine(arr, num) {
	return arr.length != 0 ? [...arr.slice(1),num] : "No array has been selected"
}


// quastion 6 complete

// Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.
// Examples
// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]

// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]

// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

function matrix(x, y, z) {
    let res = []
	for (let i = 0; i < x; i++) {
    let value = []
        for (let j = 0; j < y; j++) {
         value.push(z)

        }
            res.push(value)


        
        
    }
    return res
}

// quastion 7 complete

// Lonely Integer
// Every integer in the array has its additive opposite present except one value. Return that unmatched value. Repeated copies do not change whether an opposite exists.

// Examples
// lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// // 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// // -4 has no matching positive appearance.

// lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9

function lonelyInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(!arr.includes(-arr[i]) ){
            return arr[i]
        }          
    }
}


// quastion 8 complete

// Moving to the End
// Move every occurrence of the specified value to the end of the array. Keep all other elements in their original order.

// Examples
// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// // Move all the 1s to the end of the array.

// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]

// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]


function moveToEnd(arr, el) {
    let res = []
    let indexarr = []
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== el){
            res.push(arr[i])
        }
        if(arr[i] == el){
            indexarr.push(i)
        }
        
    }
    for (let i = 0; i < indexarr.length; i++) {
        res.push(arr[indexarr[i]])
        
    }
    return res
}


// quastion 9 complete

// Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

// Examples
// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]

// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

// puzzlePieces([1, 2], [-1, -1]) ➞ false

// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false


function puzzlePieces(a1, a2) {
    if(a1.length !== a2.length){
        return false
    }
    let arr = []
    let res = null
	for (let i = 0; i < a1.length; i++) {
       arr.push(a1[i] + a2[i])
        
    }
    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i] == arr[i + 1]){
            res =  true
        }else{
            res =  false
        }
        
    }
    return res
}


// quastion 10 complete
