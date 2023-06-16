
/* Sum of Digits / Digital Root */

/* Example: 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */

const digitalRoot = n => {

    console.log(n)

    while (n.toString().split('').length > 1) {
        n = n.toString().split('').reduce((prev, current) => +prev + +current)
        console.log(n)
    }

    return n
}

// BEST PRACTICES:
/*
function digital_root(n) {
    return (n - 1) % 9 + 1;
}
*/

console.log('Exit: ' + digitalRoot(1324199))