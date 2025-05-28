function getAge(birth, death) {
    if (!death) {
        return new Date().getFullYear() - birth;
    } else {
        return death - birth;
    }
}

const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
            const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
            const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

            return oldestAge < currAge ? curr : oldest;
        })
}

// Do not edit below this line
module.exports = findTheOldest;
