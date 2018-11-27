import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostService } from './services/post.service';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';

const DECLARATIONS = [
    PostsComponent,
    PostsEditComponent
];

const SERVICES = [
    PostService
];

const MODULES = [
    SharedModule,
    CommonModule,
    PostsRoutingModule
]


@NgModule({
    declarations: [
        ...DECLARATIONS
    ],
    imports: [
        ...MODULES
    ],
    exports: [
        ...DECLARATIONS,
        ...MODULES
    ],
    providers: [
        ...SERVICES
    ]
})
export class PostModule { }
