fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent/region using Filter function
    const asianCountries = data.filter(country => country.region === 'Asia');

    console.log('Asian Countries:', asianCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);

    console.log('Countries with Population Less than 2 Lakhs:', countriesWithPopulationLessThan2Lakhs);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log('Total Population:', totalPopulation);

    // Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD);

    console.log('Country with USD as currency:', countryWithUSD);
  })
  .catch(error => console.log('Error fetching data:', error));
