
/* Convert boolean values to strings 'Yes' or 'No'. */

const boolToWord = bool => {
  return bool ? 'Yes' : 'No'
}

boolToWord(true) // 'Yes'
boolToWord(false) // 'No



/* Jaden Casing Strings */

String.prototype.toJadenCase = function () {
  return this.split(' ').map(element => 
    (element[0].toUpperCase()) + element.slice(1)).join(' ')
}

const str = "How can mirrors be real if our eyes aren't rea"
console.log(str.toJadenCase()) // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// BEST PRACTICES:
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


/*  */