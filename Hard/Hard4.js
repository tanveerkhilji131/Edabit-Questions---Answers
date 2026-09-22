// An Ordered Matrix
// Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

// Examples
// orderedMatrix(5, 5) ➞ [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]

// orderedMatrix(1, 1) ➞ [[1]]

// orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]]
function orderedMatrix(a, b) {
    let res = []
    let ofset = 0
	for (let i = 0; i < a; i++) {
        let temp = []
       
        for (let j = 1; j <= b; j++) {
         
            ofset = i * b
            temp.push(j + ofset)
        }
        res.push(temp)
        
    }
    return res
    
}
console.log(
    orderedMatrix(5, 5) 
//      [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]
)

// question 1 complete
// question 2 complete
// question 3 complete
// question 4 complete
// question 5 complete
// question 6 complete
// question 7 complete
// question 8 complete
// question 9 complete
// question 10 complete
