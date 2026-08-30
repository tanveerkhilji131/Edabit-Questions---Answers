
// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

function minMax(arr) {
  //1
	let max = Math.max(...arr)
	let min = Math.min(...arr)
  return [min,max]
  //2
  let order = arr.sort((a,b)=>{return b-a})
  return [order[order.length-1],order[0]]
}

//  --------------------------------- qustion 1 complete

// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// Notes
// Note the strict inequality (see example #3).

function canNest(arr1, arr2) {
  let res =[]
  let sortarr1 = arr1.sort((a,b)=>{return b-a})
  let sortarr2 = arr2.sort((a,b)=>{return b-a})
  console.log(sortarr1.at(-1))
  return sortarr1.at(-1) > sortarr2.at(-1) && sortarr1.at(0) < sortarr2.at(0)

}
//  --------------------------------- qustion 2 complete

// Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples
// seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

// seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

// seriesResistance([0.5, 0.5]) ➞ "1 ohm"

function seriesResistance(arr) {
  let res = 0
	for (let i = 0; i < arr.length; i++) {
    res += arr[i] 
  }
  return res <= 1 ? res + " ohm" : res + " ohms"
}

//  --------------------------------- qustion 3 complete

// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

function tuckIn(arr1, arr2) {
  let res = [...arr2]
  res.push(arr1.at(-1))
  res.unshift(arr1.at(0))
  return res

}


//  --------------------------------- qustion 4 complete


// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

function numberSplit(n) {
  let res = []
    let a = 0
	for (let i = 0; i < 2; i++) {
   if(i == 0){
     res.push(Math.floor(n / 2))
    a = Math.floor(n / 2)
   }
   if(i == 1){
    res.push((n - Math.floor(a)))
   }
  }
  return res
}
//  --------------------------------- qustion 5 complete

// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
function filterArray(arr) {
  //1
	return arr.filter(a=>{
    return typeof a == "number"
  })
  //2
  return arr.reduce((current,vlaue)=>{ 
     return typeof vlaue == "number" ? [...current,vlaue] : current
  },[])
  //3
  let res = []
  for (let i = 0; i < arr.length; i++) {
       typeof arr[i] == "number" ? res.push(arr[i]) :  null
  }
  return res
}
//  --------------------------------- qustion 6 complete

// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

function sumOfCubes(nums) {
  //1
  let res = 0
	for (const value of nums) {
      res += value ** 3
  }
  return res
  //2
    let value = nums.map(a=>{
      return a ** 3
    })
  //3
    return value.reduce((a,b)=>{
     return a += b
    },0)
  
}
// //  --------------------------------- qustion 7  complete
// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

function getOnlyEvens(nums) {
  //1
	return nums.filter((a,b)=>{
    return a % 2 ==0 && b % 2 == 0 
  })
  //2
  let res = []
  for (let i = 0; i < nums.length; i++) {
     nums[i] % 2 == 0 && i % 2 ==0 ? res.push(nums[i]) : null
  }
  return res
  //3
    return nums.reduce((a,b,c)=>{
       b % 2 ==0 &&  c % 2 == 0 ? a.push(b) : null
       return a
    },[])
}

//  --------------------------------- qustion 8 complete

// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]

function sortByLength(arr) {
	return arr.sort()
}

//  --------------------------------- qustion 9 complete
// Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1

function calculateDifference(obj, limit) {
	let arrvalues=  Object.values(obj) 
  let totalloss = 0
  for (let i = 0; i < arrvalues.length; i++) {
    totalloss += arrvalues[i]
    
  }
  return totalloss - limit
}

//  --------------------------------- qustion 10 complete
