
// Regex validate PIN code

function validatePIN (pin) {
    if (pin === pin.replace(/\D/g, "") && (pin.length === 4 || pin.length === 6)) {
        return true;
    } else return false;
};

console.log(validatePIN('123456'));