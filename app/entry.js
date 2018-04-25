'use strict';

const fs = require ('fs');
//nope
console.log('are you working?');

function Fetch () {
  fetch('https://data.seattle.gov/resource/c4b9-qn5y.json')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(myJson => {
      fs.writeFileSync(`wages.json`, myJson, err => {
        if (err) throw err;
        console.log('file written');
      })
      console.log(myJson);
    })
    .catch(() => {
      console.log('error');
    })
}

Fetch();
