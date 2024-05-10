import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observables } from '../_helpers/observables';

@Component({
  selector: 'app-troubleshooting-dashboard',
  templateUrl: './troubleshooting-dashboard.component.html',
  styleUrls: ['./troubleshooting-dashboard.component.scss']
})
export class TroubleshootingDashboardComponent implements OnInit, OnDestroy {

  toggleSearch:boolean = false;
  constructor(private observable$:  Observables) { }

  ngOnInit(): void {
    this.observable$.toggleSearch.subscribe({
      next: (value)=> {this.toggleSearch = value;}
    });
  }

  ngOnDestroy(): void {
    //this.observable$.toggleSearch.unsubscribe();
  }

}
