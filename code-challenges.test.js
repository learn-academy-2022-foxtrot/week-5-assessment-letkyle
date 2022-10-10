// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// create a test function named isThisMiddleSchool 

describe("isThisMiddleSchool", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("Takes in a string and returns a coded message. The coded message converts a to 4, e to 3, i to 1, and o to 0.", () => {
    expect(isThisMiddleSchool(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(isThisMiddleSchool(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(isThisMiddleSchool(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//output: ReferenceError: isThisMiddleSchool is not defined -good error

// b) Create the function that makes the test pass.

//make function that takes in a string and returns the mutated string
//need to turn the string into an array using .split
//use .map to create new array where i can mutate the elements
//if else statements to find the specific character and return the wanted
//.toLowerCase to catch the capitol characters
//need to use .join to change convert the array into a string output

const isThisMiddleSchool = (newString) => {
    return newString.split("").map((string) => {
    if (string.toLowerCase() == "a") 
        return "4"
     else if (string.toLowerCase() == "e") 
        return "3"
     else if (string.toLowerCase() == "i") 
        return "1"
     else if (string.toLowerCase() == "o") 
        return "0"
     else 
        return string
    })
    .join("")
}
  
//output: pass

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// create a test function named iDontWantItUnless 

describe("iDontWantItUnless", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]    
    it("Takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(iDontWantItUnless(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(iDontWantItUnless(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//output: ReferenceError: iDontWantItUnless is not defined - good error

// b) Create the function that makes the test pass.

//make function that seeks out words that have a specific letter
//name the function iDontWantItUnless and give it to parameters
// use .filter to citerate through given array and create a new array where the wanted word can be pushed into
// use .tolowercase to catch the capitol characters and use include to get the second parameter
// call on the newArray

const iDontWantItUnless = (array, letter) =>{
    let newArray = array.filter((word) => {
    return word.toLowerCase().includes(letter)
    })
    return newArray
 }

  //output: pass

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

//Elyse i freaking love this problem, in the near future i want to create a card game for my portfolio 

// a) Create a test with expect statements using the variable provided.

// create a test function named myFavoriteHandInPoker

describe("myFavoriteHandInPoker", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect(myFavoriteHandInPoker(hand1)).toEqual(true)
    expect(myFavoriteHandInPoker(hand2)).toEqual(false)
    expect(myFavoriteHandInPoker(hand3)).toEqual(false)
    expect(myFavoriteHandInPoker(hand4)).toEqual(true)
    })
 })

//output: ReferenceError: myFavoriteHandInPoker is not defined -good error

// b) Create the function that makes the test pass.

//make function that will check for triples and doubles 
//not really sure how to do this but solving it in my head,
//i would make it iterate through with .length of array to stop, 
//while it iterates through the array check for nummbers 2 - 10 and if it hits I need it to store it somewhere and I would need one number to show up twice and another to show up 3 or I could use the filter method to pluck the numbers out and see if there is one double pair && a trip pair inside of the array 
//use if else statements and have it return "true" if it checks out else "false"

//output: Test Suites: 1 failed, 1 total
//output: Tests:       1 failed, 2 passed, 3 total