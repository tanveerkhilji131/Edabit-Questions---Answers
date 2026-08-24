/*
Cleaning Up Messy Arrays
Create a function that takes an array. This array will contain numbers represented as strings.

Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

Return an empty array if there are no even numbers, or odd.

Examples
cleanUpArray(["8"]) ➞ [[8], []]

cleanUpArray(["11"]) ➞ [[], [11]]

cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
*/
function cleanUpArray(arr) {
    let res =[[],[]]
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            res[0].push(Number(arr[i])) 
        }
        else{
            res[1].push(Number(arr[i]))
        }
    }
    return res
}

// -------------------------------------------- qusation 1 complete
/*
Largest Numbers
Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

Examples
largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

largestNumbers(0, [1, 3, 4, 2]) ➞ []
*/
function largestNumbers(n, arr) {
    let res = [];
   let sortArray=  arr.sort()
    for (let i = n; i < sortArray.length; i++) {
     res.push(arr[i])
    }
    return res

}

// -------------------------------------------- qusation 2 complete
/*
Less Than 100 Array Remix
Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

Examples
arrayLessThan100([5, 57]) ➞ true

arrayLessThan100([77, 30]) ➞ false

arrayLessThan100([0]) ➞ true
*/
function arrayLessThan100(arr) {
    let sum = 0
	for (let i = 0; i < arr.length; i++) {
      sum +=arr[i] 
    }
       if(sum < 100){
            return true
        }{
            return false
        }
}

// -------------------------------------------- qusation 3 complete
/*
Return Last Item
Create a function that returns the last value of the last item in an array or string.

Examples
lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

lastItem([]) ➞ undefined

*/
function lastItem(input) {
	if(Array.isArray(input)){
        return input[input.length-1]
    }else{
        let convertArr = Array.from(input)
        return convertArr[convertArr.length-1]
    }
   
}
// -------------------------------------------- qusation 4 complete
/*
Factors of a Given Number
Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

Examples
findFactors(9) ➞ [1, 3, 9]
// 9 has three factors 1, 3 and 9

findFactors(12) ➞ [1, 2, 3, 4, 6, 12]

findFactors(20) ➞ [1, 2, 4, 5, 10, 20]

findFactors(0) ➞ []
// 0 has no factors
*/
function findFactors(num) {
    let res = []
	for (let i = 1; i <= num; i++) {
       if(num % i == 0) {
        res.push(i)
       }
        
    }
    return res
}
// -------------------------------------------- qusation 5 complete
/*
Sum of Minimums
Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

Examples
sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20
*/
function sumMinimums(arr) {
    let incrment = 0
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i] 
    let min = array[0]
    for (let j = 1; j < array.length; j++) {
      if(arr[j] < min){
        min = arr[j]
      }
        
    }
    incrment+=min

  }
  return incrment

}

// -------------------------------------------- qusation 6 complete
/*
Arithmetic Progression
In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

First element of the sequence first
Constant difference between the elements diff
Total numbers in the sequence n
Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

Examples
arithmeticProgression(1, 2, 5) ➞ "1, 3, 5, 7, 9"

arithmeticProgression(1, 0, 5) ➞ "1, 1, 1, 1, 1"

arithmeticProgression(1, -3, 10) ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
*/
function arithmeticProgression(start, diff, n) {
    let res = []
	for (let i = 0; i < n; i ++) {

   res.push(start +  (i * diff))
   
        
    }
    return res.join(",")
}
// -------------------------------------------- qusation 7 complete
/*
Trimmed Averages
Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

Examples
trimmedAverages([4, 5, 7, 100]) ➞ 6
// Average of 5 and 7

trimmedAverages([10, 25, 5, 15, 20]) ➞ 15
// Average of 10, 15 and 20

trimmedAverages([1, 1, 1]) ➞ 1
// 1
*/
function trimmedAverages(arr) {

    let min  = Math.min(...arr)
    let max  = Math.max(...arr)
    let sum = 0
    let newarr = []
   for (let i = 0; i < arr.length; i++) {
    if( arr[i] == min == false && arr[i] == max == false){
        sum +=arr[i]
      
    }
    if(arr[i] == max == true || arr[i] == min == false == false ){
        newarr.push(arr[i])
    }

   }
   let average = sum / newarr.length
   console.log(average)
  

}
// -------------------------------------------- qusation 8 complete
/*
Age Difference Between Spouses
Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

Examples
ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"

ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."

ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"
*/
function ageDifference(ages) {
    let aurat = Math.max(...ages)
    let mard = 0
    let res = 0
    let arr = []
  for (let i = 0; i < ages.length; i++) {
    if(aurat == ages[i] == true){
        arr.push(ages[i])
        if(arr.length == 2){
             return "No age difference between spouses."
        }
    }else{
        mard =  Math.max(ages[i])
        
    }
        res = aurat - mard
 

  }
    return `${res} Years`
}

// -------------------------------------------- qusation 9 complete
/*
Outlier Number
Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

Examples
outlierNumber([2, 3, 4]) ➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.

outlierNumber([1, 2, 3]) ➞ 2

outlierNumber([4, 1, 3, 5, 9]) ➞ 4
*/
function outlierNumber(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < 3; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let lookForEven = oddCount > evenCount ? true : false;

  for (let i = 0; i < arr.length; i++) {
    if (lookForEven && arr[i] % 2 === 0) {
      return arr[i]; 
    }
    if (!lookForEven && arr[i] % 2 !== 0) {
      return arr[i]; 
    }
  }
}



// -------------------------------------------- qusation 10 complete

