let price = 1.87
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const cash = document.getElementById('cash');
const change = getElementById('change-due');
const purchaseBtn = getElementById('purchase-btn');

let currencyUnits = [
    ['PENNY', .01],
    ['NICKEL', .05],
    ['DIME', .1],
    ['QUARTER', 25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
];

purchaseBtn.addEventListener("click", () => {
    const cashValue = parseFloat(cash.value);
    const changeDue = cash.value - price;

    if (cashValue < price) {
        alert("Customer does not have enough mony to purchase this item");
    }
});