import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  sideNavOpen = new Subject<any>();

  constructor() { }

  setSideNav(value){
    this.sideNavOpen.next(value);
  } 

  getSideNav() {
    return this.sideNavOpen.asObservable()
  } 

}
