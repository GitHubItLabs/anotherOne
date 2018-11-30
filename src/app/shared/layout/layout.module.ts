import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SecureComponent } from './secure/secure.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';

const DECLARATIONS = [
    HeaderComponent,
    HeadingComponent,
    SecureComponent,
    PageComponent,
    SidebarComponent,
    PublicComponent,
];

const SERVICES = [

];

const MODULES = [
    CommonModule,
    RouterModule,
    NgbModule,
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
export class LayoutModule { }
