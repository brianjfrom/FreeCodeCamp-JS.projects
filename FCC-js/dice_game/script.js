const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const roundElement = document.getElementById('current-round');
const rollsElement = document.getElementById('current-round-rolls');
const totalScoreElement = document.getElementById('total-score');
const scoreHistory = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesContainer = document.querySelector('.rules-container');

let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;
const maxRolls = 3; // max number of rolls per round

const toggleRules = () => {
    if (isModalShowing) {
        rulesContainer.style.display = "none";
        rulesBtn.textContent = "Show Rules"
    } else {
        rulesContainer.style.display = "block";
        rulesBtn.textContent = "Hide Rules"
    }
    isModalShowing = !isModalShowing;
};

const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
}

const updateRadioOption = (index, score) => {
    let input = scoreInputs[index];

    if (input.disabled) {
        input.disabled = false;
    }

    input.value = score;
    scoreSpans[index].textContent = `, score = ${score}`
};

const getHighestDuplicates = (array) => {
    let duplicates = {};

    array.forEach(number => {
        duplicates[number] = (duplicates[number] || 0) + 1
    });

    let maxCount = 0;
    let sum = array.reduce((sum, value) => sum + value, 0)

    for (const [duplicate, count] of Object.entries(duplicates)) {
        if (count > maxCount) {
            maxCount = count;
            maxDuplicate = duplicate
        }
    }
    if (maxCount > 3) {
        updateRadioOption(1, sum);
    }
    if (maxCount > 2) {
        updateRadioOption(0, sum)
    }
    updateRadioOption(5, 0)

};


const detectFullHouse = (arr) => {
const counts = {};

for (const num of arr) {
    if (counts[num]) {
        counts[num]++;
    } else {
        counts[num] = 1;
    }
}
const values = Object.values(counts)
if (values.includes(3) && values.includes(2)) {
    updateRadioOption(2, 25) 
}

updateRadioOption(5, 0);
};


const resetRadioOptions = () => {
    for (const input of scoreInputs) {
        input.disabled = true;
        input.checked = false;
    }

    for (const span of scoreSpans) {
        span.textContent = '';
    }
};

const updateScore = (selectedValue, achieved) => {
    score += Number(selectedValue);
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const checkForStraights = (arr) => {
   const uniqueValues = [... new Set(arr)].sort((a,b) => a - b);
    const sequence = uniqueValues.join('');
   const largeStraight = ['12345', '23456'];
   const smallStraight = ['1234', '2345', '3456'];

   if (largeStraight.includes(sequence)) {
    updateRadioOption(4, 40);
    updateRadioOption(3, 30)
    return
   }

   for (const small of smallStraight) {
    if (sequence.includes(small)) {
        updateRadioOption(3, 30);
        updateRadioOption(5, 0)
        return
    }
   }
   updateRadioOption(5, 0);
};

const rollDice = () => {

    if (rolls >= maxRolls) {
        alert("You have reached the maximum number of rolls for this round. Please select a score.")
        return
    }

    diceValuesArr = [];


    listOfAllDice.forEach((dice, index) => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomValue);
        dice.textContent = diceValuesArr[index];
    })

    resetRadioOptions()
    rolls++;
    updateStats()
    getHighestDuplicates(diceValuesArr)
    detectFullHouse(diceValuesArr)
    checkForStraights(diceValuesArr)
};

const resetGame = () => {
    listOfAllDice.forEach(element => element.textContent = 0);

    score = 0;
    rolls = 0
    round = 1;
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = ''
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
    resetRadioOptions();
};

keepScoreBtn.addEventListener("click", () => {
    let value;
    let id;

    for (const input of scoreInputs) {
        if (input.checked) {
            value = input.value;
            id = input.id;
            break
        };
    }
    if (value) {
        rolls = 0;
        round++
        updateStats();
        resetRadioOptions();
        updateScore(value, id)

        if (round > 6) {
            setTimeout(() => {
                alert(`Final score ${score}`);
                resetGame();
            }, 500);
        }
    } else {
        alert("Select a score");
    }
});




rollDiceBtn.addEventListener("click", rollDice);

rulesBtn.addEventListener("click", toggleRules);



//  https://youtu.be/TRst32SPH-Q?si=K_qGq_s7i7B8fkc5

