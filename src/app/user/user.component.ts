import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

}
