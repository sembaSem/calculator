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
        return 'Try again friend'  //Snarky message yields NaN if stringing together several operations
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
const previous = document.getElementById('previous'); // (perhaps 2nd screen was the problem)
const buttons = document.querySelectorAll('button');
const operators = document.getElementsByClassName('operator');

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

    if (buttonText === 'AC') {
        document.getElementById('point').disabled = false;
        output.innerText = '';
        previous.innerText = '';
        operand1 = '';
        operator = '';
        operand2 = '';
    } else if (buttonText === 'C') {
        document.getElementById('point').disabled = false;
        if (operator === '=') {
            output.innerText = '';
            previous.innerText = '';
            operand1 = '';
            operator = '';
            operand2 = ''; 
        } else {
            if (parseInt(output.textContent) >= -9 && parseInt(output.textContent) < 0) {
                output.innerText = '';
            } else {
                output.innerText = output.textContent.slice(0, -1);
            }
        }
    } else if (buttonText === '.') {
        if (Number.isInteger(parseFloat(output.textContent)) === false) {
            document.getElementById('point').disabled = true;
        } else {
            output.textContent += buttonText;
            document.getElementById('point').disabled = true;
        }
    } else if (buttonText === '-/+') {
        if (output.innerText === '') {
            output.textContent = '';
        } else {
            output.innerText = -1 * parseFloat(output.textContent);
        }
    } else if (buttonText === '=') {
        document.getElementById('point').disabled = false;
        if (output.innerText === '') {
            output.textContent = operand1;
            operand1 = '';
            operator = '';
        } else {
            if (operator === '' || operator === '=') {
                output.innerText = output.textContent;
            } else {
                operand2 = output.innerText;
                a = parseFloat(operand1);
                b = parseFloat(operand2);
                output.innerText = operate(operator, a, b);
                previous.innerText = operand1 + operator + operand2;
                operator = '=';
            }
        }
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
        document.getElementById('point').disabled = false;
        if (operand1 !== '') {
            if (operator === '=') {
                operand1 = output.innerText;
                operator = buttonText;
                output.innerText = '';
                previous.innerText = operand1 + buttonText;
            } else {
                if (output.textContent === '') {
                    operand2 = 1;
                    a = parseFloat(operand1);
                    b = parseFloat(operand2);
                    output.innerText = multiply(a, b);
                    operand1 = output.innerText;
                    operator = buttonText;
                    output.innerText = '';
                    previous.innerText = operand1 + buttonText;
                } else {
                    operand2 = output.innerText;  
                    a = parseFloat(operand1);
                    b = parseFloat(operand2);
                    output.innerText = operate(operator, a, b);
                    operand1 = output.innerText;
                    operator = buttonText;
                    output.innerText = '';
                    previous.innerText = operand1 + buttonText;
                }
            }
        } else {
           if (output.innerText === '') {
                output.textContent = '';
           } else {
                operand1 = output.innerText;
                operator = buttonText;
                output.innerText = '';
                previous.innerText = operand1 + buttonText;
           }
        }
    } else {
        document.getElementById('point').disabled = false;
        if (operator === '=') {
            previous.innerText = '';
            output.innerText = '';
            operand1 = '';
            operator = '';
            operand2 = '';
            output.textContent += buttonText;
        } else {
            output.textContent += buttonText;
        }
    }
    console.log(operand1);
    console.log(operator);
    console.log(operand2);
}