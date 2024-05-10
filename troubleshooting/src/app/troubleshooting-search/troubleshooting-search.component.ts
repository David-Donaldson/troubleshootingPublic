import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { TroubleshootingTreeComponent } from '../troubleshooting-tree/troubleshooting-tree.component';
import { Observables } from '../_helpers/observables';


@Component({
  selector: 'app-troubleshooting-search',
  templateUrl: './troubleshooting-search.component.html',
  styleUrls: ['./troubleshooting-search.component.scss', './../app.component.scss']
})

export class TroubleshootingSearchComponent implements OnInit, OnDestroy, AfterViewInit {

  searchText: any = "";
  toggleSearch?: boolean;
  TroubleshootingTreeSearch: any;
  TroubleshootingTreeSearchRoot: any;
  troubleshootingSteps: any;
  @ViewChild('searchbar') searchbar!: ElementRef;

  constructor(
    private tTree: TroubleshootingTreeComponent,
    private observable$: Observables,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getObservables();
  }

  getObservables() {
    this.observable$.toggleSearch.subscribe({
      next: (value) => {
        this.toggleSearch = value;
      }
    });
    this.observable$.searchText.subscribe({
      next: (value) => {
        this.searchText = value;
      }
    });
    this.observable$.TroubleshootingTreeSearch2.subscribe({
      next: (value) => {
        this.TroubleshootingTreeSearch = value;
      }
    });
    this.observable$.TroubleshootingTreeSearchRoot.subscribe({
      next: (value) => {
        this.TroubleshootingTreeSearchRoot = value;
      }
    });
    this.observable$.troubleshootingSteps.subscribe({
      next: (value) => {
        this.troubleshootingSteps = value;
      }
    });
  }

  openSearch() {
    this.renderer.selectRootElement('#searchbar').focus();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.selectRootElement('#searchbar').focus();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.observable$.toggleSearch.unsubscribe();
    //this.observable$.TroubleshootingTreeSearch.unsubscribe();
    this.observable$.searchText.unsubscribe();
  }

  searchClose(): void {
    this.observable$.searchText.next("");
    this.observable$.toggleSearch.next(false);
  }

  showSearchSelect(value: any): void {
    this.observable$.troubleshootingOption.next(value.issue);
    this.observable$.animationStateTechnology.next('out');
    this.observable$.animationStateIssue.next('in');
    Object.keys(this.TroubleshootingTreeSearchRoot).forEach(key => {
      var val = this.TroubleshootingTreeSearchRoot[key][value.issue];
      if (val) {
        this.observable$.troubleshootingSteps.next(val);
      }
    });
    this.observable$.toggleSearch.next(false);
    this.tTree.resetVars();
  }

  onkeyup(event: Event) {
    this.observable$.searchText.next((event.target as HTMLInputElement).value);
  }

}
