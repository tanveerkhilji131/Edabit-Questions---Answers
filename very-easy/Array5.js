
/*
Sum Greater Than Five
Write a function that returns the sum of elements greater than 5, in the given array .

Examples
sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

sumFive([1, 2, 3, 4]) ➞ 0

sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
*/

function sumFive(arr){
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 5 ){
        sum += arr[i]
       
    }   
    
  }
    return sum

}

// -------------------------------------------- qusation 1 complete
/*
Filter Strings from Array
Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

Examples
filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

filterArray(["Nothing", "here"]) ➞ []
*/

function filterArray(arr){
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "number"){
            res.push(arr[i])
        }   
    }
    return res
}

// -------------------------------------------- qusation 2 complete
/*
Burglary Series (11): Say What
The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

Examples
{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
*/
function sayWhat(obj) {
    let finalresult = ""
    let v  = Object.values(obj)
  let vlaues = v.join(" ") ;
  let value2 = v[v.length-2]
  finalresult += `${vlaues} ${value2}`
  return finalresult
  
}
// -------------------------------------------- qusation 3 complete
/*
True Ones, False Zeros
Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

Examples
integerBoolean("100101") ➞ [true, false, false, true, false, true]

integerBoolean("10") ➞ [true, false]

integerBoolean("001") ➞ [false, false, true]
*/
function integerBoolean(n) {
	let arr = n.split("")
    let res = []
    for (let i = 0; i < arr.length; i++) {
      arr[i]  == 1 ? res.push(true) : arr[i] == 0 ? res.push(false) : "plese enter vlaid number"
    }
    return res
}

// -------------------------------------------- qusation 4 complete
/*
Binary Array to Decimal
In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

Examples
binaryToDecimal([0, 0, 0, 1]) ➞ 1

binaryToDecimal([0, 0, 1, 0]) ➞ 2

binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
*/

function binaryToDecimal(arr) {
	let reverse = arr.reverse();
    let sum = 0
    reverse.forEach((element,index) => {
        let powerofvalue = Math.pow(2,index)
       
      

     sum += (Number(element) * Number(powerofvalue))
         
        
    });
    return sum
    
}
// -------------------------------------------- qusation 5 complete
/*
Chinese Zodiac
Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

Examples
chineseZodiac(2021) ➞ "Ox"

chineseZodiac(2020) ➞ "Rat"

chineseZodiac(1933) ➞ "Rooster"
*/
 
function chineseZodiac(birthYear) {
      const zodiac = [
      "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
      "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];
	let lessyear = birthYear - 2020;
    let index =  lessyear % 12 +12
    return zodiac[index]
    
}

// -------------------------------------------- qusation 6 complete
/*
Learn Lodash: _.fill, Fill an Array With New Values
According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

Arguments
array (Array): The array to fill.
value (*): The value to fill array with.
[start=0] (number): The start position.
[end=array.length] (number): The end position.

Returns
(Array): Returns array.
Examples
var array = [1, 2, 3]

fill(array, "a") ➞ ["a", "a", "a"]

fill(Array(3), 2) ➞ [2, 2, 2]

fill([4, 6, 8, 10], "*", 1, 3) ➞ [4, "*", "*", 10]
*/
function fill(arr, value, start = 0, end = arr.length) {
 
	for (let i = start; i < end; i++) {
       arr[i] = value
        
    }
  
return arr
}
// -------------------------------------------- qusation 7 complete
/*
The Forbidden Letter
Given a letter and an array of words, return whether the letter does not appear in any of the words.

Examples
forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

forbiddenLetter("m", []) ➞ true
*/
function forbiddenLetter(char, arr) {
    let convertStr = String(arr).includes(char) ? false : true;
   return convertStr
    
	
}


// -------------------------------------------- qusation 8 complete
/*
Designing Rugs
Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no proc is given).
The character passed in through the proc repeating n times.
Examples
makeRug(3, 5) ➞ [
  "#####",
  "#####",
  "#####"
]

makeRug(3, 5, '$')  ➞ [
  "$$$$$",
  "$$$$$",
  "$$$$$"
]

makeRug(2, 2, 'A')  ➞ [
  "AA",
  "AA"
]

*/
function makeRug(m, n, s){
    
    let defaultValue = []
   if(true){
     for (let i = 0; i < n-1; i++) {
       if(typeof s !== "undefined"){
       s += s[i]

       } 
    else   {
        s = ' '
        s +="##"
     
       }
      
    }
   }

     for (let i = 0; i < m; i++) {
        defaultValue.push(s)
    }
	
    return defaultValue.map(v => v.trim())
}


// -------------------------------------------- qusation 9 complete
/*
Tallest Birthday Cake Candles
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Examples
birthdayCakeCandles([4, 4, 1, 3]) ➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.

birthdayCakeCandles([3, 2, 1, 3]) ➞ 2

birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) ➞ 4

*/
function birthdayCakeCandles(candles) {
    let one = candles[0]
    let count = 0
    for (let i = 0; i < candles.length; i++) {
       if(one <= candles[i]){
        count = count + 1
        one = candles[i]
       }
    }
        return count
}   


// -------------------------------------------- qusation 10 complete
