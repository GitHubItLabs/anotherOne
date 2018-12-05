import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(this.endpoint + '/posts');
  }

  // PUT	/posts/1
  getPost(id) {
    // return this.http.get(this.endpoint + '/posts/' + id);
    return this.http.get(this.endpoint + `/posts/${id}`);
  }

  addNewPost(data) {
    return this.http.post(this.endpoint + '/posts', data);
  }

  // DELETE	/posts/1
  deletePost(id){
    return this.http.delete(this.endpoint + `/post/${id}`, {params: id});
    // return this.http.delete(this.endpoint + `/post/${id}`, { params: { id }});
  }
}
