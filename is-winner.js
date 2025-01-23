// Determine if a country is a FIFA World Cup winner meeting specific criteria
async function isWinner(country) {
    try {
      // Retrieve country data from database
      const countryData = await db.getWinner(country);
  
      // Validate country existence
      if (!countryData) {
        return `${country} never was a winner`;
      }
  
      // Filter for European countries only
      if (countryData.continent !== 'Europe') {
        return `${countryData.name} is not what we are looking for because of the continent`;
      }
  
      // Get competition results for the country
      const results = await db.getResults(countryData.id);
  
      // Validate results existence
      if (results.length === 0) {
        return `${countryData.name} never was a winner`;
      }
  
      // Require at least 3 championship wins
      if (results.length < 3) {
        return `${countryData.name} is not what we are looking for because of the number of times it was champion`;
      }
  
      // Format winning years and scores
      const years = results.map(result => result.year).join(', ');
      const scores = results.map(result => result.score).join(', ');
  
      return `${countryData.name} won the FIFA World Cup in ${years} winning by ${scores}`;
  
    } catch (error) {
      // Handle specific 'Country Not Found' error
      if (error.message === 'Country Not Found') {
        return `${country} never was a winner`;
      }
      // Rethrow other unexpected errors
      throw new Error(error.message);
    }
  }