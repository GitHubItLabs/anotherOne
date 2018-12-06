import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.endpoint + '/users');
  }

  addNewUser(data) {
    return this.http.post(this.endpoint + '/users', data);
  }

  editUser(id) {
    return this.http.get(this.endpoint + `/users/${id}`);
  }

}
