import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  id: string;
  addPostForm: FormGroup;
  post: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let state = this.activatedRoute.snapshot.params.mode;
    state == 'edit' ? this.edit = true : this.edit = false;
    this.buildForm();

    if (this.edit) {
      this.getOnePost();
    }
  }

  getOnePost() {
    this.postService.getPost(this.id).subscribe(res => {
      this.post = res;
      this.buildForm(this.post);
    })
  }

  buildForm(form?) {
    this.addPostForm = this.formBuilder.group({
      userId: [!!form ? form.userId : '', [Validators.required]],
      title: [!!form ? form.title : '', [Validators.required]],
      body: [!!form ? form.body : '', [Validators.required]]
    })

    this.loading = false;
  }

  submit() {
    let form = this.addPostForm.value;
    this.postService.addNewPost(form).subscribe(_ => {
      this.toastr.success(`New post added.`);
    }, err => {
      this.toastr.error(err);
    })
  }

}
