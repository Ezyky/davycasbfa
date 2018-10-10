import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-map',
    template: require('./map.component.html')
})

export class MapComponent implements OnInit {

    @ViewChild('googleMap') gmapElement: any;
    map: google.maps.Map;

    constructor() { }

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        var mapProp = {
            center: new google.maps.LatLng(12.3656600, -1.5338800),
            zoom: 14,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
            mapTypeId: google.maps.MapTypeId.HYBRID
            // mapTypeId: google.maps.MapTypeId.SATELLITE
            // mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({ position: mapProp.center });
        marker.setMap(this.map);

        var infowindow = new google.maps.InfoWindow({
            content: 'DAVYCAS'
        });

        infowindow.open(this.map, marker);

    }
}
