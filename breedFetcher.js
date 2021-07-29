const args = process.argv;
const breed = args[2];
// console.log(breed)

const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url+breed, 'utf8', (error, response, body) => {
// console.log(url)
// console.log(typeof body)
const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data)
console.log(data[0].description)
});