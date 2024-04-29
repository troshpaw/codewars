
// Оставить в строке только буквы

function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]+/g, '');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// Изменить строку ("Replace With Alphabet Position" => "replace_with_alphabet_position")

str = "Stop the Zombie Apocalypse";

const modernStr = str => str.replaceAll(' ', '_').toLowerCase();
console.log(modernStr(str)); 