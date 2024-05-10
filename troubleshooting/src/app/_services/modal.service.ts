import { Injectable, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { OutagesComponent } from '../outages/outages.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalService: NgbModal) { }

  contactFormModal() {
    this.modalService.open(ContactFormComponent, { centered: true, size: 'md', backdrop: 'static', scrollable: true }).result.then(
      (result) => {
        if (result == 'YES') {
          Swal.fire({
            icon: 'success',
            title: 'Details Submitted!',
            //showConfirmButton: false,
          }).then(() => {
            this.modalService.dismissAll();
          });
        }
        else {
          this.modalService.dismissAll();
        }
      },
      (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  outageModal() {
    this.modalService.open(OutagesComponent, {
      centered: true, size: 'lg',
      backdrop: 'static',
      scrollable: true,
      //keyboard: false,
      //windowClass:'Outage-Modal'
    }).result.then(
      (result: any) => {

      }
    ).catch((res) => {

    });
  }

}
