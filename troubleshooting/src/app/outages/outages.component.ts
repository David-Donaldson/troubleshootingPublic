import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { outageData } from './../models/outageData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Observables } from '../_helpers/observables';
import { BehaviorSubject, map } from 'rxjs';
import { HttpService } from '../_services/http.service';
import { GoogleMapsService } from '../_services/google-maps.service';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointService } from '../_services/breakpoint.service';

@Component({
  selector: 'app-outages',
  templateUrl: './outages.component.html',
  styleUrls: ['./outages.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OutagesComponent implements OnInit, AfterViewInit, OnDestroy {
  showFiller = false;
  searchText: any = '';
  isActive: boolean = false;
  outageList$ = new BehaviorSubject(outageData);
  divSliderMediaStyle: boolean = false;
  responsiveObserve: any;

  @ViewChild('closebutton') closebutton: any;

  constructor(
    private modalService: NgbModal,
    public dialog: MatDialog,
    private observable$: Observables,
    private _http: HttpService,
    private googleMaps: GoogleMapsService,
    private breakPoint: BreakpointService
  ) {}

  ngOnInit(): void {
    this.observable$.animationStateTechnology.next('out');
    this.observable$.animationStateIssue.next('out');
    this.observable$.troubleshootingOption.next('');
    this.breakPoints();
  }

  ngOnDestroy(): void {
    this.responsiveObserve.unsubscribe();
  }

  breakPoints() {
    this.responsiveObserve = this.breakPoint
      .breakPoint()
      .subscribe((result) => {
        this.divSliderMediaStyle = false;
        const breakpoints = result.breakpoints;
        if (
          breakpoints[Breakpoints.HandsetPortrait] ||
          breakpoints[Breakpoints.HandsetLandscape] ||
          breakpoints[Breakpoints.TabletLandscape] ||
          breakpoints[Breakpoints.TabletPortrait] ||
          breakpoints[Breakpoints.Medium]
        ) {
          this.divSliderMediaStyle = true;
        }
      });
  }

  ngAfterViewInit() {
    //const listing = outageData.map( obj => ({...obj, outageLocation: this.addressLookup(obj.latitude, obj.longitude)}));
    //this.transform();
  }

  closemodal() {
    this.modalService.dismissAll();
  }

  toggle(event: Event) {
    this.isActive = !this.isActive;
    this.divSliderMediaStyle
      ? document.querySelector('.custom-slider')?.classList.toggle('active')
      : document.querySelector('.navigation')?.classList.toggle('active');
  }

  transform() {
    //find a way to optimize this code with full rxjs
    //const listing = outageData.map( obj => ({...obj, outageLocation: this.addressLookup(obj.latitude, obj.longitude)}));
    const listing = outageData.map((obj) => ({ ...obj, outageLocation: '' }));

    //Reverse Geocoding Lookup for Addresses
    /*listing.forEach(obj => {
        this.addressLookup(obj.lat, obj.lng).subscribe( (result:any) =>{
          obj.outageLocation = (result[0])? result[0].long_name.replace(" Parish", "") : "Address Err - Not Found";
        });
      });
    */
    this.outageList$.next(listing);
  }

  selectMarker(lat: number, lng: number, address: string, date: string) {
    this.googleMaps.getMarkerPosition(lat, lng, address, date);
  }

  addressLookup(lat: number, lng: number) {
    //this._http.reverseGeocode(18.4139, -77.1022).subscribe(result => console.log(result));
    return this._http.reverseGeocode(lat, lng).pipe(
      map((response) =>
        response.results[0].address_components.filter((x: any) =>
          x.types.includes('administrative_area_level_1')
        )
      )
      //map(response =>  ( {...response[0], formatted_address: ( (response[0])? response[0].formatted_address.replace(" Parish", "") : "Not Found")} )),
    );
  }
}
