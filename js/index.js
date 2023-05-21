function display(value) {

    document.getElementById('result').value += value;

    return value;

}

function solve() {

    let displayResult = document.getElementById('result').value;

    let calculateElement = eval(displayResult);

    document.getElementById('result').value = calculateElement;

    return calculateElement;

}

function clearScreen() {

    document.getElementById('result').value = '';

}