
// Printer Errors

// printerError = (s) => s.split('').reduce((accumulator, item) => accumulator + 1, 0);

function printerError(s) {
    const strToArr = s.split('');
    const arrAToM = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let count = 0;

    for (let element of strToArr) {
        for (let letter of arrAToM) {
            if (element === letter) {
                count += 1;
            }
        }
    }
    return count + "/" + s.length;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

// Sample test:
/*
const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})
*/