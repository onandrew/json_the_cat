const request = require('request');

const fetchBreed = function(breed, cb) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (error, response, body) => {
    if (error) {
      console.log(`error: ${error}`);
      cb(error, null);
    }
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data[0]) {
      cb(null, data[0].description);
    }
    else {
      console.log(`Breed not found`);
    }
  });
};



