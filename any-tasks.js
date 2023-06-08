
// Growth of a Population (7 kyu)

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


// Beginner - Reduce but Grow (8 kyu)
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


// Quarter of the year
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