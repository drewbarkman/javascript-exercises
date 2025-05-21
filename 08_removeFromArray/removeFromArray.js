const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        let index = 0;
        while (index !== -1) {
            index = array.findIndex(val => val === arg)
            if (index === -1) continue;
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
