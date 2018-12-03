import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  closeResult: string;

  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalEden') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {

  }

  open(id) {
    debugger;
    console.log(id);
    return this.modalService.open(this.dialogTemplate,{
        ariaLabelledBy: 'modal-basic-title',
      }).result.then((close) => {
        console.log('close');
        this.submit.emit(id);
      }, (dismiss) => {
        console.log('dismiss')
      });
  }

}
