import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';


const DECLARATIONS = [
    
];

const SERVICES = [

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
