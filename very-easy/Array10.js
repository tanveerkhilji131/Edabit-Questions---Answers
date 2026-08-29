
/*
Eliminate Odd Numbers within an Array
Create a function that takes an array of numbers and returns only the even values.

Examples
noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]
*/
function noOdds(arr) {
    // 1
	return arr.filter(a=> a % 2 ==0)
    // 2
    return arr.reduce((a,b)=>{
         return b % 2 === 0 ? [...a,b] : a     
    },[])
}

// -------------------------------------------- qusation 1 complete
/*
Multiply by Length
Create a function to multiply all of the values in an array by the amount of values in the given array.

Examples
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])

multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]

multiplyByLength([0]) ➞ ([0])
*/
function multiplyByLength(arr) {
    // 1
	return arr.map(a=>{
        return a * arr.length
    })
    // 2
    return arr.reduce((current,value)=>{   
         current.push(value * arr.length)
         return current
    },[])
    // 3
    let res = []
    for (let i = 0; i < arr.length; i++) {
         res.push(arr[i] * arr.length)
        
    }
    return res
}
// -------------------------------------------- qusation 2 complete
/*
Remove Null from an Array
Create a function to remove all null values from an array.

Examples
removeNull(["a", null, "b", null]) ➞ ["a", "b"]

removeNull([null, null, null, null, null]) ➞ []

removeNull([7, 8, null, 9]) ➞ [7, 8, 9]

*/

function removeNull(arr) {
    // 1
	return arr.filter(a=>{
        return a !== null
    })
    // 2
    return arr.reduce((a,b)=>{
        return b !== null ? [...a,b] : a
    },[])
    // 3
    let res = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] !== null ? res.push(arr[i]) : null
    }
    return res
}

// -------------------------------------------- qusation 3 complete
/*
Hurdle Jump

JavaScript
Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

Examples
hurdleJump([1, 2, 3, 4, 5], 5) ➞ true

hurdleJump([5, 5, 3, 4, 5], 3) ➞ false

hurdleJump([5, 4, 5, 6], 10) ➞ true

hurdleJump([1, 2, 1], 1) ➞ false
*/
function hurdleJump(arr,hight){
    //1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <= hight){
            return true
        }else{
            return false
        }
        
    }
    //2
    return arr.every(a=>{
        return hight >= a
    })
    //3
    return arr.reduce((a,b)=>{
    return b <= a ?  true : false
    },hight)
}

// -------------------------------------------- qusation 4 complete

/*
Find the Smallest Number in an Array
Create a function that takes an array of numbers and returns the smallest number in the set.

Examples
findSmallestNum([34, 15, 88, 2]) ➞ 2

findSmallestNum([34, -345, -1, 100]) ➞ -345

findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

findSmallestNum([7, 7, 7]) ➞ 7
*/
function findSmallestNum(arr) {
    // 1
    let smallestnum = arr[0]
	for (let i = 0; i < arr.length; i++) {
       if(arr[i] < smallestnum){
        smallestnum = arr[i]
       }
        
    }
    // return smallestnum
    //2
  return Math.min(...arr)
    //3
    return arr.reduce((current,value)=>{
       return value < current ? current = value : value
    },smallestnum)
}

// -------------------------------------------- qusation 5 complete

/*
Return the First and Last Elements in an Array
Create a function that takes an array of values and returns the first and last values in a new array.

Examples
firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

*/
function firstLast(arr) {
    //1
	return [arr[0],arr[arr.length-1]]
    //2
   return arr.reduce((a,b)=>{
        a.push(b)
        return [a[0],a[a.length-1]]
    },[])
}

// -------------------------------------------- qusation 6 complete

/*
Sandwich Fillings
Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

Examples
getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

Notes
The first and last elements will always be "bread".

*/

function getFillings(sandwich) {
    //1
	sandwich.pop()
	sandwich.shift()
    return sandwich
    //2
    return sandwich.slice(1,-1)
    //3
    let res = []
    for (let i = 0; i < sandwich.length; i++) {
        if(sandwich[i] !== "bread"){
            res.push(sandwich[i])
        }
        
    }
    return res
}

// -------------------------------------------- qusation 7 complete

/*
Difference of Max and Min Numbers in Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.

Examples
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
Notes
N/A
*/
function diffMaxMin(arr) {
    //1
	// let max = Math.max(...arr)
	// let min = Math.min(...arr)
    // return max - min
    //2
    let lowtohigh = arr.sort((a,b)=>{return a - b})
    return lowtohigh[lowtohigh.length-1] - lowtohigh[0]
    //3
    
    let max= arr.reduce((a,b)=>{      return b > a ? a = b :   a   },arr[0])
    let min = arr.reduce((a,b)=>{      return b < a ? a = b :  a   },arr[0])
    return max - min
   

}

// -------------------------------------------- qusation 8 complete

/*
Generate a Countdown of Numbers in an Array
Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

Examples
countdown(5) ➞ [5, 4, 3, 2, 1, 0]

countdown(1) ➞ [1, 0]

countdown(0) ➞ [0]
Notes
The argument will always be greater than or equal to zero.
*/
function countdown(start) {
    let res = []
	for (let i = start; i >= 0; i--) {
        res.push(i)
        
    }
    return res
}
// -------------------------------------------- qusation 9 complete

/*
Mubashir wants to swap two given numbers!

It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
Examples
swap(100, 200) ➞ [200, 100]

swap(44, 33) ➞ [33, 44]

swap(21, 12) ➞ [12, 21]

*/
function swap(a, b) {
    //1
	return [a,b] = [b,a]
    //2
    a = a + b;
    b = a - b;
    a = a - b
    return [a,b]
    

}

// -------------------------------------------- qusation 10 complete
