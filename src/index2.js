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

let arrayMorseTable = Object.values(MORSE_TABLE)
let abc = []

function decode(expr) {
    // debugger
    let arrayOfExpr = expr.split('')
    for (let i = 0; i < arrayOfExpr.length; i++) {
        for (let j = 0; j < arrayMorseTable.length; j++) {
            if (arrayOfExpr[i] === arrayMorseTable[j]) {
                let letter = arrayOfExpr[i]
                if (letter === 'a') {
                    abc.push('.-')
                }
                if (letter === 'b') {
                    abc.push('-...')
                }
                if (letter === 'c') {
                    abc.push('-.-.')
                }
                if (letter === 'd') {
                    abc.push('-..')
                }
                if (letter === 'e') {
                    abc.push('.')
                }
                if (letter === 'f') {
                    abc.push('..-.')
                }
                if (letter === 'g') {
                    abc.push('--.')
                }
                if (letter === 'h') {
                    abc.push('....')
                }
                if (letter === 'i') {
                    abc.push('..')
                }
                if (letter === 'j') {
                    abc.push('.---')
                }
                if (letter === 'k') {
                    abc.push('-.-')
                }
                if (letter === 'l') {
                    abc.push('.-..')
                }
                if (letter === 'm') {
                    abc.push('--')
                }
                if (letter === 'n') {
                    abc.push('-.')
                }
                if (letter === 'o') {
                    abc.push('---')
                }
                if (letter === 'p') {
                    abc.push('.--.')
                }
                if (letter === 'q') {
                    abc.push('--.-')
                }
                if (letter === 'r') {
                    abc.push('.-.')
                }
                if (letter === 's') {
                    abc.push('...')
                }
                if (letter === 't') {
                    abc.push('-')
                }
                if (letter === 'u') {
                    abc.push('..-')
                }
                if (letter === 'v') {
                    abc.push('...-')
                }
                if (letter === 'w') {
                    abc.push('.--')
                }
                if (letter === 'x') {
                    abc.push('-..-')
                }
                if (letter === 'y') {
                    abc.push('-.--')
                }
                if (letter === 'z') {
                    abc.push('--..')
                }
                if (letter === '1') {
                    abc.push('.----')
                }
                if (letter === '2') {
                    abc.push('..---')
                }
                if (letter === '3') {
                    abc.push('...--')
                }
                if (letter === '4') {
                    abc.push('....-')
                }
                if (letter === '5') {
                    abc.push('.....')
                }
                if (letter === '6') {
                    abc.push('-....')
                }
                if (letter === '7') {
                    abc.push('--...')
                }
                if (letter === '8') {
                    abc.push('---..')
                }
                if (letter === '9') {
                    abc.push('----.')
                }
                if (letter === '0') {
                    abc.push('-----')
                }
            }

        }
        if (arrayOfExpr[i] === ' ') {
            let letter = arrayOfExpr[i]
            if (letter === ' ') {
                abc.push(' ')
            }
        }
    }
    let arrayNumbers = abc.map(d => d.split(''))
    let result = []
    // debugger
    for (let i = 0; i < arrayNumbers.length; i++) {
        let doubles = arrayNumbers[i].map(function (num) {
            if (num === '.') {
                return '10'
            }
            if (num === '-') {
                return '11'
            }
            if (num === ' ') {
                return '**********'
            }
        })
      let bac =  doubles.join('')
        let fff = bac.split('')
        if(fff.length < 10){
            for (let a = fff.length; a< 10; a++){
                fff.unshift('0')

            }

        }
        let fack = fff.join('')
        result.push(fack)

    }
    let finish = result.join('')
    console.log(finish)
}
module.exports = {
    decode
}