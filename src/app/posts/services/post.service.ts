import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  endpoint = `https://jsonplaceholder.typicode.com`;

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(this.endpoint + '/posts');
  }

  getPost(id) {
    // return this.http.get(this.endpoint + '/posts/' + id);
    return this.http.get(this.endpoint + `/posts/${id}`);
  }

  addNewPost(data) {
    return this.http.post(this.endpoint + '/posts', data);
  }
}
