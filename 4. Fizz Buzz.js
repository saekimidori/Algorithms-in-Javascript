// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const fizzBuzz = num => {
    // takes a number
    // print out every integer from 1 to num
        // when divisible by 2, print 'Fizz'
        // when divisible by 3, print 'Buzz'
        // when divisible by 2 and 3, print 'Fizz Buzz'

    // for loop, i = 1, i <= num
    for (i = 1; i <= num; i++) {
        // i % 2 === 0 && i % 3 === 0 => console.log 'Fizz Buzz'
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('Fizz Buzz')
        // i % 2 === 0 => 'Fizz'
        } else if (i % 2 === 0) {
            console.log('Fizz')
        // i % 3 === 0 => 'Buzz'
        } else if (i % 3 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}