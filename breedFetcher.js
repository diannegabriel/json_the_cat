const args = process.argv;
const request = require('request');

const breed = args[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
// console.log(breed)

request(url + breed, 'utf8', (error, response, body) => {
  if (error) {
    return console.log("Error: Invalid URL");
  }
  const data = JSON.parse(body);
    
  if (data[0] === undefined) {
    throw Error(`${breed} is not found!`);
  }

  console.log(data[0].description);
});