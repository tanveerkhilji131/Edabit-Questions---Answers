
/*
Buggy Uppercase Counting
In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

Examples
countUppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6

countUppercase(["little", "lower", "down"]) ➞ 0

countUppercase(["EDAbit", "Educate", "Coding"]) ➞ 5
*/
function countUppercase(arr){
    let count = 0
    // let newArr = [...arr]
    // let check = newArr.join(" ").toUpperCase().split(" ")
    
    for (let i = 0; i < arr.length; i++) {
        for (const value of arr[i]) {
            if(value == value.toUpperCase() == true){
                count ++
            }
            
        }
      
    }
    return count
    
}
// -------------------------------------------- qusation 1 complete
/*
Array Index
Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
]

idx = [1, 3, 5, 8]
You have to find the characters in these indexes of the given list if you think of the indexes as:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
arrIndex(lst, idx) ➞ "mbsr"

*/
arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
]
idx = [1, 3, 5, 8]

function arrIndex(arr, idx) {
	let str = ""
    let newarr = []
    for (let i = -1; i < arr.length; i++) {
        newarr.push(arr[i]);      
    }
   let FinalArray =  newarr.flat()
   idx.forEach(element => {
    str +=(FinalArray[element])
   });
   return str
}
// -------------------------------------------- qusation 2 complete
/*
Sum of Even Pairs in Array
Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

To illustrate:

11, 15, 6, 8, 9, 10
11 + 15 = 26 = true
15 + 6 = 21 = false
6 + 8 = 14 = true
8+ 9 = 17 = false
9 + 10 = 19 = false
Therefore, solution = [true, false, true, false, false]
Examples
oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]

oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]

oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]
*/
function oddSum(numbers) {
	let one = numbers[0]
    let res = []
    let sum = 0
    for (let i = 1; i < numbers.length; i++) {
        if(sum = one + numbers[i]){
            one = numbers[i]
        }
    res.push(sum % 2 == 0)
}
return res

}
// -------------------------------------------- qusation 3 complete
/*
Move Zeroes
Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

Examples
moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]

moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
*/
function moveZeros(arr) {
    let res = []
    let normalarr = []
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            res.push(arr[i])
        }      
    }
    for (let j = 0; j < arr.length; j++) {
       if(arr[j] == 0 == false){
            normalarr.push(arr[j])
       }
        
        
    }
    
    return [normalarr,res].flat()
}

// -------------------------------------------- qusation 4 complete
/*
Sum of Numbers in an Array
Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

Example:

[2, 4, 9]  ➞ 23
2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
Examples
arraySum([1, 3, 3, 1, 10]) ➞ 105.46

arraySum([2, 3, 4, 5]) ➞ 23.97

arraySum([1, 31, 3, 11, 0]) ➞ 11.62
*/
function arraySum(nums) {
    let valuecubetotal = 0
    let valuesquretotal = 0
	for (let i = 0; i < nums.length; i++) {
       if(nums[i] % 2 == 0){
       valuecubetotal +=  Math.pow(nums[i],2)
       }   else{
         valuesquretotal += Math.sqrt(nums[i])
       }  
    }
    let finaltotal = valuecubetotal + valuesquretotal;
    return finaltotal.toFixed(2)
}
// -------------------------------------------- qusation 5 complete
/*
Characters in Shapes
Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

Examples
countCharacters([
  "###",
  "###",
  "###"
]) ➞ 9

countCharacters([
  "22222222",
  "22222222",
]) ➞ 16

countCharacters([
  "------------------"
]) ➞ 18

countCharacters([]) ➞ 0

countCharacters(["", ""]) ➞ 0
*/
function countCharacters(arr) {
    let sumoflength = 0
	for (let i = 0; i < arr.length; i++) {
       sumoflength +=arr[i].length
        
    }
    return sumoflength
}


// -------------------------------------------- qusation 6 complete
/*
Even and Last
Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.

Examples
evenLast([2, 3, 4, 5]) ➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

evenLast([1, 3, 3, 1, 10]) ➞ 140

evenLast([]) ➞ 0
*/
function evenLast(arr) {
    let indexarr = []
    let sumofvalue = 0
    arr.forEach((value,index)=>{
        if(index % 2 == 0 ){
            indexarr.push(index)
        }
    })
    for (let i = 0; i < indexarr.length; i++) {

        sumofvalue +=arr[indexarr[i]]*arr[arr.length-1]
    }
    return sumofvalue
    
}
// -------------------------------------------- qusation 7 complete
/*
Extremely Over-Nested
Create a function that returns the original value from a matrix with too many sub-arrays.

Examples
deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

deNest([[[[[[[true]]]]]]]) ➞ true

deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
*/
function deNest(arr) {
    let value = 0 || ""
	let array =  arr.flat(Infinity)
    for (let i = 0; i < array.length; i++) {
        value +=array[i] + " "
    }
    return value
}
// -------------------------------------------- qusation 8 complete
/*
CMS Selector Based on a Given String
Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

Examples
cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
*/
function cmsSelector(arr, str) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase()
            if(arr[i].includes(str) == true){
                res.push(arr[i])
            }      
    }
    return res
}
// -------------------------------------------- qusation 9 complete
/*
Cowboy Shootout
Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

Examples
rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
*/
function rogerShots(arr) {
    let sumofBang = 0
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "Bang!" || arr[i] == "BangBang!" ){
            sumofBang += 0.5
        }
    }
    return sumofBang
}

// -------------------------------------------- qusation 10 complete
