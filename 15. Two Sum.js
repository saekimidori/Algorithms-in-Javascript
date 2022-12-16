// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

const sumPairs = (array, sum) => {
    // takes an array of nums and a num representing sum
    // return all pairs of nums that add up to given sum
    // nums can be used more than once
    // input: arr = [1, 2, 2, 3, 4], sum = 4
    // output: [[2, 2], [3, 1]]

    // create pairs array, and memo nums in array
    let pairs = []
    let memo = []
    for (let num of array) {
      // for each num in array, subtract it from sum
      const sumDif = sum - num
      // if memo includes difference, push num and dif into pairs array
      if (memo.includes(sumDif)) 
          pairs.push([num, sumDif])          
      // push num into memo array
      memo.push(num)
    }
    return pairs
}