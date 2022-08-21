function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId); // get the element by id
    const inputFieldValueString = inputField.value; // get the value from the element
    const inputFieldValue = parseFloat(inputFieldValueString); // convert string value to a number
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}