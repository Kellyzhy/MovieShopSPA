import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetails } from 'src/app/shared/models/moviedetails';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h6 class="modal-title">Are you sure you wanna buy</h6>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <h4>{{moviedetail?.title}} which is $ {{moviedetail?.price}}</h4>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Yes</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">No</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() moviedetail:MovieDetails;
   constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'movie-window-component',
  templateUrl: './movie-window.component.html',
})
export class MovieWindowComponent {
  @Input() moviewindow:MovieDetails;
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.moviedetail = this.moviewindow;
   }
}