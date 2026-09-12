// Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// Examples
// probability([5, 1, 8, 9], 6) ➞ 50.0

// probability([7, 4, 17, 14, 12, 3], 16) ➞ 16.7

// probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) ➞ 70.0


function probability(arr, num) {
    let count = 0;
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= num){
            count++
        }
        
    }
    // return (100 * count / arr.length).toFixed(1)
    let favbrableValue = arr.reduce((acc,value)=>{
    return    value >= num ? acc+1 : acc
    },0)
    return (100 * (favbrableValue / arr.length)).toFixed(1)

}
// quastion 1 complete

// Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples
// simpleEncoder("Mubashir") ➞ "[[[[[[[["
// // '[' for each character

// simpleEncoder("Matt") ➞ "[[]]"
// // ']' for both 't'

// simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// // Two spaces in between
// Notes
// Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
// Spaces are also characters.

function simpleEncoder(str) {
	let res = []
   
    for (let i = 0; i < str.length; i++) {
        str[i] == "t" || str[i] == " " ? res.push("]") : res.push("[")
    }
    return res.join('')
   
}

// quastion 2 complete

// 25-Mile Marathon
// Return true when the sum of the absolute values in the array is exactly 25. Return false for an empty array.

// Examples
// marathonDistance([1, 2, 3, 4]) ➞ false

// marathonDistance([1, 9, 5, 8, 2]) ➞ true

// marathonDistance([-6, 15, 4]) ➞ true

function marathonDistance(d) {
    let res = 0
	for (let i = 0; i < d.length; i++) {
        if(d[i] < 0){
            res += -d[i]
        }
            else{
           res += d[i]
                
            }        
    }
    // return res  === 25
    return d.reduce((a,b)=> b < 0 ? a+=-b : a+=b ,0) === 25
}
// quastion 3 complete

// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples
// squarePatch(3) ➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

// squarePatch(5) ➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

// squarePatch(1) ➞ [
//   [1]
// ]

// squarePatch(0) ➞ []

function squarePatch(n) {
    let res =[];
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
        temp.push(n)        
        }
        res.push(temp)  
    }
    return res
  
}

// quastion 4 complete

// Poker Deck
// Create a function that generates a complete poker deck.

// A poker deck has 52 cards: 13 cards in each of four suits—diamonds (♦), clubs (♣), hearts (♥), and spades (♠). Use these one-letter suit strings:

// "d" for diamonds
// "c" for clubs
// "h" for hearts
// "s" for spades
// Represent ranks with integers from 2 through 14. The values 11, 12, 13, and 14 represent Jack, Queen, King, and Ace.

// Return an array containing every rank-suit pair exactly once. The deck may be in any order.

// Card examples
// // Five of hearts
// { rank: 5, suit: "h" }

// // Queen of spades
// { rank: 12, suit: "s" }

// // Ace of clubs
// { rank: 14, suit: "c" }
// Calling genDeck() must produce all 52 distinct cards.

function genDeck () {
    let res = []
  for (let i = 0; i < 4; i++) {
       for (let j = 2; j <= 14; j++) {
        
            if(i == 0){
                res.push({
                rank : j ,
                suit : "d"
            })
          }
            if(i == 1){
                res.push({
                rank : j ,
                suit : "c"
            })
            }
            if(i == 2){
                res.push({
                rank : j ,
                suit : "h"
            })
            }
            if(i == 3){
                res.push({
                rank : j ,
                suit : "s"
            })
            }
       }
    
  }
  return res
}
// quastion 5 complete

// Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// Examples
// winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true
// // Your cards can make the number 96
// // Your opponent can make the number 73
// // You win the round since 96 > 73

// winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]) ➞ true

// winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]) ➞ false

// winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]) ➞ false
// Notes
// Return false if you and your opponent reach the same maximum number (see example #4).

function winRound(you, opp) {
	let mynumber = you.sort((a,b)=> b-a)
	let opponentnumber = opp.sort((a,b)=> b-a);
    return +mynumber.slice(0,2).join('') > +opponentnumber.slice(0,2).join('')
}
	
// quastion 7 complete
// Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.
// Examples
// changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

// changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

// changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]

function changeTypes(arr) {
    let res = []
    // console.log(typeof arr[1] == "number" )
	for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "string"){
            res.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()  + "!")
        }   
     else if(typeof arr[i] == "number" ){
        if(arr[i] % 2 == 0){
            res.push(arr[i] + 1)
        }else{
            res.push(arr[i])
        }
        }
         else  if(arr[i]){
        res.push(!arr[i])
      }
    }
    return res
}
// quastion 8 complete

// Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
// Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]

// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]

// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

function pingPong(arr, win) {
    let res = []
    let check = true
	for (let i = 0; i < arr.length; i++) {
        if(win){
            res.push(arr[i]) + res.push("Pong!")

        }
        if(!win){
            if(arr[i] == "Ping!" && check){
                res.push(arr[i])
                res.push("Pong!")
                check = false
            }
        }
        
    }
    return res
}


// quastion  9 complete

// Numbers to Objects
// For each lowercase ASCII character code, create a one-entry object. Use the decimal code as a string key and the character represented by that code as its value. Return all entries in the original order, including duplicates.

// Examples
// numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

// numObj([101, 121, 110, 113, 103]) ➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

// numObj([118, 103, 110]) ➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]

function numObj(arr) {
    let res = []
    let obj = {}
	for (let i = 0; i < arr.length; i++) {
        
      obj[arr[i]] = String.fromCharCode(arr[i])
    }
     res.push(obj)
     return res
}

// quastion 10 complete
