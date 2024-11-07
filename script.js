let result = document.getElementById('result');
let resultOpr = document.getElementById('result-operation');
let equal = document.getElementById('=');
let clear = document.getElementById('AC');
let numbers = document.querySelectorAll('td:not(.operation):not(.func-btn)');
let operators = document.querySelectorAll('.operation');
let functions = document.querySelectorAll('.func-btn');
let operatorValue = '';
let firstValue = '';
result.innerHTML = 0;

let mode1 = document.getElementById('mode1');
let mode2 = document.getElementById('mode2');
let functionsSection = document.getElementById('functions');

mode1.addEventListener('click', () => {
    functionsSection.style.display = 'none';
});

mode2.addEventListener('click', () => {
    functionsSection.style.display = 'block';
});

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (result.innerHTML === '0') {
            result.innerHTML = number.innerHTML;
        } else {
            result.innerHTML += number.innerHTML;
        }
    });
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (['+', '-', '÷', 'x'].includes(op.innerHTML)) {
            operatorValue = op.innerHTML === '÷' ? '/' : op.innerHTML === 'x' ? '*' : op.innerHTML;
            firstValue = result.innerHTML;
            result.innerHTML = '';
        } else if (op.innerHTML === '%') {
            result.innerHTML = parseFloat(result.innerHTML) / 100;
        } else if (op.innerHTML === '+/-') {
            result.innerHTML = parseFloat(result.innerHTML) * -1;
        }
    });
});

functions.forEach((func) => {
    func.addEventListener('click', () => {
        let value = parseFloat(result.innerHTML);
        switch (func.innerHTML) {
            case '√x':
                result.innerHTML = Math.sqrt(value).toFixed(6);
                break;
            case '1/x':
                result.innerHTML = (1 / value).toFixed(6);
                break;
            case 'x2':
                result.innerHTML = Math.pow(value, 2).toFixed(6);
                break;
            case 'x3':
                result.innerHTML = Math.pow(value, 3).toFixed(6);
                break;
            case 'x!':
                let fact = 1;
                for (let i = 1; i <= value; i++) {
                    fact *= i;
                }
                result.innerHTML = fact;
                break;
            case 'sin':
                result.innerHTML = Math.sin(value).toFixed(6);
                break;
            case 'cos':
                result.innerHTML = Math.cos(value).toFixed(6);
                break;
            case 'tan':
                result.innerHTML = Math.tan(value).toFixed(6);
                break;
            case 'ln':
                result.innerHTML = Math.log(value).toFixed(6);
                break;
            case 'Log10':
                result.innerHTML = Math.log10(value).toFixed(6);
                break;
            case 'eˣ':
                result.innerHTML = Math.exp(value).toFixed(6);
                break;
            case '10^x':
                result.innerHTML = Math.pow(10, value).toFixed(6);
                break;
            case 'e':
                result.innerHTML = Math.E.toFixed(6);
                break;
            case 'EE':
                result.innerHTML += 'e';
                break;
        }
    });
});

equal.addEventListener('click', () => {
    let secondValue = result.innerHTML;
    let res;
    switch (operatorValue) {
        case '+':
            res = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            res = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            res = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            res = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    resultOpr.innerHTML = firstValue + ' ' + operatorValue + ' ' + secondValue;
    result.innerHTML = res.toFixed(6);
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    resultOpr.innerHTML = '';
    firstValue = '';
    operatorValue = '';
});

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}



