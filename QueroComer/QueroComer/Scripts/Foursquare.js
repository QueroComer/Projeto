var CLIENT_ID = "YTJLO3U2IOBEJHV2ADUNE4DUAXU2TAJDUNBTHWTSO5TI3GX2";
var CLIENT_SECRET = "OQH3VULW02XXKKS2V4YYA52BE3NFF4VGU3H4RD11SRT1WG0I";
var latitude;
var longitude;
var coordenadas;
var radius = 5000;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    this.latitude = position.coords.latitude.toPrecision(4).toString();
    this.longitude = position.coords.longitude.toPrecision(4).toString();
    this.coordenadas = this.latitude.toString() + "," + this.longitude.toString();
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(this.coordenadas);
}

var searchPlaces = function (busca) {
    getLocation();
    var endpoint = "https://api.foursquare.com/v2/venues/search";
    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815", "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(data.response).each(
            function () {
                console.log(this);
            }
            );
    });
}
var explorePlaces = function (busca) {
    getLocation();
    var endpoint = "https://api.foursquare.com/v2/venues/explore";

    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815", "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(data.response).each(
          function () {
              console.log(this);
          }
          );
    });
}