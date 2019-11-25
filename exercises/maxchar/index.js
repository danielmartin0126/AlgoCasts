// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const count = {}
    let max = 0
    let maxCharacter = ""
    
    str.split("").forEach(char=> count[char] ? count[char] += 1 : count[char] = 1)
    for (let char in count) {
      if (count[char] > max) {
        max = count[char]
        maxCharacter = char
      } 
      return maxCharacter
    }
}

module.exports = maxChar;
