const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.onload = function() {
const response = JSON.parse(xhr.responseText);
    const asiaCountries = response.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);
    const lowPopulationCountries = response.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", lowPopulationCountries);

    response.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
    });
    const totalPopulation = response.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of all countries:", totalPopulation);

    const usdCountry = response.find(country => country.currencies && country.currencies.USD);
    if (usdCountry) {
      console.log("Country that uses US dollars as currency:", usdCountry.name.common);
    } else {
      console.log("No country uses US dollars as currency in the data.");
    }
 
};

xhr.send();
