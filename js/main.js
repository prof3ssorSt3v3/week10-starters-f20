document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', getData);
});

function getData() {
  fetch(url)
    .then(function (response) {
      //response is the response object
      //we extract the text, json, or blob from it
      return response.json();
    })
    .then(function (data) {
      //data is the json object coming from the previous then( ) function
      //build the HTML from the data object
      console.log(data);
    })
    .catch(function (err) {
      //err is the Error object
      //This catch method runs if there is an error anywhere in  the process.
    });
}
