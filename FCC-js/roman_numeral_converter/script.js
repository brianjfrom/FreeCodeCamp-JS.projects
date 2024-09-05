const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");


const handleConversion = () => {
    const numberValue = parseInt(number.value);

    if (isNaN(numberValue)) {
        output.textContent = "Please enter a valid number";
    } else if (numberValue <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (numberValue > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = intoRomanNumerals(numberValue);
    }
    output.style.display = "block"
}

convertBtn.addEventListener("click", handleConversion);

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        handleConversion()
    }
});

const intoRomanNumerals = (num) => {
    
    const romanNumerals = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"},
    ];

    let result = "";

    for(const { value, symbol } of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value
        }
    }

    return result;
};



