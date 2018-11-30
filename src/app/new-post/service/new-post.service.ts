import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {
  endpoint = `https://jsonplaceholder.typicode.com`;

  constructor(
    private http: HttpClient
  ) { }

  getNewPost() {
    return this.http.get(this.endpoint + '/posts');
  }

  getOnePost(id) {
    return this.http.get(this.endpoint + `/posts/${id}`);
  }

  addPost(data) {
    return this.http.post(this.endpoint + '/posts', data);
  }

 editPost(data) {
    return this.http.put(this.endpoint + '/posts', data);
  }

}
