'use strict';

function Fetch () {
  fetch('https://data.seattle.gov/resource/c4b9-qn5y.json')
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
}
