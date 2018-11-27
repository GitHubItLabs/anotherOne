import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

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

  okSme(pero) {
    console.log(pero)
  }
}
