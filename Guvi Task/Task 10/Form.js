const formElement = document.createElement('form');
formElement.className = 'form-container';

const inputElements = ['First name', 'Last name', 'Address', 'Pincode', 'Gender', 'Choice of Food', 'State', 'Country'];

inputElements.forEach(element => {
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');

    if (element.toLowerCase() === 'gender') {
        labelElement.textContent = 'Gender';
        formElement.appendChild(labelElement);
        const options = ['Male', 'Female', 'Others'];
        options.forEach(option => {
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = "gender";
            radioButton.value = option.toLowerCase();
            radioButton.required = true;

            // Wrap radio button and text in a span
            const optionSpan = document.createElement('span');
            optionSpan.appendChild(radioButton);
            optionSpan.appendChild(document.createTextNode(option));

            // Append the span to the form
            formElement.appendChild(optionSpan);
        });
    }
    else if (element.toLowerCase() === 'choice of food') {
        labelElement.textContent = 'Choice of Food';
        formElement.appendChild(labelElement); // Move the label outside the loop
        const foodOptions = ['South-Indian', 'North-Indian', 'Chinese', 'Pure-Veg', 'Vegan', 'Italian'];
        foodOptions.forEach(option => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'foodChoice'; // use the same name for all checkboxes
            checkbox.value = option.toLowerCase();

            // Wrap checkbox and text in a span
            const optionSpan = document.createElement('span');
            optionSpan.appendChild(checkbox);
            optionSpan.appendChild(document.createTextNode(option));

            // Append the span to the form
            formElement.appendChild(document.createElement('br'));
            formElement.appendChild(optionSpan);
        });
    }
    else {
        labelElement.textContent = element;
        inputElement.type = 'text';
        inputElement.className = 'styled-input';

        // Append the label and input to the form
        formElement.appendChild(labelElement);
        formElement.appendChild(inputElement);
    }
});

document.body.appendChild(formElement);

