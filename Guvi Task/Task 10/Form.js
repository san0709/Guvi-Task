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

            const optionSpan = document.createElement('span');
            optionSpan.appendChild(radioButton);
            optionSpan.appendChild(document.createTextNode(option));

            formElement.appendChild(optionSpan);
        });
    } else if (element.toLowerCase() === 'choice of food') {
        labelElement.textContent = 'Choice of Food';
        formElement.appendChild(labelElement);
        const foodOptions = ['South-Indian', 'North-Indian', 'Chinese', 'Pure-Veg', 'Vegan', 'Italian'];
        foodOptions.forEach(option => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'foodChoice';
            checkbox.value = option.toLowerCase();

            const optionSpan = document.createElement('span');
            optionSpan.appendChild(checkbox);
            optionSpan.appendChild(document.createTextNode(option));

            formElement.appendChild(optionSpan);
        });
    } else {
        labelElement.textContent = element;
        inputElement.type = 'text';
        inputElement.required = true;
        inputElement.className = 'styled-input';
        inputElement.name = element.toLowerCase().replace(/\s/g, '');
        formElement.appendChild(labelElement);
        formElement.appendChild(inputElement);
    }
});

const submitButton = document.createElement('input');
submitButton.type = 'submit';
formElement.addEventListener('submit', handleSubmit);
const resetButton = document.createElement('input');
resetButton.type = 'reset';
formElement.append(submitButton, resetButton);

const tableElement = document.createElement('table');
const tableCaption = document.createElement('caption');
tableCaption.innerText = "Form Values";
const headElement = document.createElement('thead');
const trElement = document.createElement('tr');
const headFields = inputElements;
headFields.forEach((element) => {
    const tabledata = document.createElement('th');
    tabledata.innerText = element;
    trElement.appendChild(tabledata);
});

headElement.appendChild(trElement);
tableElement.appendChild(headElement);

// Append tbody and then tableCaption
const tableBody = document.createElement('tbody');
tableElement.appendChild(tableBody);
tableElement.appendChild(tableCaption);

document.body.appendChild(formElement);
document.body.appendChild(tableElement);

function handleSubmit(event) {
    event.preventDefault();

    const newRow = document.createElement('tr');
    headFields.forEach((field) => {
        const tableData = document.createElement('td');

        if (field.toLowerCase() === 'gender') {
            const selectedGender = formElement.elements['gender'].value;
            tableData.innerText = selectedGender || '';
        } else if (field.toLowerCase() === 'choice of food') {
            const selectedFoodChoices = formElement.elements['foodChoice'];
            const foodValues = Array.from(selectedFoodChoices).filter(choice => choice.checked).map(choice => choice.value);
            tableData.innerText = foodValues.join(', ');
        } else {
            const inputElement = formElement.elements[field.toLowerCase().replace(/\s/g, '')];
            tableData.innerText = inputElement ? inputElement.value : "";
        }

        newRow.appendChild(tableData);
    });

    tableBody.appendChild(newRow);
}
