import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserService } from './services/user.service';

const DECLARATIONS = [
    UserComponent,
    UserEditComponent
];

const SERVICES = [
    UserService
];

const MODULES = [
    SharedModule
]


@NgModule({
    declarations: [
        ...DECLARATIONS,
        UserEditComponent
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
export class UserModule { }
