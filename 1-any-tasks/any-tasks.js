
/* Growth of a Population (7 kyu) */

function nbYear(p0, percent, aug, p) {
    let n = 0
    while (p0 < p) {
        p0 = p0 + Math.floor(p0 * (percent / 100)) + aug
        n++
        console.log(n)
        console.log(p0)
    }
    return n
}

nbYear(1500000, 0.25, 1000, 2000000)


// Convert a string to an array (8 kyu)

function stringToArray(string){

	//return string.slice(' ')
    console.log(string.split(' '))
}

stringToArray("I love arrays they are my favorite")


/* Beginner - Reduce but Grow (8 kyu) */
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (arr) => {
    let n = 1
    arr.forEach(element => n = element * n)
    return n
}

console.log(grow([2, 2, 2, 2, 2, 2]))

// best practice:
const growTwo = x => x.reduce((a, b) => a * b)
console.log(growTwo([2, 2, 2, 2, 2, 2]))


/* Quarter of the year */
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    
    if (month <= 3) {
        return 1
    }
    
    if (month <= 6) {
        return 2
    }
    
    if (month <= 9) {
        return 3
    }
    
    if (month <= 12) {
        return 4
    }
}

console.log(quarterOf(4))

// best practice:
const quarterOfTwo = m => Math.ceil(m/3);
console.log(quarterOfTwo(4))


/* Sum Mixed Array - 8 */
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = x => x.reduce((sum, current) => sum + parseInt(current), 0)

console.log(sumMix([9, 3, '7', '3'])) // 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) // 41


/* Counting sheep... - 8 */
/*
const countSheeps = arrayOfSheep => {
    arrayOfSheep.reduce((sum, current) => {
        current ? sum + 1 : console.log(current)
        return sum
    }, 0)
} */

const countSheeps = arrayOfSheep => {
    arrayOfSheep.reduce((sum, current) => {
        console.log(sum)
        current ? sum + 1 : console.log(current)
        console.log(sum)
    }, 0)
}

console.log(countSheeps(
    [true, true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))