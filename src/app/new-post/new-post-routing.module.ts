import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';

export const newPostRoutes: Routes = [
    {
        path: 'new-post',
        canActivate: [],
        children: [
            { path: '', component: NewPostComponent },
            { path: ':mode', component: PostAddEditComponent },
            { path: ':mode/:id', component: PostAddEditComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(newPostRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class NewPostRoutingModule { }
