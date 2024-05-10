import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpService } from '../_services/http.service';
import { ModalService } from '../_services/modal.service';
import { Observables } from '../_helpers/observables';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', '../app.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  contactForm: any = FormGroup;
  submitted: boolean = false;
  contactFormObservable: any;
  emailObservable: any;
  accountNumber: any;
  issueSelected: any;
  issueSelectedArray: any
  serviceType: any;
  TroubleshootingTreeSearch: any;
  filteredValue: any;
  arrayShift: any;
  constructor(
    private _http: HttpService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private observable$: Observables,
    private recaptchaV3Service: ReCaptchaV3Service
    ) { }

  ngOnInit(): void {
    this.observable$.troubleshootingOption.subscribe({
      next: (value) => {
        this.issueSelected = value;
      }
    });
    this.observable$.TroubleshootingTreeSearch2.subscribe({
      next: (value) => {
        this.TroubleshootingTreeSearch = value;
      }
    });
    this.contactForm = this.formBuilder.group({
      AccountNo: [''],
      CustomerName: ['', [Validators.required]],
      ContactNumber: ['', [Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$"), Validators.required]],
      //secondaryContactNumber: ['', [Validators.minLength(11), Validators.maxLength(11), Validators.pattern("^[0-9]*$")]],
      EmailAddress: ['', [Validators.email, Validators.required]],
      IssueSelected: [''],
      AdditionalInfo: [''],
      ServiceType: [''],
      TroubleshootingServicesId: [''],
    });
    //using reactive forms, you must use patchvalue to update input fields not select fields
    this.issueSelectedArray = this.TroubleshootingTreeSearch.filter((res: any) => {
      return res.issue == this.issueSelected;
    })
    this.contactForm.patchValue({
      IssueSelected: this.issueSelected,
      ServiceType: this.issueSelectedArray[0].serviceType.toUpperCase(),
      //Added 1 as the array index will not match the Database ID once it has been sent over
      TroubleshootingServicesId: parseInt(this.issueSelectedArray[0].serviceTypeID)+1,
    });
  }

  get f() { return this.contactForm.controls; }

  issueLookup(value: String): String {
    var serviceTye = '';
    this.TroubleshootingTreeSearch.filter((res: any) => {
      if (res.issue == value) {
        serviceTye = res.serviceType
      }
    });
    return serviceTye.toUpperCase();
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    delete this.contactForm.value['ServiceType'];

    this.recaptchaV3Service.execute("importantAction").subscribe( (captchatoken:string) => {
      this.contactFormObservable = this._http.submitContactform(this.contactForm.value, captchatoken).subscribe({
        next: (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Details Submitted!'
          }).then(() => {
            this.modalService.modalService.dismissAll();
          });
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error Submitting Details'
          })
        }
      });
    });
  }

  changeServiceType() {
    this.contactForm.patchValue({
      TroubleshootingServicesId: this.issueLookup(this.f.issueSelected.value),
    });
  }

  ngOnDestroy() {
    this.contactFormObservable?.unsubscribe();
    this.emailObservable?.unsubscribe();
  }

  closemodal() {
    this.modalService.modalService.dismissAll()
  }

}
