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

};

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    
    document.querySelector('#mean').textContent = mean;
    document.querySelector("#median").textContent = median;

};