import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewPostService } from '../service/new-post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit {
  addPostForm: FormGroup;
  edit: boolean;
  id: string;
  mode: string;
  post: any = {};

  constructor(
    private addNewPostBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private newPostService: NewPostService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.mode = this.activatedRoute.snapshot.params.mode;
    this.mode == 'edit' ? this.edit = true : this.edit = false;
    this.newPostFormBuilder();

    if (this.edit) {
      this.getOnePost();
    }

  }

  getOnePost() {
    this.newPostService.getOnePost(this.id).subscribe(res => {
      this.post = res;
      this.newPostFormBuilder(this.post);
    })
  }

  newPostFormBuilder(form?) {
    this.addPostForm = this.addNewPostBuilder.group({
      userId: [!!form ? form.userId : '', [Validators.required]],
      title: [!!form ? form.title : '', [Validators.required]],
      body: [!!form ? form.body : '', [Validators.required]]
    })
  }

  submit() {
    let form = this.addPostForm.value;
    if (this.mode == 'edit') {
      this.editForm(form);
    } else {
      this.addForm(form);
    }
  }

  editForm(form) {
    this.newPostService.editPost(form).subscribe(_ => {
      this.toastr.success(`New post added.`);
    }, err => {
      this.toastr.error(`Post was not added`);
    })
  }

  addForm(form) {
    this.newPostService.addPost(form).subscribe(_ => {
      this.toastr.success(`New post added.`);
    }, err => {
      this.toastr.error(err);
    })
  }

}
