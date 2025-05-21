const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number") return 'ERROR';
    if (!(Number.isInteger(start) && Number.isInteger(end))) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';

    let a, b;
    if (start < end) {
        a = start;
        b = end;
    } else {
        a = end;
        b = start;
    }

    result = 0;
    for (; a <= b; a++) {
        result += a;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
