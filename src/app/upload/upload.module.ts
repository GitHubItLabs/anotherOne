import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


const DECLARATIONS = [
    UploadComponent
];

const SERVICES = [

];

const MODULES = [
    SharedModule,
    HttpClientModule
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
export class UploadModule { }
