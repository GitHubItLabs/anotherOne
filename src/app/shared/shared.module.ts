import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedService } from './services/shared.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const DECLARATIONS = [
    
];

const SERVICES = [
    SharedService
];

const MODULES = [
    LayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
export class SharedModule { }
