import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
    {
        path: 'posts',
        canActivate: [],
        children: [
            { path: '', component: PostsComponent },
            { path: ':mode', component: PostsEditComponent },
            { path: ':mode/:id', component: PostsEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PostsRoutingModule {
}