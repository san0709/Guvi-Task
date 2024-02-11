const formElement = document.createElement('form');

const fname = document.createElement('input');
fname.type = 'text';
fname.placeholder = 'First name';
fname.required = true;

const lname = document.createElement('input');
lname.type = 'text';
lname.placeholder = 'Last name';

const address = document.createElement('text');

const pincode = document.createElement('input');
pincode.type = 'number';

const gender = document.createElement('button');
gender.type = 'radio';

const food = document.createElement('dropdown');
const state = document.createElement('select');
const country = document.createElement('select');
formElement.append(fname, lname, address, pincode, gender, food, state, country);
document.body.appendChild(formElement);


//f name and last name address, pincode,gender, choice of foot, state, country