import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const userRoutes: Routes = [
    {
        path: 'users',
        canActivate: [],
        children: [
            { path: '', component: UserComponent },
            { path: ':mode', component: UserEditComponent },
            { path: ':mode/:id', component: UserEditComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class UserRoutingModule { }