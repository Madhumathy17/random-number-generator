
/**
 * Generate a random integer number between
 * min and max both included
 * @param min lower limit for the range (inclusive)
 * @param max upper limit for the range (inclusive)
 * @returns
 * @constructor
 */
const generateRandomInt = (min, max) => {
    // combining Math.random with Math.floor
    // to generate random integer
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generate an array of unique
 * random integer numbers
 * between min and max
 * @param nosNeeded  no of Elements needed in the array
 * @param minlower limit for the range (inclusive)
 * @param max  upper limit for the range (inclusive)
 * @returns {*[]}
 */
const generateOrderedUniqueRandomNumbers = (nosNeeded, min, max) => {
    const randomNums = [];
    while (randomNums.length < nosNeeded){
        const random = generateRandomInt(min, max);
        if(!randomNums.includes(random)){
            randomNums.push(random);
        }
    }
    return randomNums.sort( function (x,y) {
        return x-y;
    });
}

const RandomLib = {
    generateRandomInt,
    generateUniqueRandomNumbers: generateOrderedUniqueRandomNumbers
}

export default RandomLib