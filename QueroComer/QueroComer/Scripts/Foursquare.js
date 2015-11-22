$(document).ready(function () {
    getLocation();
    setTimeout(function () { if (this.latitude != undefined) { loadPlaces(), initMap(this.latitude, this.longitude); } }, 3000);
});

var map;
var markers = new Array();
function initMap(latitude, longitude) {
    if (latitude === undefined) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

           this.map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 12
            });
           
        });
        marker = new google.maps.Marker();

    }
}

var CLIENT_ID = "YTJLO3U2IOBEJHV2ADUNE4DUAXU2TAJDUNBTHWTSO5TI3GX2";
var CLIENT_SECRET = "OQH3VULW02XXKKS2V4YYA52BE3NFF4VGU3H4RD11SRT1WG0I";
var latitude;
var latitudeFormat;
var longitude;
var longitudeFormat;
var coordenadas;
var radius = 15000;

function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        formatPosition();
    });
}

function formatPosition() {
    this.latitudeFormat = this.latitude.toPrecision(4).toString();
    this.longitudeFormat = this.longitude.toPrecision(4).toString();
    this.coordenadas = this.latitudeFormat.toString() + "," + this.longitudeFormat.toString();
}


var loadPlaces = function () {
    if (this.latitude === undefined) {
        setTimeout(loadPlaces(), 150);
    } else {
        explorePlaces("", true);
    }
}

var searchPlaces = function (busca, openNow, sortByDistance, price) {
    hideMarkers();
    if (openNow === undefined)
        openNow = true;
    if (sortByDistance === undefined)
        sortByDistance = false;

    var endpoint = "https://api.foursquare.com/v2/venues/search";
    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815", sortByDistance: sortByDistance, price: price, openNow: openNow, "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(".sugestoes").html("");
        $(".sugestoes").html("<ul></ul>");
        $(data.response.venues).each(
            function () {
                $(".sugestoes ul").append(montaLI(this.location.lat, this.location.lng, this.name));
                addMarker(this.location.lat, this.location.lng, this.name);
            }
            );
    });
    map.setCenter({ lat: this.latitude, lng: this.longitude });
}
var explorePlaces = function (busca, openNow, sortByDistance, price) {
    hideMarkers();
    if (openNow === undefined)
        openNow = true;
    if (sortByDistance === undefined)
        sortByDistance = false;
    var endpoint = "https://api.foursquare.com/v2/venues/explore";

    $.get(endpoint, { "client_id": this.CLIENT_ID, "client_secret": this.CLIENT_SECRET, "v": "20130815", sortByDistance: sortByDistance, price: price, openNow: openNow, "ll": this.coordenadas, "query": busca, radius: this.radius }, function (data) {
        $(".sugestoes").html("<ul></ul>");
        $(data.response.groups).each(function () {
            $(this.items).each(function () {
                $(".sugestoes ul").append(montaLI(this.venue.location.lat, this.venue.location.lng, this.venue.name));
                addMarker(this.venue.location.lat, this.venue.location.lng, this.name);
            });
        });
    });
    map.setCenter({ lat: this.latitude, lng: this.longitude });
}

var montaLI = function (lat, lng, name) {
    return "<li onclick='mapZoom(" + lat + ", " + lng + ")'>" + name + "</li>";
}

var addMarker = function (lat, lng, name) {
   var marker = new google.maps.Marker({
        position: { lat: Number(lat), lng: Number(lng) },
        map: map,
        title: name
    });
    marker.addListener('click', function () {
        mapZoom(lat, lng);
    });
    this.markers.push(marker);
}

var mapZoom = function (lat, lng) {
    if(map.zoom <= 13)
    map.setZoom(map.zoom + 1);
    map.setCenter({lat : lat, lng : lng});
}
function hideMarkers() {
    /* Remove All Markers */    
    while (this.markers.length) {
        this.markers.pop().setMap(null);
    }    
}
