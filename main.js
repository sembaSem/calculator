//math operation functions
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
    
    if (buttonText === 'AC') {
        output.innerText = '';
        previous.innerText = '';
        operand1 = '';
        operator = '';
        operand2 = '';
        a = 0;
        b = 0;
        document.getElementById('point').disabled = false;
    } else if (buttonText === '=') {
        previous.textContent = output.textContent;
        const operands = output.textContent.split(/[^0-9.]/);
        console.log(operands);
        operand1 = operands[0];
        operand2 = operands[1];
        a = parseFloat(operand1);
        b = parseFloat(operand2);
        output.innerText = operate(operator, a, b);
        operator = buttonText;
        document.getElementById('point').disabled = false;
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
        const operands = output.textContent.split(/[^0-9.]/);
        console.log(operands);
//        operand1 = output.textContent;
        if (operands[1] !== undefined) {
            operand1 = output.textContent;
            operand2 = operands[1];
            previous.textContent = output.textContent;
            a = parseFloat(operand1);
            b = parseFloat(operand2);
            output.innerText = operate(operator, a, b);
            operator = buttonText;
            output.textContent += buttonText;
            document.getElementById('point').disabled = false;  
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
    } else if (buttonText === 'DEL') {
        output.innerText = output.textContent.slice(0, -1);
    } else {
        if (operator === '=') {
            output.innerText = '';
            previous.innerText = '';
            operator = '';
            output.textContent += buttonText;
            document.getElementById('point').disabled = false;
        } else {
            output.textContent += buttonText;
            document.getElementById('point').disabled = false;
        }
    }

    console.log(operand1);
    console.log(operator);
    console.log(operand2);
    console.log(a);
    console.log(b);
    console.log(output.textContent);
//    console.log(operate(operator, a, b));
//    console.log(parseFloat(-12));
}