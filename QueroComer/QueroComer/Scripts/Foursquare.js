$(document).ready(function () {
    getLocation();
    setTimeout(loadPlaces(), 3000);
});

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
}


var loadPlaces = function() {    
    if (this.latitude === undefined) {
        setTimeout(loadPlaces(),150);
    } else {
        explorePlaces("", true);
    }
}

var searchPlaces = function (busca, openNow, sortByDistance, price) {    
    if (openNow === undefined)
        openNow = true;
    if (sortByDistance === undefined)
        sortByDistance = false;    
    
    var endpoint = "https://api.foursquare.com/v2/venues/search";
    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815",sortByDistance: sortByDistance,price:price , openNow : openNow, "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(".sugestoes").html("");
        $(".sugestoes").html("<ul></ul>");
        $(data.response.venues).each(
            function () {
                $(".sugestoes ul").append("<li>" + this.name + "</li>");
            }
            );
    });
}
var explorePlaces = function (busca, openNow, sortByDistance, price) {    
    if (openNow === undefined)
        openNow = true;
    if (sortByDistance === undefined)
        sortByDistance = false;  
    var endpoint = "https://api.foursquare.com/v2/venues/explore";

    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815",sortByDistance: sortByDistance,price:price, openNow: openNow, "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(".sugestoes").html("<ul></ul>");
        $(data.response.groups).each(function () {
            $(this.items).each(function () {
                $(".sugestoes ul").append("<li>" + this.venue.name + "</li>");
            });
        });
    });
}
