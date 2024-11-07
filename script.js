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
        if (number.innerHTML === '.') {
            result.innerHTML += number.innerHTML;
        } else  
          result.innerHTML += number.innerHTML;
    });
});

operators.forEach((op) => {
    op.addEventListener('click', () => {
        if (['+', '-', '÷', 'x', '^'].includes(op.innerHTML)) {
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
            case 'd/c':
                result.innerHTML = Math.floor(value);
                break;
            case 'π':
                result.innerHTML = Math.PI.toFixed(6);
                break;
            case 'Rand':
                result.innerHTML = Math.random().toFixed(6);
                break;
            case 'sin-1':
                result.innerHTML = Math.asin(value).toFixed(6);
                break;
            case 'cos-1':
                result.innerHTML = Math.acos(value).toFixed(6);
                break;
            case 'tan-1':
                result.innerHTML = Math.atan(value).toFixed(6);
                break;
            case '3√':
                result.innerHTML = Math.cbrt(value).toFixed(6);
                break;

        }
    });
});

let shift = document.getElementById('shift');
let isShiftActive = false;

shift.addEventListener('click', () => {
    isShiftActive = !isShiftActive;
    functions.forEach((func) => {
        if (isShiftActive) {
            switch (func.innerHTML) {
                case '^':
                    func.innerHTML = '3√';
                    break;
                case 'ln':
                    func.innerHTML = 'eˣ';
                    break;
                case 'Log':
                    func.innerHTML = '10^x';
                    break;
                case 'sin':
                    func.innerHTML = 'cos-1';
                    break;
                case 'cos':
                    func.innerHTML = 'tan-1';
                    break;
                case 'tan':
                    func.innerHTML = 'sin-1';
                    break;
            }
        } else {
            switch (func.innerHTML) {
                case 'x√':
                    func.innerHTML = '^';
                    break;
                case 'eˣ':
                    func.innerHTML = 'ln';
                    break;
                case '10^x':
                    func.innerHTML = 'Log';
                    break;
                case 'cos-1':
                    func.innerHTML = 'sin';
                    break;
                case 'tan-1':
                    func.innerHTML = 'cos';
                    break;
                case 'sin-1':
                    func.innerHTML = 'tan';
            }
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
        case '^':
            res = Math.pow(parseFloat(firstValue), parseFloat(secondValue));
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



