
// Оставить в строке только буквы
function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]+/g, '');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));



// Изменить строку ("Replace With Alphabet Position" => "replace_with_alphabet_position")
str = "Stop the Zombie Apocalypse";

const modernStr = str => str.replaceAll(' ', '_').toLowerCase();
console.log(modernStr(str)); 



// Вырезать только цифры:
function validatePIN (pin) {
    return pin.replace(/\D/g, "");
};

console.log(validatePIN('123.44GQ'));



// Подсчет количества чего-либо в строке:
function getCount(str) {
    return str.match(/[aeiou]/g, '').length;
}

console.log(getCount("abracadabra"));