import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './shared/layout/secure/secure.component';
import { LoginComponent } from './auth/login/login.component';
import { PublicComponent } from './shared/layout/public/public.component';
import { AuthanticateGuard } from './auth/guards/authanticate.guard';
import { postsRoutes } from './posts/posts-routing.module';

export const PUBLIC_ROUTES: Routes= [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
]

export const SECURE_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  ...postsRoutes
];

const routes: Routes = [
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES},
  { path: '', component: SecureComponent, canActivate: [AuthanticateGuard], children: SECURE_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
