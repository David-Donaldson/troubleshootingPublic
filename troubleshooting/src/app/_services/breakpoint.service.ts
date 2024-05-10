import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  constructor(private responsive: BreakpointObserver) { }
  breakPoint(): Observable<any>{
    return this.responsive.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]);
  }
}
