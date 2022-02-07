//basic math operations
const add = function(a, b) {
    return (a + b).toFixed(6).replace(/\.?0+$/, '');
};

const subtract = function(a, b) {
    return (a - b).toFixed(6).replace(/\.?0+$/, '');
};

const multiply = function(a, b) {
    return (a * b).toFixed(6).replace(/\.?0+$/, '');
};

const divide = function(a, b) {
    if (b === 0) {
        return 'Can not divide by 0!'
    } else {
        return (a / b).toFixed(6).replace(/\.?0+$/, '');
    }
};

//calculate depending on operator
const operate = function(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return 'ERROR'
    }
};

//display calculation output
const output = document.getElementById('output');
//const previous = document.getElementById('previous'); (perhaps 2nd screen was the problem)
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', display);
});

let operand1 = '';
let operator = '';
let operand2 = '';
let a = 0;
let b = 0;

function display() {
    let buttonText = this.innerText;

    if (buttonText === '=') {
        operand2 = output.innerText;
        a = parseFloat(operand1);
        b = parseFloat(operand2);
        output.innerText = operate(operator, a, b);
        operator = '=';
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
        operand1 = output.innerText;
        operator = buttonText;
        output.innerText = '';
    } else {
        if (operator === '=') {
            output.innerText = '';
            operator = '';
            output.textContent += buttonText;
        } else {
        output.textContent += buttonText;
        }
    }
    console.log(operand1);
    console.log(operator);
    console.log(operand2);
}
