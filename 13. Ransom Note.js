// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });
// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });
// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });
// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

const canCreateRansomNote = ransomNote => {
    // takes a string
    // return a boolean if ransom note can be cut out and created using magazine string
    // "sit ad est sint" => true

    const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    // loop thru magazine str and memo words and num of appearances => forEach, hasOwnProperty
    let memoMag = {}
    let memoNote = {}
    magazine.split(' ').forEach(word => memoMag.hasOwnProperty(word) ? memoMag[word] += 1 : memoMag[word] = 1)
    // loop thru ransom note, memo words and ct, check if each word is <= the word ct value in magazine memo obj
    ransomNote.split(' ').forEach(word => memoNote.hasOwnProperty(word) ? memoNote[word] += 1 : memoNote[word] = 1)

    return ransomNote.split(' ').every(word => memoNote[word] <= memoMag[word])
}