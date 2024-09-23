const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// ---finding if the array has a even/odd number of numbers ---

// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];

// --- for even numbers ---
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);

// --- for odd numbers ---
// const isOdd = testArr.length % 2 === 1;
// console.log(isOdd);


// -- finding the odd list mean ---
// const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
// console.log(oddListMedian);

// --- finding the even list mean ---
// const firstMiddleNumber = testArr2[testArr2.length / 2];
// const secondMiddleNumber = testArr2[(testArr2.length / 2) - 1]

// const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
// console.log(evenListMedian);


const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);
     if (sorted.length % 2 === 0) {
        const firstMiddleNumber = sorted[sorted.length / 2];
        const secondMiddleNumber = sorted[(sorted.length / 2) - 1];
        return getMean([firstMiddleNumber, secondMiddleNumber]);
     } else {
        return sorted[Math.floor(sorted.length / 2)];
     }
};
  
const getMode = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = (counts[el] || 0) + 1);

    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);

    return mode.join(', ')
};

const getRange = (array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);

    return max - min;
};

const getVariance = (array) => {
    const mean = getMean(array);
    // const differences = array.map(el => el - mean);
    // // *** Used to Square a number in math ***
    // //  example 3 ** 2 would equal 9

    // const squaredDifferences = differences.map(el => el ** 2);
    // const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0)

    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
};

const getStandardDeviation = (array) => {
    const variance = getVariance(array);

    // *** To get the root exponent ***

    //     To calculate a root exponent, such as  n√x
    //  , you can use an inverted exponent  x1/n
    //  . JavaScript has a built-in Math.pow() function that can be used to calculate exponents.

    // Here is the basic syntax for the Math.pow() function:
    // Math.pow(base, exponent);

    // const standardDeviation = Math.pow(variance, 0.5);

    const standardDeviation = Math.sqrt(variance);

    return standardDeviation;

}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers)
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);
    
    document.querySelector('#mean').textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode
    document.querySelector("#range").textContent = range
    document.querySelector('#variance').textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
};