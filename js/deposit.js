document.getElementById('btn-deposit').addEventListener('click', function() {
    // get newDeposit amount using function
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert('enter valid number');
        return;
    }

    // get previous deposit total using function
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');

    // calculate new balance 
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set new balance using function
    setTextElementValueById('balance-total', newBalanceTotal)
});