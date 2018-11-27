import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() title: string;
  @Output() ok = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.ok.emit('ok sme')
  }

}
