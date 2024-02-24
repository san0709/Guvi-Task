const apiUrl = "https://restcountries.com/v3.1/all";

const createTableHeader = () => {
    const existingHeader = document.getElementById("countries-table-header");

    // Check if header already exists
    if (!existingHeader) {
        const theader = document.createElement("tr");

        //create th
        const tableHead1 = document.createElement("th");
        tableHead1.innerText = "Country";

        const tableHead2 = document.createElement("th");
        tableHead2.innerText = "Capital";

        const tableHead3 = document.createElement("th");
        tableHead3.innerText = "Continent";

        // Set an id to the header for future reference
        theader.id = "countries-table-header";

        //Append the th elements to the table header row
        theader.append(tableHead1, tableHead2, tableHead3);

        // Append the thead to the table
        const tableHead = document.getElementById("countries-table-head");
        tableHead.appendChild(theader);
    }
};


const loadCountries = ({ name, capital, continents }) => {

    // table row
    const row = document.createElement("tr");

    // table cells for name, capital, and continents
    const nameCell = document.createElement("td");
    nameCell.textContent = name.common;

    const capitalCell = document.createElement("td");
    capitalCell.textContent = capital;

    const continentsCell = document.createElement("td");
    continentsCell.textContent = continents;

    // Append cells to the row
    row.append(nameCell, capitalCell, continentsCell);

    // Append the row to the table body
    const tableBody = document.getElementById("countries-table-body");
    tableBody.appendChild(row);

};

const getCountries = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        createTableHeader();
        data.forEach(country => {
            loadCountries(country);
        });
    } catch (error) {
        console.log(error);
    }
};
