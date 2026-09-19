// Seven Boom!
// Create a function that takes an aay of numbers and return "Boom!" if the digit 7 appears in the aay. Otherwise, return "there is no 7 in the aay".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the aay"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.



function sevenBoom(a) {
    let res = ""
    for (let i = 0; i < a.length; i++) {
       res += a[i]
        
    }
    // return res.includes(7) ? "Boom!" : "there is no 7 in the aay"

    return a.reduce((a,b)=>{
       return a += b
    },"").includes(7) ?   "Boom!" : "there is no 7 in the aay"
}
// question 1 complete

// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-aay of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an aay.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples
// positiveBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

// positiveBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

// positiveBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

function positiveBoomerangs(a) {
    let positive = 0;
	for (let i = 0; i < a.length; i++) {
        if(a[i] == a[i+2] && a[i+1] != a[i]){
            positive++
        }
        
    }
    return positive
}
// question 2 complete

// Length of a Nested aay
// // The .length property on an aay will return the number of elements in the aay. For example, the aay below contains 2 elements:

// // [1, [2, 3]]
// // // 2 elements, number 1 and aay [2, 3]
// // Suppose we instead wanted to know the total number of non-nested items in the nested aay. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// // Write a function that returns the total number of non-nested items in a nested aay.

// // Examples
// // getLength([1, [2, 3]]) ➞ 3

// // getLength([1, [2, [3, 4]]]) ➞ 4

// // getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// // getLength([1, [2], 1, [2], 1]) ➞ 5
// // Notes
// // An empty aay should return 0.

function getLength(a) {
	// return a.flat(Infinity).length
    // return a.reduce((a,b)=> a + b.flat(Infinity).length)

    
}
// question 3 complete

// Numbers in Strings
// Create a function that takes an aay of strings and returns an aay with only the strings that have numbers in them. If there are no strings containing numbers, return an empty aay.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInStr(a) {
    let res = []
    let positive = [];
    for (let i = 0; i < a.length; i++) { 
        for (let j = 0; j < a[i].length; j++) {
            if( !isNaN(+a[i][j]) == true){
                res.push(a[i])
                positive.push(i)
                break;
            }
            
        }
        
    }
    return res
  
}

// question 4 complete

// Positive Dominant
// An aay is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an aay is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false

function isPositiveDominant(a) {
    let positive = 0
    let nagative = 0
	// for (let i = 0; i < a.length; i++) {
    //     let temp = 0
    //     let temp2 = 0
    //     for (let j = 0; j < a.length; j++) {
    //         if(i  ==  j){
    //             continue;
    //         }
    //         if(a[i] == a[j] && a[i]> 0 && a[j]>0){
    //             positive = 1
    //         }
    //         if(a[i] !== a[j] && a[i] > 0 && a[j]> 0){
    //            temp =1
    //         }
    //          if(a[i] == a[j] && a[i]< 0 && a[j]<0){
    //             nagative = 1
    //         }
    //         if(a[i] !== a[j] && a[i] < 0 && a[j]< 0){
    //             nagative++
    //         }
            
    //     }
    //     positive += temp
    //     nagative += temp2
        
    // }
    // return positive 
      let uniqe = []
      for (let i = 0; i < a.length; i++) {

        if (!uniqe.includes(a[i])) {

            uniqe.push(a[i])

            if (a[i] > 0) {
                positive++
            } else if (a[i] < 0) {
                nagative++
            }
        }
    }
    
       return positive > nagative

   
}


// question 5 complete

// Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

function getTotalPrice(groceries) {
	let totalofPrice = 0;
    for (let i = 0; i < groceries.length; i++) {
        totalofPrice += groceries[i].price * groceries[i].quantity   
    }
    return totalofPrice.toFixed(1)
}


// question 6 complete

// Case and Index Inverter
// Write a function that takes a string input and returns the string in a reversed case and order.

// Examples
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

// invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

// invert("step on NO PETS") ➞ "step on NO PETS"

// invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"

function invert(str) {
   let res = ""
    for (let i = str.length -1; 0 <= i; i--) {
 
        if(str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase()
        }else{
            res += str[i].toUpperCase()
        }
       
    }
   
    return res
 
   
    // return [...str].reverse().map(a=>{
    //     return  a == a.toUpperCase()  ? a.toLowerCase() : a.toUpperCase()
    // }).join("")
}

// question 7 complete
// Switching Between Pencils
// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14
// Examples
// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
// Notes

function colorPatternTimes(cols) {
    let count = 1
    let swich = 0;
	for (let i = 0; i < cols.length-1; i++) {
       count +=1
       if(cols[i] !== cols[i + 1]){
        swich +=1
       }
    }
    return count * 2 + swich
}
// question 8 complete

// Sales by Match
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Create a function that returns an integer representing the number of matching pairs of socks that are available.

// Examples
// sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3

// sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4

// sockMerchant([]) ➞ 0

// Sales by Match
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Create a function that returns an integer representing the number of matching pairs of socks that are available.

// Examples
// sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3

// sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4

// sockMerchant([]) ➞ 0

function sockMerchant(arr) {
    let total = 0;
	for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if(i == j){
                continue;
            }
            if(arr[i] == arr[j]){
                count = 1
            }
            
        }
        total += count
        
    }
    return Math.floor(total /2)
}


// question 9 complete

// Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

// Examples
// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// // number = 100

// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// // number = 50

// { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// // number = 70
// Notes
// There will always be a corresponding Rammstein bottle for the number given.
// There will never be 2 Rammstein bottles with the same number.
// You always return one Rammstein bottle.

function getVodkaBottle(obj, num) {
	for (const key in obj) {
      if(obj[key] == num){
        if( key.includes("Rammstein")){
            return key
        }
      }
        
        
    }
   
}

// question 10 complete


