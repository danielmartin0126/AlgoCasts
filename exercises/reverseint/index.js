// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //convert int to string and reverse. parse back to int and multiply by Math.sign to convert to negative if needed
    return parseInt(n.toString().split("").reduce((rev,char) => char + rev, ""))
    * Math.sign(n)
}

module.exports = reverseInt;
