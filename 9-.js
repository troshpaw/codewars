
// https://www.codewars.com/kata/56efc695740d30f963000557/

String.prototype.toAlternatingCase = function () {
    return this + this;
}

let string = 'altERnaTIngcAsE';

console.log(string.toAlternatingCase());