const checkBtn = document.getElementById("check-btn");
const textArea = document.getElementById("text-input");
const result =  document.getElementById("result");


const isPalindrome = (str) => {
    const normalStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalStr.split('').reverse().join('');
    return normalStr === reversedStr;
}

const getValue = () => {
    checkBtn.addEventListener("click", () => {
        const checkValue = textArea.value.trim();

if (checkValue !== "") {
    if (isPalindrome(checkValue)) {
        result.innerHTML = `<b>${checkValue}</b> is a palindrome.`;
    } else {
        result.innerHTML = `<b>${checkValue}</b> is a not palindrome.`;
    }
} else {
    alert("Please input a value")
}

    })
}


getValue()

