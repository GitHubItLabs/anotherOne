import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from './services/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];


  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

  delete(id) {
    this.postService.deletePost(id).subscribe(res => {
      this.getAll();
      
    })

  }

}
