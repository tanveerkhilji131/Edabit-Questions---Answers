// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
// Notes
// N/A

function getBudgets(arr) {
	// return arr.reduce((a,b)=>     a+=b.budget,0)
    let res = 0
    for (let i = 0; i < arr.length; i++) {
           res+= arr[i].budget     
    }
    // return res
}

// quastion 1 complete

// Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples
// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
// Notes
// The array is always filled with items.

function matchLastItem(arr) {
	let lastitem = arr[arr.length-1]
    let itemlesoneitems = arr.slice(0,-1).join("")
    // return itemlesoneitems == lastitem
    let items = []
    for (let i = 0; i < arr.length-1; i++) {
        items.push(arr[i])
    }
    // return items.join("") == lastitem
    return arr.slice(0,-1).reduce((acc,value)=>{
        return acc + value
    },"") == lastitem

}

// quastion 2 complete

// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
}// ➞ 100

// const stolenItems = {
//   painting: 20000,
// } //➞ 20000

// const stolenItems = {}// ➞ "Lucky you!"

function calculateLosses(obj) {
    let total = 0
	 if(Object.values(obj) == 0 ) return  "Lucky you!"
     for (let i = 0; i < Object.values(obj).length; i++) {
       total += Object.values(obj)[i]
        
     }
// return total   
     return Object.values(obj).reduce((acc,value)=>{
        return acc += value
     },0)
}

// quastion 3 complete

// Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

function ascDesNone(arr, str) {
	return str === "Asc" ? arr.sort((a,b) => a-b) : str === "Des" ? arr.sort((a,b) => b-a) : str === "None" ? arr : null
}

// quastion 4 complete

// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.

    
function removeDups(arr) {
	
    let res = []
    for (let i = 0; i < arr.length; i++) {
            if(!res.includes(arr[i])){
              res.push(arr[i])
            } 
    }
    // return res

    return arr.reduce((a,b)=>{
        return !a.includes(b) ? [...a,b] : a
    },[])
}

// quastion 5 complete

// Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]

// multiply([4, 6, 5])(10) ➞ [40, 60, 50]

// multiply([1, 2, 3])(0) ➞ [0, 0, 0]

function multiply(arr){
    return function(b){
        return arr.map(a=>{return  a * b})
    }
}

// quastion 6 complete

// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
// factorChain([1, 2, 4, 8, 16, 32]) ➞ true

// factorChain([1, 1, 1, 1, 1, 1]) ➞ true

// factorChain([2, 4, 6, 7, 12]) ➞ false

// factorChain([10, 1]) ➞ false

function factorChain(arr) {
	let res = null
    for (let i = 0; i < arr.length-1; i++) {  
        if(arr[i+1] % arr[i] == 0){
            res = true
        }else{
            res =  false
        }
    }
    // return res
    return arr.reduce((acc,value,i)=>{
        if(i == arr.length-1 ) return acc
     return acc && ( arr[i+1] % value === 0 )
        
    },true)
}


// quastion 7 complete

// Return the sum of the actual numeric elements in the array. Do not convert numeric strings, and do not count booleans.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
// Notes
// Check the Resources tab for help.

function numbersSum(arr) {
	let total = 0;
    for (let i = 0; i < arr.length; i++) {
       if(typeof arr[i] == "number" ){
        total +=arr[i]
       }
        
    }
    // return total
    // return arr.reduce((acc,value)=>{
    //     return typeof value === "number" ? acc +=value : acc
    // },0)
    
}




// quastion 8 complete

// Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// Examples
// const first = factory(15)
// // returns a function first.

// const arr = [30, 45, 60]
// // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

// first(arr) //➞ [2, 3, 4]
// const second = factory(2)
// // returns a function second.

// const arr = [2, 4, 6]
// // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

// second(arr) //➞ [1, 2, 3]

function factory(num) {
	return function(arr){
        return arr.map(a=>{
            return a / num
        })
    }
}
// const first = factory(15)
// const arr = [30, 45, 60]
// console.log(
//     first(arr)
// ) //➞ [2, 3, 4]


// quastion 9 complete

// Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9])  ➞ 0

function progressDays(runs) {
	let inc = 0
    for (let i = 0; i < runs.length -1; i++) {
        if(runs[i] < runs[i+1]){
            inc++
        }
       
    }
    // return inc
    return runs.reduce((acc,v,i)=>{
        return v < runs[i+1] ? acc +=1 : acc
    },0)
}


// quastion 10 complete
