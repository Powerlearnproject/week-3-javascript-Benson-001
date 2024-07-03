// Accessing DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const resultDiv = document.getElementById('result');

// Event listeners for buttons
addBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 + num2;
    resultDiv.textContent = `Result: ${result}`;
});

subtractBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 - num2;
    resultDiv.textContent = `Result: ${result}`;
});

multiplyBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = num1 * num2;
    resultDiv.textContent = `Result: ${result}`;
});

divideBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
        const result = num1 / num2;
        resultDiv.textContent = `Result: ${result}`;
    } else {
        resultDiv.textContent = 'Error: Division by zero';
    }
});
