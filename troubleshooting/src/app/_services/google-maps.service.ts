import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  myLatlng:any;
  map:any;
  infowindow:any = new google.maps.InfoWindow;
  constructor() { }

  imitMapVars(mapElement:any){
    this.myLatlng = { lat: 19.341271, lng: -81.342805};
    this.map = new google.maps.Map(mapElement, {
      zoom: 12,
      center: this.myLatlng,
    });
  }

  initMap(outageData:any): void {
    let labelIndex = 1;
    const icon = {
      url: 'https://maps.google.com/mapfiles/kml/shapes/caution.png',
      scaledSize: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 0)
    };
    const map = this.map;

    /* Advanced google marker pin customization that is not to be used for PROD yet
    const pinView = new google.maps.marker.PinView({
      scale: 1.5,
      background: '#1B9BE4',
      borderColor: '#ffffff',
      glyphColor: 'white'
    });*/

    outageData.forEach( (obj:any) => {
      /*Advanced google marker pin customization that is not to be used for PROD yet
      var marker = new google.maps.marker.AdvancedMarkerView({
        map,
        position: {lat: obj.lat, lng: obj.lng},
        content: pinView.element,
        title: obj.address
      });*/
      var marker = new google.maps.Marker({
        position: {lat: obj.lat, lng: obj.lng},
        map,
        label: ""+(labelIndex++),
        title: obj.address,
        animation: google.maps.Animation.DROP,
        //icon: icon
      });
      marker.addListener("click", () => {
        this.infowindow.setContent("<p style='font-size:17px;'>"+ obj.address + "</p>"+ "<p><b style='font-weight:900;'>"+ obj.date + "</b></p>");
        this.infowindow.open(map, marker);
        map.setZoom(16);
        map.setCenter(marker.getPosition() as google.maps.LatLng);
      });
    })
  }

  getMarkerPosition(lat:number, lng:number, address:string, date: string){
    const map = this.map;
    var marker = new google.maps.Marker({
      position: {lat, lng},
    });
    map.setZoom(16);
    map.setCenter(marker.getPosition() as google.maps.LatLng);
  }
}
