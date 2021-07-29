const request = require('request');

// const breed = args[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
// console.log(breed)

const fetchBreedDescription = function(breed, callback) {
  request(url + breed, 'utf8', (error, response, body) => {
    if (error) {
      // return console.log("Error: Invalid URL");
      callback(error, null);
    }
    const data = JSON.parse(body);
      
    if (data[0] === undefined) {
      // throw Error(`${breed} is not found!`);
      callback(`${breed} was not found!`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };