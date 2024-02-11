const formElement = document.createElement('form');

const divElement = document.createElement('div');
divElement.className = 'div-style';
const inputElements = ['First name', 'Last name', 'Address','Pincode', 'Gender', 'Choice of Food', 'State','Counry'];
inputElements.forEach(element => {
    const labelElement = document.createElement('label');
    labelElement.textContent = element;
    labelElement.style.color = "white";
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.required = true;
    inputElement.className = 'styled-input';
    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);
});

formElement.appendChild(divElement);
document.body.appendChild(formElement);

