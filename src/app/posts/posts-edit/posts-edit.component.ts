import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
  edit: boolean;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    debugger;
    let pero = this.activatedRoute.snapshot.params.mode;
    pero == 'edit' ? this.edit = true : this.edit = false;
  }

}
