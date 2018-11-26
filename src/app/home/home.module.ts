import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


const DECLARATIONS = [
    HomeComponent
];

const SERVICES = [
    
];

const MODULES = [
    SharedModule
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
export class HomeModule { }
