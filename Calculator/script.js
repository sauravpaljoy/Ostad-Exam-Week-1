// Bootstrap JS and jQuery
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Retrieve input values
            var number1 = parseFloat(document.getElementById('number1').value);
            var operation = document.getElementById('operation').value;
            var number2 = parseFloat(document.getElementById('number2').value);
           

            // Perform calculation
            var result;
            switch(operation) {
                case 'add':
                    result = number1 + number2;
                    break;
                case 'subtract':
                    result = number1 - number2;
                    break;
                case 'multiply':
                    result = number1 * number2;
                    break;
                case 'divide':
                    if(number2 !== 0) {
                        result = number1 / number2;
                    } else {
                        document.getElementById('result').innerText = "Error: Division by zero";
                        return;
                    }
                    break;
                default:
                    document.getElementById('result').innerText = "Error: Please select an operation";
                    return;
            }

            // Display result
            document.getElementById('result').innerText = "Result: "   + result;
        });

