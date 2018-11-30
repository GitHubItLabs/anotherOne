import { Component, OnInit } from '@angular/core';
import { NewPostService } from './service/new-post.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  newPost: any;

  constructor(
    private newPostService: NewPostService,
  ) { }

  ngOnInit() {
    this.getAllNew();
  }

  getAllNew() {
    this.newPostService.getNewPost().subscribe(res => {
      this.newPost = res;
    })
  }
}
