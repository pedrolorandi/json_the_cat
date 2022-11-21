const request = require('request');

const query = process.argv[2];
const url   = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log(error);
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    return console.log("The breed you're looking for does not exist.");
  }
  
  return console.log(data[0].description);
});