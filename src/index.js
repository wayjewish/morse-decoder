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

function decode(expr) {
    let arLet = expr.match(/.{1,10}/g);
    let strReturn = "";

    arLet.forEach(function(itemLet, indexLet) {//буква
        
        if (itemLet == "**********") {//пробел
            strReturn += " ";
        }else{
            let strMorse = "";

            let arChar = itemLet.match(/.{1,2}/g);
            arChar.forEach(function(itemChar, indexChar) {//точка/тире
                switch (itemChar) {
                    case "10":
                        strMorse += ".";
                        break;
                    case "11":
                        strMorse += "-";
                        break;
                }
            });

            strReturn += MORSE_TABLE[strMorse];
        }

    });

    return strReturn;
}

module.exports = {
    decode
}