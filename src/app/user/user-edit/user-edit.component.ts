import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  array: any = [];
  interest: string;
  item: string;
  index: any;

  constructor() { }

  ngOnInit() {
  }

  addInterest() {
    this.index = this.array.indexOf(this.interest);

    if (this.index === -1) {
      this.array.push(this.interest);
      this.interest = '';
    }

  }

  deleteInterest() {
    this.index = this.array.indexOf(this.item);
    this.array.splice(this.index, 1);
  }

}
