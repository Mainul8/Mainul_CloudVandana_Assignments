// Get the elements
const resultElement = document.getElementById('result');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

// Add event listeners to numbers, operations, and special buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      calculate();
    } else if (button.value === 'AC') {
      clearDisplay();
    } else {
      addToDisplay(button.value);
    }
  });
});

function addToDisplay(value) {
  resultElement.value += value;
}

function clearDisplay() {
  resultElement.value = '';
}

function calculate() {
  let expression = resultElement.value;

  // Check for division by zero
  if (expression.includes('/0')) {
    resultElement.value = 'Error (Divide by zero)';
    return;
  }

  try {
    // Using eval to calculate the expression
    resultElement.value = eval(expression);
  } catch (error) {
    resultElement.value = 'Error';
  }
}
