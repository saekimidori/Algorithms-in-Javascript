// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//     it("Should return max character", () => {
//      assert.equal(max("Hello World!"), "l");
//     });
// });

const maxChar = str => {
    // takes a string of characters
    // return the char that appears most often

    // for (const char of str) => create obj to hold char and char counts
    let charCts = {}
    for (const char of str) {
        charCts.hasOwnProperty(char) ? charCts[char] += 1 : charCts[char] = 1
    }
    // recurs = 0
    let recurs = 0
    let maxCharacter = ''
    // for (char in obj) => if char > recurs, then recurs = obj[char]
    for (const char in charCts) {
        if (charCts[char] > recurs) {
            recurs = charCts[char]
            // if obj[char] has value of recurs, max char = char
            if (charCts[char] === recurs) {
              maxCharacter = char
            }          
        }
    }
  return maxCharacter
}