import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedService } from './services/shared.service';


const DECLARATIONS = [
    
];

const SERVICES = [
    SharedService
];

const MODULES = [
    LayoutModule
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
