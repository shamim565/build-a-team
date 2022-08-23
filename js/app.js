
// update best five player list 
function updatePlayerList(playerName) {
    const playerListElement = document.getElementById('selected-player-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span></span>
    `;
    listItem.style.padding = '10px';
    listItem.style.fontWeight = '600';

    const listItemText = listItem.children[0];
    listItemText.innerText = playerName;
    listItemText.style.color = 'white';
    listItemText.style.fontWeight = '400';
    playerListElement.appendChild(listItem);

}
function getInputValueById(fieldId) {
    const fieldElement = document.getElementById(fieldId);
    const fieldValue = parseInt(fieldElement.value);
    if (!isNaN(fieldValue)) {
        fieldElement.value = '';
        return fieldValue;
    }
    else {
        alert("Enter number value only!");
        fieldElement.value = '';
        return 0;
    }
}

const selectButtons = document.querySelectorAll('.select-btn');
let count = 0;
// get and set player name 
for (let button = 0; button < selectButtons.length; button++) {
    selectButtons[button].addEventListener('click', function () {
        count++;
        const playerName = selectButtons[button].parentNode.children[0].innerText;
        // validation on limiting 5 players only 
        if (count <= 5) {
            selectButtons[button].style.backgroundColor = 'grey';
            selectButtons[button].setAttribute("disabled", "");
            updatePlayerList(playerName);
        }
        else {
            alert("Only 5 players are allowed. You can not select more than 5!");
            count = 5;
        }

    });
}

//budget calculation
document.getElementById('calculate-btn').addEventListener('click', function () {
    // calculate total player expenses 
    const perPlayerCost = getInputValueById('per-player-cost-field');
    const totalPlayerCost = perPlayerCost * count;

    // set total player expenses 
    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText = totalPlayerCost;

});
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    // get total player expenses 
    const playerExpensesElement = document.getElementById('player-expenses');
    const totalPlayerExpenses = parseInt(playerExpensesElement.innerText);

    // total expenses calculation 
    const managerCost = getInputValueById('manager-cost-field');
    const coachCost = getInputValueById('coach-cost-field');
    const totalCost = totalPlayerExpenses + managerCost + coachCost;

    // set total cost
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.innerText = totalCost;
});
