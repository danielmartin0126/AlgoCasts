// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let reverse = str.split("").reduce((rev,char) => char + rev, "")
//     return str === reverse
// }

function palindrome(str) {
   return str.split("").every((char, i) => char === str[str.length - i - 1])
}

function palindrome(str) {
    let arr= str.split("").reduce((rev,char) => char + rev, "")
}

//experimenting with only checking first half of word
function palindrome(str) {
    let checks = []
      for (i = 0; i < (str.length / 2); i++) {
        //check match letter by letter. push results into array 
        str[i] === str[str.length - i - 1] ? checks.push(true) : checks.push(false)
      }
      //checks array contains true/false value of every letter. any false index indicates nonpalindrome
      console.log(!checks.includes(false))
  }

module.exports = palindrome;
