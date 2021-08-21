const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const CODE_DOT = '10';
const CODE_DASH = '11'
const SYMBOL_LENGTH = 2;
const LETTER_LENGTH = 10;

function decode(expr) {
    let arr = expr.split("");
    let resultArr = [];
    while (arr.length) {
        let ten = arr.splice(LETTER_LENGTH * -1);
        let morseLetter = "";
        if (ten.join("") === "**********") {
            resultArr.push(" ");
            continue;
        }
        for (i = 0; i < ten.length; i += SYMBOL_LENGTH) {
            let signCode = ten.slice(i, i + SYMBOL_LENGTH).join("");
            morseLetter += signCode === CODE_DOT ? "." : signCode === CODE_DASH ? "-" : "";
        }
        resultArr.push(MORSE_TABLE[morseLetter]);
    }
    return resultArr.reverse().join("");
}

module.exports = {
    decode
}
