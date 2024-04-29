
// Проверка числа на четность

const number = 10

// Method 1 (not best practices):
const testEvenOne = (n) => {
    if (Math.trunc(n / 2) === n/2) {
        return true
    } else {
        return false
    }
}

console.log(testEvenOne(number))

// Method 2 (best practices):
function testEvenTwo(n) {
    return n % 2 === 0;
}

console.log(testEvenTwo(number))

// Method 3 (best practices):
function testEvenThree(n) {
    return n % 2 === 0 ? true : false;
}

console.log(testEvenThree(number))