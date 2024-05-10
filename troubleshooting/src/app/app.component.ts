import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Observables } from './_helpers/observables';
import { LoaderService } from './_services/loader.service';
import { TroubleshootingSearchComponent } from './troubleshooting-search/troubleshooting-search.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  toggleSearch: boolean = false;
  outageArea: boolean = false;
  scrollContainer: any;

  constructor(
    private loaderService: LoaderService,
    private spinner: NgxSpinnerService,
    private observable$: Observables,
    private tSearch: TroubleshootingSearchComponent,
    private router: Router) { }

  ngOnInit() {
    this.getObservables();
  }

  getObservables() {
    this.observable$.toggleSearch.subscribe({
      next: (value) => { this.toggleSearch = value; }
    });
  }

  ngAfterViewInit() {
    this.loaderService.httpProgress().subscribe((status: boolean) => {
      (status) ? this.spinner.show() : this.spinner.hide();
    });
  }

  openSearch() {
    this.clearOptions();
    this.router.navigate([""]);
    setTimeout(() => {
      this.observable$.toggleSearch.next(true);
      this.tSearch.openSearch();
    }, 0);
  }

  searchClose() {
    this.observable$.searchText.next("");
    this.observable$.toggleSearch.next(false);
  }

  ngOnDestroy() {
    this.observable$.toggleSearch.unsubscribe();
  }

  clearOptions() {
    this.observable$.animationStateTechnology.next('out');
    this.observable$.animationStateIssue.next('out');
    this.observable$.troubleshootingOption.next('');
  }

}
