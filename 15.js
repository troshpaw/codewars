
// Stop gninnipS My sdroW!

const spinWords = string => string.split(" ").map(element => element.length >= 5 ? element.split('').reverse().join('') : element).join(' ');

console.log(spinWords("Seriously this is the last one"));