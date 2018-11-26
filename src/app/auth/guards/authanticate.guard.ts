import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthanticateGuard implements CanActivate {
  isLogged: boolean;
  constructor(
    private router: Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.isLogged = JSON.parse(localStorage.getItem('isLogged'));

    if (!!this.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
