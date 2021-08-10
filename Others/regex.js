//Regex Validation
/**
 1. More than 6 characters
 2. Contains atleast 1 capital letter
 2. Contains atleast 1 small letter
 2. Contains atleast 1 number
 */

function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(password);
}

console.log(validate("Ajmal12"));//True
console.log(validate("Ajmal12#"));//False
console.log(validate("ajmal12"));//False