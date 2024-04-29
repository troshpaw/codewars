
// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

const alphabetPosition = text => text.toLowerCase().replace(/[^a-zA-Z]+/g, '').split('').map(element => element.charCodeAt(0) - 96).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));