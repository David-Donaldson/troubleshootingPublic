import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
//import { troubleshootingTree } from '../models/tree';
import { ModalService } from '../_services/modal.service';
import Swal from 'sweetalert2';
import { SlideInOutAnimation } from '../animations';
import { Observables } from '../_helpers/observables';
import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointService } from '../_services/breakpoint.service';
import { HttpService } from '../_services/http.service';
@Component({
  selector: 'app-troubleshooting-tree',
  templateUrl: './troubleshooting-tree.component.html',
  styleUrls: ['./troubleshooting-tree.component.scss', './../app.component.scss'],
  animations: [SlideInOutAnimation]
})
export class TroubleshootingTreeComponent implements OnInit, OnDestroy {

  title: any = 'troubleshooting';
  optionPhone: any = "";
  optionTV: any = "";
  optionInternet: any = "";
  optionMobile: any = "";
  animationStateTechnology: any = 'out';
  animationStateIssue: any = 'out';
  troubleshootingRoot: any;
  troubleshootingList: any;
  troubleshootingTV:any = [];
  troubleshootingInternet:any = [];
  troubleshootingPhone:any = [];
  troubleshootingMobile:any = [];
  troubleshootingSteps: any;
  troubleshootingOption: any;
  selectedItem: any;
  //troubleshootingTree: any = troubleshootingTree;
  TroubleshootingTreeSearch: any = [];
  TroubleshootingTreeSearch2: any = [];
  TroubleshootingTreeSearchRoot: any = [];
  searchText: any = '';
  responsiveObserve: any;

  divOptionsMediaStyle: boolean = false;

  constructor(
    private _httpService: HttpService,
    private modalService: ModalService,
    private observable$: Observables,
    private breakPoint: BreakpointService) { }

  ngOnInit(): void {
    //this.startTroubleshooting();
    this.getObservables();
    this.breakPoints();
    this.detectDivChanges();
    this.getTroubleshootingTree();
  }

  detectDivChanges() {
    const div = document.querySelector('#scroller') as HTMLElement;
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(mutation => {
      mutation.forEach(function (mutation) {
        // check for changes to the child list
        if (mutation.type === 'childList') {

          // check if anything was removed and if the specific element we were looking for was removed
          if (mutation.removedNodes.length > 0) {
            //Nothing Goes here for the time being.
          }
          else {
            const subDiv = document.querySelector('#scrollTo') as HTMLElement;
            const addedNodes = mutation.addedNodes[0].nodeName;
            if (subDiv != null) {
              if (addedNodes != 'MAT-TOOLTIP-COMPONENT') {
                subDiv!.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
              }
            }
            else {
              div!.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            }
            return;
          }
        }
      });
    });
    observer.observe(div, config);
  }

  scrollUpAuto() {
    const div = document.querySelector('#scroller_top') as HTMLElement;
    div!.scrollIntoView({ behavior: 'auto', block: "start", inline: "start" });
  }

