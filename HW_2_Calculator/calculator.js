document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const historyDiv = document.getElementById('history');
    const digitButtons = document.querySelectorAll('.digit');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalsButton = document.getElementById('equals');

    // Event handler for digit buttons
    digitButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            inputField.value += button.value;
        });
    });

    // Event handler for operator buttons
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            inputField.value += ' ' + button.value + ' ';
        });
    });

    // Event handler for equals button
    equalsButton.addEventListener('click', function() {
        const expression = inputField.value;
        const result = calculate(expression);
        addToHistory(expression + ' = ' + result);
        inputField.value = result;
    });

    // Function to add to history
    function addToHistory(entry) {
        const p = document.createElement('p');
        p.textContent = entry;
        historyDiv.appendChild(p);
    }

    // Function to perform calculation
    function calculate(expr) {
        const tokens = expr.split(' ');

        if (tokens.length % 2 === 0) {
            return 'Error';
        }

        let result = parseFloat(tokens[0]);

        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const nextOperand = parseFloat(tokens[i+1]);

            if (isNaN(nextOperand)) {
                return 'Error';
            }

            switch (operator) {
                case '+':
                    result += nextOperand;
                    break;
                case '-':
                    result -= nextOperand;
                    break;
                case '*':
                    result *= nextOperand;
                    break;
                case '/':
                    result /= nextOperand;
                    break;
                default:
                    return 'Error';
            }
        }

        return result;
    }
});
