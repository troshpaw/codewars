
/* Descending Order

Your task is to make a function that can take any non-negative integer as an 
argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321 */

// Решение 1:
const descendingOrderEasy = (inputNumber) => {
 
    const b = inputNumber.toString()

    const c = b.split('')

    const e = c.sort((a, b) => b - a)

    const f = e.join('')

    const result = parseInt(f)

    return result
}

console.log(descendingOrderEasy(645920846281))
console.log(typeof descendingOrderEasy(645920846281))


// Решение 2 (более кратко):
const descendingOrderHard = inputNumber => parseInt(inputNumber.toString().split('').sort((a, b) => b - a).join(''))

console.log(descendingOrderHard(645920846281))
console.log(typeof descendingOrderHard(645920846281))