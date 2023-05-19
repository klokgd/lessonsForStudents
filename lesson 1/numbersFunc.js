// function isSimple(number) {
//     if()
// }

const { log } = require('console');

function isSimple(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function isEven(number) {
    if (number % 2 == 0) {
        return true
    }
    return false
}

function showDivider(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}

showDivider(6)
console.log('Hello World!')

module.exports = { isSimple }