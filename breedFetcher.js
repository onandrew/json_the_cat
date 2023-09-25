const request = require('request');

const fetchBreedDescription = function(breedName, cb) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      cb(error, null);
    }
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data[0]) {
      cb(null, data[0].description);
    } else {
      cb('Invalid breed', null);
    }
  });
};

module.exports = { fetchBreedDescription };