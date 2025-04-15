

//Random Password Generator


function generatePasswords(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = 123456789;
    const symbolChars = "!@#$%^&*?/";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChar: "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numberChars : "";

    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0){
        return `(password length must be 1 or more characters)`;

    }
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    if(allowedChars ===0){
        return `(please select at least one character type)`;
    }
    return password;



}

const includeNumbers =true;
const includeUpperCase = true;
const includeLowerCase = true;
const includeSymbols = true;
const passwordLength = 12;

const password = generatePasswords(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);