  breakPoints() {
    this.responsiveObserve = this.breakPoint.breakPoint().subscribe(result => {
      this.divOptionsMediaStyle = false;
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.HandsetPortrait] ||
        breakpoints[Breakpoints.HandsetLandscape] ||
        breakpoints[Breakpoints.TabletLandscape] ||
        breakpoints[Breakpoints.TabletPortrait] ||
        breakpoints[Breakpoints.Medium]) {
        this.divOptionsMediaStyle = true;
      }
    })
  }

  getObservables() {
    this.observable$.troubleshootingOption.subscribe({
      next: (value) => {
        this.troubleshootingOption = value;
      }
    });
    this.observable$.animationStateTechnology.subscribe({
      next: (value) => {
        this.animationStateTechnology = value;
      }
    });
    this.observable$.animationStateIssue.subscribe({
      next: (value) => {
        this.animationStateIssue = value;
      }
    });
    this.observable$.troubleshootingSteps.subscribe({
      next: (value) => {
        this.troubleshootingSteps = value;
      }
    });
  }

  ngOnDestroy() {
    //this.observable$.TroubleshootingTreeSearch.unsubscribe();
    //this.observable$.troubleshootingSteps.unsubscribe();
    //this.observable$.animationStateIssue.unsubscribe();
    this.responsiveObserve.unsubscribe();
  }

  async getTroubleshootingTree(){
    if(localStorage.getItem("troubleshootingTreeFetch") == null || localStorage.getItem("troubleshootingTreeFetch") == ""){
      await this._httpService.getTroubleshootingTreeData().then(
        (resolve: any) => {
          localStorage.setItem("troubleshootingTreeFetch", JSON.stringify(resolve));
        });
    }
    var troubleshootingTreeFetch = JSON.parse(localStorage.getItem("troubleshootingTreeFetch") as string);

    Object.keys(troubleshootingTreeFetch).forEach(key => {
      let troubleshootingissueArray = this.parseObject(troubleshootingTreeFetch[key].serviceTypeDescription);
      switch(parseInt(key)){
        case 0:
          this.TroubleshootingTreeSearchRoot["tv"] = troubleshootingissueArray;
          break;
        case 1:
            this.TroubleshootingTreeSearchRoot["internet"] = troubleshootingissueArray;
            break;
        case 2:
          this.TroubleshootingTreeSearchRoot["phone"] = troubleshootingissueArray;
          break;
        case 3:
          this.TroubleshootingTreeSearchRoot["mobile"] = troubleshootingissueArray;
          break;
        default:
          break;
      }

      Object.keys(troubleshootingissueArray).forEach(key2 => {
        switch(parseInt(key)){
          case 0:
            this.troubleshootingTV.push(key2);
            break;
          case 1:
              this.troubleshootingInternet.push(key2);
              break;
          case 2:
            this.troubleshootingPhone.push(key2);
            break;
          case 3:
            this.troubleshootingMobile.push(key2);
            break;
          default:
            break;
        }
        this.TroubleshootingTreeSearch.push({ key2 });
        this.TroubleshootingTreeSearch2.push({ serviceTypeID: key, serviceType: troubleshootingTreeFetch[key].servicename, issue: key2})
      });
    });
    //error: () => {}
    this.observable$.TroubleshootingTreeSearch.next(this.TroubleshootingTreeSearch);
    this.observable$.TroubleshootingTreeSearch2.next(this.TroubleshootingTreeSearch2);
    this.observable$.TroubleshootingTreeSearchRoot.next(this.TroubleshootingTreeSearchRoot);
  }

  parseObject(objecttoParse:any){
    var parsedObject = JSON.parse(JSON.parse(objecttoParse));
    return parsedObject;
  }

  /* replaced by getTroubleshootingTree
  startTroubleshooting() {
    Object.keys(this.troubleshootingTree).forEach(key => {
      var variable = this.troubleshootingTree[key];
      this.TroubleshootingTreeSearchRoot.push(this.troubleshootingTree[key]);
      Object.keys(variable).forEach(keyz => {
        this.TroubleshootingTreeSearch.push({ keyz });
        this.TroubleshootingTreeSearch2.push({ serviceType: key, issue: keyz });
      })
    });

    this.observable$.TroubleshootingTreeSearch.next(this.TroubleshootingTreeSearch);
    this.observable$.TroubleshootingTreeSearch2.next(this.TroubleshootingTreeSearch2);
  }*/

  selectTroubleshootingOption(event: Event, name: any) {
    this.animationStateTechnology = 'out';
    this.animationStateIssue = 'out';
    this.troubleshootingList = [];
    this.troubleshootingRoot = name;

    switch (name) {
      case "phone":
        this.clearSelectedOption();
        this.optionPhone = 'selectedOption';
        this.selectedItem = "";
        this.branchOptions(event, "");
        this.observable$.animationStateTechnology.next('in');
        this.troubleshootingList = this.troubleshootingPhone;
        break;
      case "tv":
        this.clearSelectedOption();
        this.optionTV = 'selectedOption';
        this.selectedItem = "";
        this.branchOptions(event, "");
        this.observable$.animationStateTechnology.next('in');
        this.troubleshootingList = this.troubleshootingTV;
        break;
      case "internet":
        this.clearSelectedOption();
        this.optionInternet = 'selectedOption';
        this.selectedItem = "General Data Tips";
        this.branchOptions(event, "General Data Tips");
        this.observable$.animationStateTechnology.next('in');
        this.troubleshootingList = this.troubleshootingInternet;
        break;
      case "mobile":
        this.clearSelectedOption();
        this.optionMobile = 'selectedOption';
        this.selectedItem = "General Mobile Tips";
        this.branchOptions(event, "General Mobile Tips");
        this.observable$.animationStateTechnology.next('in');
        this.troubleshootingList = this.troubleshootingMobile;
        break;

    }
  }

  branchOptions(event: Event, name: any) {
    this.troubleshootingOption = name;
    this.selectedItem = name;
    this.observable$.troubleshootingSteps.next(this.TroubleshootingTreeSearchRoot[this.troubleshootingRoot][this.troubleshootingOption]);
    this.observable$.animationStateIssue.next('in');
  };

/* moved to troubleshooting-search.component.ts
  showSearchSelect(value: any) {
      Object.keys(this.TroubleshootingTreeSearchRoot).forEach(key => {
        var val = this.TroubleshootingTreeSearchRoot[key][value];
        if (val) {
          this.observable$.troubleshootingSteps.next(val);
        }
      });
      this.observable$.toggleSearch.next(false);
      this.resetVars();
  }
*/

  finalResponse(response: any) {
    switch (response) {
      case true:
        Swal.fire({
          icon: 'success',
          title: 'We’re happy that your service is now working. \n\n Thank you for choosing Flow!',

        }).then(() => {
          this.modalService.modalService.dismissAll();
          this.resetAfterResolved();
        });
        break;
      case false:
        this.observable$.troubleshootingOption.next(this.troubleshootingOption);
        this.modalService.contactFormModal();
    }
  }

  clearSelectedOption() {
    this.optionPhone = 'nonSelectedOption';
    this.optionTV = 'nonSelectedOption';
    this.optionInternet = 'nonSelectedOption';
    this.optionMobile = 'nonSelectedOption';
  }

  resetVars() {
    this.optionPhone = '';
    this.optionTV = '';
    this.optionInternet = '';
    this.optionMobile = '';
  }

  resetAfterResolved() {
    window.location.reload();
  }

  clearOption1() {
    this.resetVars();
    this.observable$.animationStateTechnology.next('out');
    this.observable$.animationStateIssue.next('out');
    this.observable$.troubleshootingOption.next('');
    this.scrollUpAuto();
  }

  clearOption2() {
    this.observable$.troubleshootingOption.next('');
    this.selectedItem = "";
  }

}
