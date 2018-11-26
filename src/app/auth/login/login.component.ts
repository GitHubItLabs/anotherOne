import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  checkCred(form) {
    let user = form.username;
    let pass = form.password;
    if (user === 'admin' && pass === 'admin') {
      this.router.navigate(['/home']);
      localStorage.setItem('isLogged', 'true');
    } else {
      console.log('error');
      this.toastr.error(`Invalid email or passsword.`);
    }
  }
  onLogin() {
    let form = this.loginForm.value
    this.checkCred(form);
  }
}
