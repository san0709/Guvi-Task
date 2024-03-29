const div1 = document.createElement("div");
div1.className = "container";

const div2 = document.createElement("div");
div2.className = "calculator";

const formElement = document.createElement("form");

const div3 = document.createElement("div");
const displayArea = document.createElement("input");
displayArea.className = "display";
displayArea.type = "text";
displayArea.name = "display";
displayArea.style.width = "300px";
displayArea.style.border = "2px solid whitesmoke";
div3.appendChild(displayArea);

const div4 = document.createElement("div");
const row1 = document.createElement("div"); // Create div for row1
["AC", "DE", ".", "/"].forEach(elems => {
    const input = document.createElement("input");
    input.type = "button";
    input.value = elems.toString();
    row1.appendChild(input); // Append buttons to row1    
});
div4.appendChild(row1);

const div5 = document.createElement("div");
const row2 = document.createElement("div"); // Create div for row2
["7", "8", "9", "*"].forEach(elems => {
    const input = document.createElement("input");
    input.type = "button";
    input.value = elems;
    row2.appendChild(input); // Append buttons to row2
});
div5.appendChild(row2);

const div6 = document.createElement("div");
const row3 = document.createElement("div"); // Create div for row3
["4", "5", "6", "-"].forEach(elems => {
    const input = document.createElement("input");
    input.type = "button";
    input.value = elems;
    row3.appendChild(input); // Append buttons to row3
});
div6.appendChild(row3);

const div7 = document.createElement("div");
const row4 = document.createElement("div"); // Create div for row4
["1", "2", "3", "+"].forEach(elems => {
    const input = document.createElement("input");
    input.type = "button";
    input.value = elems;
    row4.appendChild(input); // Append buttons to row4
});
div7.appendChild(row4);

const div8 = document.createElement("div");
const row5 = document.createElement("div"); // Create div for row5
["00", "0", "="].forEach(elems => {
    const input = document.createElement("input");
    input.type = "button";
    input.value = elems;
    input.className = "equal";
    row5.appendChild(input); // Append buttons to row5
});
div8.appendChild(row5);

formElement.append(div3, div4, div5, div6, div7, div8);
div2.appendChild(formElement);
div1.appendChild(div2);
document.body.appendChild(div1);

// Define a variable to keep track of the current input
let currentInput = '';

// Function to update the display with the current input
function updateDisplay() {
    displayArea.value = currentInput;
}

function addEventListenersToButtons() {
    // Get all the buttons in the calculator UI
    const buttons = document.querySelectorAll('.calculator input[type="button"]');

    // Loop through each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the value of the clicked button
            const value = this.value;

            // Handle different button clicks based on their values
            switch (value) {
                case 'AC':
                    // Clear the display
                    currentInput = '';
                    break;
                case 'DE':
                    // Delete the last character from the display
                    currentInput = currentInput.slice(0, -1);
                    break;
                case '=':
                    // Evaluate the expression and display the result
                    try {
                        currentInput = eval(currentInput);
                    } catch (error) {
                        currentInput = 'Error';
                    }
                    break;
                default:
                    // Append the clicked button's value to the current input
                    currentInput += value;
            }

            // Update the display
            updateDisplay();
        });
    });
}

// Call the function to add event listeners to all buttons
addEventListenersToButtons();



// Add a keydown event listener to the document
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is a number (0-9), one of the operators (+, -, *, /), or Enter key
    if (event.key.match(/[0-9]|[-+*/]|Enter/)) {
        // If Enter key is pressed, evaluate the expression
        if (event.key === 'Enter') {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            // Append the pressed key to the current input
            currentInput += event.key;
        }
        updateDisplay();
    }
});



