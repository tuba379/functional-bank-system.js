document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('enter valid number');
        return;
    }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You don't have that much money!");
        return;
    }
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})