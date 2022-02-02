//math operation functions
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

//equals button function
const operate = function(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        return 'Please try again.'
    }
};

//display digits on button click
const output = document.getElementById('output');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

digits.forEach(digit => {
    digit.addEventListener('click', displayDigit);
});

function displayDigit() {
    let buttonText = this.innerText;
    output.textContent += buttonText;
    console.log(buttonText);
}

operators.forEach(operator => {
    operator.addEventListener('click', displayOperator);
});

let operand1 = '';
let operator = '';
let operand2 = '';
let a = 0;
let b = 0;

function displayOperator() {
    let buttonText = this.innerText;
    
    if (buttonText === 'AC') {
        output.innerText = '';
    } else if (buttonText === '=') {
        const operands = output.textContent.split(/\D/);
        operand2 = operands[1];
        a = parseInt(operand1);
        b = parseInt(operand2);
        output.innerText = operate(operator, a, b);
        console.log(operate(operator, a, b));
    } else {
        operand1 = output.textContent;
        operator = buttonText;
        output.textContent += buttonText;
    }
    console.log(operator);
    console.log(operand1);
    console.log(operand2);
    console.log(a);
    console.log(b);
}

//