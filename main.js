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
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', display);
});

function display() {
    let buttonText = this.innerText
    console.log(buttonText);
}