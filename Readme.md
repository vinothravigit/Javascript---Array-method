# Array Methods using JavaScript

This README provides guidance on solving problems using array methods in JavaScript, focusing on manipulating data from the REST Countries API (https://restcountries.com/v3.1/all).

## Problem Statement

Given the REST Countries API data, the following tasks need to be accomplished using array methods:

1. **Get all the countries from the Asia continent/region using the Filter function.**
2. **Get all the countries with a population of less than 2 lakhs using the Filter function.**
3. **Print the following details - name, capital, flag - using the forEach function.**
4. **Print the total population of countries using the reduce function.**
5. **Print the country that uses US dollars as currency.**

## Solution Approach

1. **Filter Function**: Utilize the `filter` method to extract countries from the Asia continent/region based on their region property.

2. **Filter Function with Population Condition**: Again, use the `filter` method to retrieve countries with a population of less than 2 lakhs by applying a population condition.

3. **forEach Function for Printing Details**: Employ the `forEach` method to iterate over each country and print specific details such as name, capital, and flag.

4. **Reduce Function for Total Population**: Apply the `reduce` method to compute the total population of all countries by accumulating the population of each country.

5. **Finding Country with USD Currency**: Utilize the `find` method to locate the country that uses US dollars as currency based on the currencies property.

## Usage

To implement the provided solution:

1. Fetch data from the REST Countries API using appropriate methods (e.g., `fetch`).
2. Utilize the described array methods (filter, forEach, reduce, find) to solve the specified tasks.
3. Ensure proper error handling and data validation throughout the process.
4. Adapt the code as necessary based on the actual structure and endpoints of the REST Countries API.

## Notes

- Ensure compliance with the terms of service and usage policies of the REST Countries API.
- Test the solution thoroughly to verify correctness and efficiency.
- Consider modularizing the code for better maintainability and reusability.

By following this README, you can effectively utilize array methods in JavaScript to solve problems related to manipulating data from the REST Countries API.