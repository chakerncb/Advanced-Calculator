let result = document.getElementById('result');
let resultOpr = document.getElementById('result-operation');
let equal = document.getElementById('=');
let clear = document.getElementById('AC');
let numbers = document.querySelectorAll('td');
let operator = document.querySelectorAll('td'); 
let operatorValue = '';
let firstValue = '';
result.innerHTML = 0;

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (number.innerHTML === 'π') {
            result.innerHTML = (Math.PI).toFixed(6);
        } else {
            if (result.innerHTML === '0') {
                result.innerHTML = number.innerHTML;
            } else {
                result.innerHTML += number.innerHTML;
            }
        }
    });
});

operator.forEach((op) => {
    op.addEventListener('click', () => {
        if (op.innerHTML === '+') {
            operatorValue = '+';
            firstValue = result.innerHTML;
            result.innerHTML = '';
        }
        else if (op.innerHTML === '-') {
            operatorValue = '-';
            firstValue = result.innerHTML;
            result.innerHTML = '';
        }

        else if (op.innerHTML === '÷') {
            operatorValue = '/';
            firstValue = result.innerHTML;
            result.innerHTML = '';
        }

        else if (op.innerHTML === 'x') {
            operatorValue = '*';
            firstValue = result.innerHTML;
            result.innerHTML = '';
        }

        else if (op.innerHTML === '%') {
            result.innerHTML = parseFloat(result.innerHTML) / 100;
        }

        else if (op.innerHTML === '+/-') {
            result.innerHTML = parseFloat(result.innerHTML) * -1;
        }


       
    });
});

equal.addEventListener('click', () => {
    if (operatorValue === '+') {
        let res1 = parseFloat((parseFloat(firstValue) + parseFloat(result.innerHTML)).toFixed(6));
        resultOpr.innerHTML = firstValue + result.innerHTML;
        result.innerHTML = res1;
    }

    if (operatorValue === '/') {
        let res2 = parseFloat((parseFloat(firstValue) / parseFloat(result.innerHTML)).toFixed(6));
        resultOpr.innerHTML = firstValue + result.innerHTML;
        result.innerHTML = res2;
    }

    if (operatorValue === '*') {
        let res3 = parseFloat((parseFloat(firstValue) * parseFloat(result.innerHTML)).toFixed(6));
        resultOpr.innerHTML = firstValue + result.innerHTML;
        result.innerHTML = res3;
    }

    if (operatorValue === '-') {
        let res4 = parseFloat((parseFloat(firstValue) - parseFloat(result.innerHTML)).toFixed(6));
        resultOpr.innerHTML = firstValue + result.innerHTML;
        result.innerHTML = res4;
    }
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    resultOpr.innerHTML = '';
    firstValue = '';
});

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-menu");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}



