
// Vowel Count

function getCount(str) {
    let vowels = str.match(/[aeiou]/g, '');
    return vowels !== null ? str.match(/[aeiou]/g, '').length : 0;
}

console.log(getCount("abracadabra"));