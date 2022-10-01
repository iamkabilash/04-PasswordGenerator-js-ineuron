const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-/*-+"

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    var copyText = resultEl.innerText;
    var el = document.createElement('textarea');
    el.value = copyText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})

generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword();
})

function generatePassword() {
    let selectedFunc = {...randomFunc};
    if (uppercaseEl.checked === false){
        delete selectedFunc.upper;
    }
    if (lowercaseEl.checked === false){
        delete selectedFunc.lower;
    }
    if (numbersEl.checked === false){
        delete selectedFunc.number;
    }
    if (symbolsEl.checked === false){
        delete selectedFunc.symbol;
    }
    console.log(selectedFunc);
    let password = "";
    const keys = Object.keys(selectedFunc);
    for (let i=0; i<lengthEl.value; i++){
        password += selectedFunc[keys[Math.floor(Math.random() * keys.length)]]();
    }
    return password;
}

function getRandomLower() {
    return alphabets[Math.floor(Math.random() * alphabets.length)].toLowerCase();
}

function getRandomUpper() {
    return alphabets[Math.floor(Math.random() * alphabets.length)].toUpperCase();
}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}