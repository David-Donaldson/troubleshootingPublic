import { Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { outageData } from './../models/outageData';
import { GoogleMapsService } from '../_services/google-maps.service';
import { BreakpointService } from '../_services/breakpoint.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterViewInit, OnDestroy {
  //allCoordinates:any = outageData.map(({address, date, ...rest}) => { return rest; });
  divMapMediaStyle:boolean = false;
  responsiveObserve:any;
  constructor(private googleMaps: GoogleMapsService, private breakPoint: BreakpointService) { }

  ngOnInit(): void {
    this.breakpoints();
  }

  breakpoints(){
    this.responsiveObserve = this.breakPoint.breakPoint().subscribe( result => {
      this.divMapMediaStyle = false;
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.HandsetPortrait]) {
        this.divMapMediaStyle = true;
      }
    })
  }

  ngAfterViewInit(): void {
    this.googleMaps.imitMapVars(document.getElementById("map") as HTMLElement);
    this.googleMaps.initMap(outageData);
  }

  ngOnDestroy(): void {
    this.responsiveObserve.unsubscribe();
  }
}
/* this was moved to the index.html core file.
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
*/
