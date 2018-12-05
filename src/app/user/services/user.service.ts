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
}
