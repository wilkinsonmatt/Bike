import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-service.js';

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(zipcode) {
  const response = await BikeService.getBike(zipcode);
  getElements(response);
  console.log(response);
}

$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let zipcode = parseInt($('#zipcode').val());
    makeApiCall(zipcode);
  });
});
