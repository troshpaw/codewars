
// https://www.codewars.com/kata/56efc695740d30f963000557/

String.prototype.toAlternatingCase = function () {
    let outputString = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            //console.log((this[i]), " ", this[i].toUpperCase());
            outputString += this[i].toLowerCase();
        } else {
            outputString += this[i].toUpperCase();
        }
    }
    return outputString;
}

let string = 'altERnaTIngcAsE';

console.log(string.toAlternatingCase());