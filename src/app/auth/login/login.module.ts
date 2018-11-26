import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const DECLARATIONS = [
    LoginComponent
]

const SERVICES = [
];

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
]


@NgModule({
    imports: [
        ...MODULES
    ],
    exports: [
        ...DECLARATIONS,
        ...MODULES
    ],
    declarations: [
        ...DECLARATIONS,
    ],
    providers: [
        ...SERVICES
    ],
})
export class LoginModule { }