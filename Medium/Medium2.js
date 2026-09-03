
// Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// Examples
// battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]) ➞ ".286"

// battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) ➞ ".350"

// battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]) ➞ ".273"

function battingAvg(arr) {
    let totalhits = 0
    let totalatbets = 0
    for (let i = 0; i < arr.length; i++) {
           totalhits += arr[i][0]
           totalatbets += arr[i][1]
   
    }
    return (totalhits / totalatbets).toFixed(3).slice(1)

	
}


// quastion 1 complete

// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples
// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A

function clone(arr) {
    let clone = [].concat(arr)
   
	return [...arr,clone]
}
// quastion 2 complete

// Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
// Notes
// The elements must be exactly identical for there to be a jackpot.

function testJackpot(result) {
    let check = result[0]
    let res = null
	for (const vlaues of result) {
        res = check == vlaues[0] ? true :false
    }
    return res

}

// quastion 3 complete


// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"
// Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.


function findNemo(sentence) {
   let newarr = sentence.split(" ")
//    let a =  newarr.indexOf("Nemo") + 1
// 	return `I found Nemo at ${a}!`
   for (const value of newarr) {
      if(value == "Nemo") {return `I found Nemo at ${newarr.indexOf("Nemo") + 1}!` }
   }
}



// quastion 4 complete

// Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

// totalVolume([1, 1, 1]) ➞ 1
// Notes
// You will be given at least one box.
// Each box will always have three dimensions included.

function totalVolume(...boxes){
   

    let total = 0
   for (const box of boxes) {
    let multi = 1
 
    for (let i = 0; i < box.length; i++) {
        multi *= box[i]
        
    }
    total +=multi
}
    return total
   
}


// quastion 5 complete

// Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)
// Notes
// All items in the array will be integers.

function indexMultiplier(arr) {
	let res = 0
    for (let i = 0; i < arr.length; i++) {
      res += arr[i] * i
        
    }
    // return res
    return arr.reduce((a,b,i)=>{
     return   a+=b*i
    },0)
}


// quastion 6 complete

// Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.

function isSpecialArray(arr) {
    let evenres = []
    let oddres = []

	for (let i = 0; i < arr.length; i+=2) {
      evenres.push(arr[i])
         
    }	for (let i = 1; i < arr.length; i+=2) {
      oddres.push(arr[i])    
    }
    return evenres.every(a=>  a % 2 == 0) && oddres.every(a=> a % 2 !== 0)
   
}
// quastion 7 complete

// Instant JAZZ
// Append 7 to every chord that does not already end in 7. Leave chords already ending in 7 unchanged, and return all chords in their original order.

// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.

function jazzify(arr) {
    let res = []
	for (let i = 0; i < arr.length; i++) {
    if(arr[i][arr[i].length-1] != 7){
        res.push(arr[i] + "7")
    }
   else{
        return    arr
           }
}
   return res

}

console.log(
    jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]
    // jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]


)
// quastion 8 complete

// ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.

// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)

// parseURL("https://developer.mozilla.org/en-US/Web/JavaScript")
// // returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// // the protocol = https
// // the host = developer.mozilla.org
// // the path = en-US/Web/JavaScript
// From the parsedURL result you could assign these segments using ES6 array destructuring.

// Challenge
// Assign the variables protocol, host, path inside the brackets of the given string.
// Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.
let data = 
[
  "https://developer.mozilla.org/en-US/Web/JavaScript",
  "https",
  "developer.mozilla.org",
  "en-US/Web/JavaScript"
] 

 const [_,protocol,host,path] = data

// quastion 9 complete

// Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

// [
//   [ 0, 1, 0, 1, 1 ],
//   [ 1, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1 ],
//   [ 1, 0, 0, 1, 0 ]
// ]
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.
// Notes
// Graphs may have between 0 and 25,000 nodes.
// Time Limit: 100 milliseconds.
// 1
// 2
// 3
// function isAdjacent(matrix, node1, node2) {
	
// }

// Check

function isAdjacent(matrix, node1, node2) {
     return matrix[node1][node2] === 1
}

console.log(
   isAdjacent([
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0]
], 0, 2)

)

// quastion 10 complete
