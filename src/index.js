import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './bike-service.js';


function convertToHumanTime(unixtime) {
  let time = new Date(unixtime * 1000);
  return time;
}

function getBikeInfo(response) {
  if (response.bikes) {
    $('.showTitle').html("");
    for(let i = 0; i < response.bikes.length; i++) { 
      let a = i+1;
      $('.showTitle').append("<b>Bike " + a + ": " + "</b>" + response.bikes[i].title + " was stolen " + convertToHumanTime(response.bikes[i].date_stolen) + "<br>");
    }
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(zipcode) {
  const response = await BikeService.getBike(zipcode);
  getBikeInfo(response);
  console.log(response);
}

$(document).ready(function() {
  $('#bikeLocation').click(function() {
    let zipcode = parseInt($('#zipcode').val());

    makeApiCall(zipcode);
  });
});

// "bikes": [
//   {
//     "date_stolen": 1656600012,
//     "description": null,
//     "frame_colors": ["Black"],
//     "frame_model": "23131",
//     "id": 1334880,
//     "is_stock_img": false,
//     "large_img": null,
//     "location_found": null,
//     "manufacturer_name": "top",
//     "external_id": null,
//     "registry_name": null,
//     "registry_url": null,
//     "serial": "Suzuki Boulevard",
//     "status": "stolen",
//     "stolen": true,
//     "stolen_coordinates": [40.75, -74],
//     "stolen_location": "New York, Ny, NY 10001, US",
//     "thumb": null,
//     "title": "2022 top 23131 unicycle",
//     "url": "https://bikeindex.org/bikes/1334880",
//     "year": 2022
//   },
//   {
//     "date_stolen": 1656596927,
//     "description": null,
//     "frame_colors": ["Black"],
//     "frame_model": "ALUXX-grade butted aluminum",
//     "id": 1334832,
//     "is_stock_img": false,
//     "large_img": null,
//     "location_found": null,
//     "manufacturer_name": "Giant",
//     "external_id": null,
//     "registry_name": null,
//     "registry_url": null,
//     "serial": "Unknown",
//     "status": "stolen",
//     "stolen": true,
//     "stolen_coordinates": [ 43.04,-87.9],
//     "stolen_location": "Milwaukee, WI 53202, US",
//     "thumb": null,
//     "title": "2018 Giant ALUXX-grade butted aluminum",
//     "url": "https://bikeindex.org/bikes/1334832",
//     "year": 2018
//   },