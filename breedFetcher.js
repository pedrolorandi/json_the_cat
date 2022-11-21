const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url   = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  let errorMessage = null;
  let description  = null;

  request(url, (error, response, body) => {
    if (error) {
      errorMessage = error;
    } else {
      const data = JSON.parse(body);
      !data[0] ? errorMessage = "The breed you're looking for does not exist." : description = data[0].description;
    }
    
    return callback(errorMessage, description);
  });
};

module.exports = { fetchBreedDescription };