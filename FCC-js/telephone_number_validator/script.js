const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkValidInput = (input) => {
    if (input === '') {
        alert('please provide a phone number');
        return ;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneNumberRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
    

    const paraTag = document.createElement("p");
    paraTag.className = 'result-text';
    
    phoneNumberRegex.test(input) ? (paraTag.style.color = "green") : (paraTag.style.color = "red");
    
    paraTag.appendChild(document.createTextNode(
        `${phoneNumberRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    ));
    resultDiv.appendChild(paraTag);
}


checkButton.addEventListener("click", () => {
    checkValidInput(userInput.value);
    userInput.value = ''
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidInput(userInput.value);
        userInput = "";
    }
})

clearButton.addEventListener("click", () => {
    resultDiv.textContent = '';
})


