// Given a string of characters as input, write a function that returns it with the characters reversed.

// solve it without reverse method

const reverseString = str => {
    // takes a string
    // return string with chars reversed
    // 'Hello World' => 'dlroW olleH'

    // split, forEach char => unshift in new arr, join
    let newStr = []
    str.split('').forEach(char => newStr.unshift(char))
    return newStr.join('')
}