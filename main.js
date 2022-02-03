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
    if (b === 0) {
        return 'Can not divide by 0!'
    } else {
        return a / b;
    }
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
        return 'ERROR'
    }
};

//display digits on button click
const output = document.getElementById('output');
const previous = document.getElementById('previous');
//const digits = document.querySelectorAll('.digit');
const buttons = document.querySelectorAll('button');

// digits.forEach(digit => {
//    digit.addEventListener('click', displayDigit);
// });

// function displayDigit() {
//     let buttonText = this.innerText;
//     output.textContent += buttonText;
//     console.log(buttonText);
// }

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
        output.innerText = '';
        previous.innerText = '';
        document.getElementById('point').disabled = false;
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
        const operands = output.textContent.split(/[^0-9.]/);
        operand2 = operands[1];
        if (operands[1] !== undefined) {
            previous.textContent = output.textContent;
            a = parseFloat(operand1);
            b = parseFloat(operand2);
            output.innerText = operate(operator, a, b);
            console.log(operate(operator, a, b));
            operator = buttonText;
            operand1 = output.textContent;
            output.textContent += buttonText;
            document.getElementById('point').disabled = false;
            console.log(operator);
            console.log(operand1);
            console.log(operand2);
            console.log(a);
            console.log(b);       
        } else {
            operator = buttonText;
            operand1 = output.textContent;
            output.textContent += buttonText;
            document.getElementById('point').disabled = false;
        }
    } else if (buttonText === '.') {
        const operands = output.textContent.split(/[^0-9.]/);
        if (Number.isInteger(parseFloat(operands[0])) === false) {
            document.getElementById('point').disabled = true;
            if (Number.isInteger(parseFloat(operands[0])) === false && Number.isInteger(parseFloat(operands[1])) === false) {
                document.getElementById('point').disabled = true;
            } else {
                output.textContent += buttonText;
            }
        } else {
            output.textContent += buttonText;
        }
    } else if (buttonText === '=') {
        console.log(output.textContent);
        previous.textContent = output.textContent;
        const operands = output.textContent.split(/[^0-9.]/);
        operand2 = operands[1];
        a = parseFloat(operand1);
        b = parseFloat(operand2);
        output.innerText = operate(operator, a, b);
        console.log(operate(operator, a, b));
        document.getElementById('point').disabled = false;
    } else {
        output.textContent += buttonText;
        document.getElementById('point').disabled = false;
    }

    // console.log(operator);
    // console.log(operand1);
    // console.log(operand2);
    // console.log(a);
    // console.log(b);
}

//