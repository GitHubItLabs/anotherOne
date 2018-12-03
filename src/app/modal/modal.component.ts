import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  closeResult: string;
  currentId: string;
  currentTitle: string;

  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalEden') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {

  }

  open(item) {
    debugger;
    this.currentTitle = item.title;
    this.currentId = item.id;
    return this.modalService.open(this.dialogTemplate, {
      ariaLabelledBy: 'modal-basic-title',
    }).result.then((close) => {
      console.log('close');
      this.submit.emit(item.id);
    }, (dismiss) => {
      console.log('dismiss')
    });
  }

}
