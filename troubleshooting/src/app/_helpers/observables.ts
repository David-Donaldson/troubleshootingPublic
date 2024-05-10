import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class Observables {
  toggleSearch = new Subject<boolean>();
  searchText = new Subject<string>();
  TroubleshootingTreeSearch = new BehaviorSubject('');
  TroubleshootingTreeSearchRoot = new BehaviorSubject('');
  TroubleshootingTreeSearch2 = new BehaviorSubject('');
  troubleshootingOption = new BehaviorSubject('');
  animationStateTechnology = new BehaviorSubject('out');
  animationStateIssue = new BehaviorSubject('out');
  troubleshootingSteps = new BehaviorSubject([]);
}
