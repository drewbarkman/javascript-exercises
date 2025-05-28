const palindromes = function (phrase) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    cleanString = phrase.toLowerCase()
    .split('')
    .filter((letter) => alphanumerical.includes(letter))
    .join('');

    reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
