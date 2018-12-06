import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  array: any = [];
  interest: string;
  item: string;
  id: string;
  state: string;
  editMode: boolean;
  index: any;
  addUserForm: FormGroup;
  user: any = {};

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    debugger;
    this.id = this.activatedRoute.snapshot.params.id;
    this.state = this.activatedRoute.snapshot.params.mode;
    this.state == 'edit' ? this.editMode = true : this.editMode = false;

    if (this.editMode) {
      this.editOneUser();
    }

    this.buildForm()
  }

  editOneUser() {
    debugger;
    this.userService.editUser(this.id).subscribe(res => {
      this.user = res;
      this.buildForm(this.user);
    })
  }

  addInterest() {
    this.index = this.array.indexOf(this.interest);

    if (this.index === -1) {
      this.array.push(this.interest);
      this.interest = '';
    }
  }

  buildForm(form?) {
    debugger;
    this.addUserForm = this.formBuilder.group({
      firstName: [!!form ? form.firstName : '', [Validators.required]],
      lastName: [!!form ? form.lastName : '', [Validators.required]],
      bio: [!!form ? form.bio : '', [Validators.required]]
    })
  }

  deleteInterest() {
    this.index = this.array.indexOf(this.item);
    this.array.splice(this.index, 1);
  }

  save() {
    let form = this.addUserForm.value;
    this.userService.addNewUser(form).subscribe(_ => {
      this.toastr.success(`User added`);
    }, err => {
      this.toastr.error(err.message)
    })
  }

}
