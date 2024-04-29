
// Find the missing letter

function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
            return String.fromCharCode(array[i].charCodeAt(0) + 1);
        }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']));

// Example
/*
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/