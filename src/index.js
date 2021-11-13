const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {

    let arrayNumbers = expr.split('')
    let size = 10
    let subarray = []
    for (let i = 0; i < arrayNumbers.length / size; i++) {
        subarray[i] = arrayNumbers.slice((i * size), (i * size) + size)
    }
    let result = []
    for (let i = 0; i < subarray.length; i++) {
        result[i] = subarray[i].join('').replace(/^0+/, '')
    }

    let a = result.map(a => a.split(''))



    console.log(a)


}


module.exports = {
    decode
}