const fibonacci = function(index) {
    if (+index === NaN || +index < 0) return 'OOPS';

    let firstNum = 0;
    let secondNum = 1;
    let currentNum = 1;

    if (+index === 0) return 0;

    for (let i = 1; i < +index; i++) {
        currentNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = currentNum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
