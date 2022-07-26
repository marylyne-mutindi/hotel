function myMap() {
    var denver = new google.maps.LatLng(39.742043, -104.991531);
    var newYork = new google.maps.LatLng(40.730610, -73.935242);
    var washington = new google.maps.LatLng(38.889931, -77.009003);
    var chicago = new google.maps.LatLng(41.881832, -87.623177);

    var mapOptions = {
        center: chicago,
        scrollwheel: false,
        zoom: 4,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#747474"
            },
                    {
                        "lightness": "23"
            }
        ]
    },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f38eb0"
            }
        ]
    },
            {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ced7db"
            }
        ]
    },
            {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffa5a8"
            }
        ]
    },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c7e5c8"
            }
        ]
    },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d6cbc7"
            }
        ]
    },
            {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c4c9e8"
            }
        ]
    },
            {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b1eaf1"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "100"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
            },
                    {
                        "lightness": "100"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffd4a5"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe9d2"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "3.00"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "weight": "0.30"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#747474"
            },
                    {
                        "lightness": "36"
            }
        ]
    },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#e9e5dc"
            },
                    {
                        "lightness": "30"
            }
        ]
    },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
            },
                    {
                        "lightness": "100"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#d2e7f7"
            }
        ]
    }
]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);



    /*-----map marker-----*/
    var marker = new google.maps.Marker({
        position: chicago,
        animation: google.maps.BOUNCE
    });
    var marker2 = new google.maps.Marker({
        position: washington,
        animation: google.maps.BOUNCE
    });
    var marker3 = new google.maps.Marker({
        position: denver,
        animation: google.maps.BOUNCE
    });
    var marker4 = new google.maps.Marker({
        position: newYork,
        animation: google.maps.BOUNCE
    });
    var marker5 = new google.maps.Marker({
        position: denver,
        animation: google.maps.BOUNCE
    });

    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);


    /*--------open and info window when clicking on marker-------*/
    google.maps.event.addListener(marker, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "4 Goldfield Rd.<br/>West Chicago, HI 96815"
        });
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker2, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "123 6th St.<br/>Washignton, FL 32904"
        });
        infowindow.open(map, marker2);
    });

    google.maps.event.addListener(marker3, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "44 Shirley Ave.<br/>Denver, IL 60185"
        });
        infowindow.open(map, marker3);
    });

    google.maps.event.addListener(marker4, 'click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "70 Bowman St.<br/>New York, CT 06074"
        });
        infowindow.open(map, marker4);
    });


}
