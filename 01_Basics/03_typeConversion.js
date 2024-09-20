console.log("\n\n\n")

let score = 33

console.log(score)
console.log(typeof score)
console.log(typeof (score))

let stringOfScore = String(score)

console.log(stringOfScore)
console.log(typeof stringOfScore)

let scoreInString = "33"

console.log(typeof scoreInString)
console.log(typeof Number(scoreInString)) // Not changes in actual string
console.log(typeof scoreInString) // you can see here

let nonScore = "33ab"

console.log(typeof nonScore)

let numnonScore = Number(nonScore)

console.log(numnonScore)
console.log(typeof numnonScore)

let isLoggedIn = 1

console.log(typeof isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

let checkVar = NaN  // also check for NaN, Undefined, null, empty string("")

console.log(Boolean(checkVar)) // also check for Number(checkVar)

/*

Notes : 

1. NaN => Not a Number 
-> While converting "33abc" to a Number 

2. false
-> While converting  0, empty string, null, undefined, NaN to boolean 

3. true
-> While converting 1, non empty string to boolean

*/

console.log("\n\n\n")