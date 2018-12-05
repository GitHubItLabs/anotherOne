import { NgModule } from '@angular/core';
import { NewPostComponent } from './new-post.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { NewPostService } from './service/new-post.service';
import { SharedModule } from '../shared/shared.module';
import { NewPostRoutingModule } from './new-post-routing.module';
import { ModalModule } from '../modal/modal.module';


const DECLARATIONS = [
    NewPostComponent,
    PostAddEditComponent
];

const SERVICES = [
    NewPostService
];

const MODULES = [
    SharedModule,
    NewPostRoutingModule,
    ModalModule
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
export class NewPostModule { }
