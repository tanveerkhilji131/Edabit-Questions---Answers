
// Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

function findBrokenKeys(str1, str2) {
    let clonearr = []
	// for (let i = 0; i < str1.length; i++) {
    //   if(str1[i] !== str2[i]){
    //     if(!clonearr.includes(str1[i])){
    //     clonearr.push(str1[i])

    //     }
    //   }
        
    // }
    // return clonearr

    let str = ""
   return  [...str1].filter((a,i)=> {
     return a !== str2[i] && !str.includes(a) ? str += a   : null  
    })
  
}
// question 1 complete
// Combined Consecutive Sequence
// Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

// Examples
// consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true

// consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false

// consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false

// consecutiveCombo([44, 46], [45]) ➞ true

function consecutiveCombo(a1, a2) {
	let conbine = [...a1,...a2].sort((a,b)=> a-b)
    let count = conbine[0]
   for (let i = 0; i < conbine.length; i++) {
            if(conbine[i] == count){
                count+=1
            }
    
   }
   return count -1 == Math.max(...conbine)
   //2
   return conbine.reduce((acc,value)=>{
        return value == acc ? acc+1 : acc
   },conbine[0])  -1 == Math.max(...conbine)
  
}


// question 2 complete
// Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

function commonElements(arr1, arr2) {
    let clonearr = []
	for (let i = 0; i < arr2.length; i++) {
       if(arr1.includes(arr2[i])){
        clonearr.push(arr2[i])
       } 
    }
    // return clonearr
    //2
    return arr2.filter(a=> arr1.includes(a))
}

// question 3 complete

// How Many Unique Styles?
// There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

// Examples
// uniqueStyles([
//   "Dub,Dancehall",
//   "Industrial,Heavy Metal",
//   "Techno,Dubstep",
//   "Synth-pop,Euro-Disco",
//   "Industrial,Techno,Minimal"
// ]) ➞ 9

// uniqueStyles([
//   "Soul",
//   "House,Folk",
//   "Trance,Downtempo,Big Beat,House",
//   "Deep House",
//   "Soul"
// ]) ➞ 7

function uniqueStyles(albums) {
    let a = []
    let count = 0;
    for (let i = 0; i < albums.length; i++) {
    let check = true
        let arr = albums[i].split(",")
       for (let j = 0; j < arr.length; j++) {
          if(!a.includes(arr[j])){
            a.push(arr[j])
          }     
       }
    }
    return a.length 
}

// question 4 complete

// Mahjong Tiles
// Your goal is to create a function that returns an array with a string for each of the 108 tiles in the following format:

// "rank suit"
// Where rank is a number from 1 to 9 and suit is one of the three suits (tong, tiao, wan), both written in the pinyin transcription of Mandarin Chinese (for numbers see table below).

// Number	Character	Pinyin
// 1	一	yi
// 2	二	er
// 3	三	san
// 4	四	si
// 5	五	wu
// 6	六	liu
// 7	七	qi
// 8	八	ba
// 9	九	jiu
// Three of the tiles have special names. Each of the 4 copies of these tiles should be repclonearrented by their names only (no suit, no rank):

// One of tong is called bing gan (饼干, cookie)
// Two of tong is called yan jing (眼镜, glasses)
// One of tiao is called ji (鸡, chicken)
// Examples of tiles
// Five of tong ➞ "wu tong"

// Seven of wan ➞ "qi wan"

// One of tiao ➞ "ji"

// Three of tiao ➞ "san tiao"
function genTiles () {
  let ranks = [
    "yi",
    "er",
    "san",
    "si",
    "wu",
    "liu",
    "qi",
    "ba",
    "jiu"
]

    let onearr =  ranks.map(a=>{
        return a + " tong"
    })
     let twoarr =  ranks.map(a=>{
        return a + " tiao"
    })
     let threearr =  ranks.map(a=>{
        return a + " wan"
    })
    let mixarr = [...onearr,...twoarr,...threearr]
    let clonearr = []
    for (let i = 0; i < 4; i++) {
       clonearr.push(mixarr)
        
    }
    let final108arr =  clonearr.flat()
   for (const values in final108arr) {
        if(final108arr[values] == "yi tong" ){
            final108arr[values] = "bing gan"
        }
      else  if(final108arr[values] == "er tong" ){
            final108arr[values] = "yan jing"
        }
       else  if(final108arr[values] == "yi tiao" ){
            final108arr[values] = "ji"
        }
   }
   return final108arr
}
  // genTiles()

// question 5 complete

// Learn Lodash: _.difference, Find the Difference in Arrays
// According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of clonearrult values are determined by the first array.

// If you wanted to use this function in the real world you would just import lodash and use it but this challenge requiclonearr you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .

// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The any number of arrays containing the values to exclude.
// Returns
// (Array): Returns the new array of filtered values.
// Examples
// difference([2, 1], [2, 3]);  // => [1]

// difference(["banana", "orange", "apple"], ["orange", "apple"]);  // => ["banana"]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

function difference(array,arrays) {
  
   let res = []
  for (let i = 0; i < array.length; i++) {
   let check = false
    for (let j = 0; j < arrays.length; j++) {
            if(array[i] == arrays[j]){
            check = true
        }
    }
     if(!check){
        res.push(array[i])
    }
  }
  return res
 
}

// question 6 complete

// Pluralize!
// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

// Examples
// pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

// pluralize(["table", "table", "table"]) ➞ ["tables"]

// pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]

function pluralize(arr) {
    let res  = []
	for (let i = 0; i < arr.length; i++) {
       if(!res.includes(arr[i])){
        res.push(arr[i])
       }
        
    }
    // return res
    // let res2 = []
    // return arr.filter(a=>{
    //     if(!res2.includes(a)){
    //        return res2.push(a)
    //     }
    // })
    // return res2
}


// question 7 complete

// The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

function chosenWine(wines) {
    let res = []
           if(wines.length == 0) return null

	for (const key in wines) {
        let count = 0
       if(wines.length > 2){
           res.push(wines[key].price)
       }
       else if(wines.length <= 1){
        return wines[key].name
       }     
    }

    let secondchipprice =  res.sort((a,b)=> a-b)[1]
    for (const value of wines) {
       if(value.price == secondchipprice){
        return value.name
       }
    }
   
}


// question 8 complete

// Concatenate to Form Target Array
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

// Examples
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.

// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Missing 6 from target array.

function canConcatenate(arr, target) {
    let res = []
    let count = 0
	let sortedarr=  arr.flat(Infinity).sort((a,b)=> a-b) 
    let unique = []
    for (const value of sortedarr) {
        if(!unique.includes(value)){
            unique.push(value)
        }
    }
   for (let i = 0; i < target.length; i++) {
      if(unique[i] ==  target[i]){
        count +=1
      }
   }
   return count == target.length 
}


// question 9 complete

// Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// Examples
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }


// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }


// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }
// Notes


function countNumberOfOccurrences(obj) {
    let object = {}
    let res = []
   
	for (const value in obj) {
       res.push(obj[value])
    }

     for (let i = 0; i < res.length; i++) {
          let count = 0
        for (let j = 0; j < res.length; j++) {
           
            if(res[i] == res[j]){
                 count += 1
              
            }
        }
      
           object[res[i]] = count

        
     }
     return object
        

}

console.log(
    countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) //➞ { moron: 2, scumbag: 1, idiot: 2 }
)
// question 10 complete
