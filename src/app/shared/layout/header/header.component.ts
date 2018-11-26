import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  sideNavToggle: any;

    constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.subscription = this.sharedService.getSideNav().subscribe(res => {
      debugger;
      this.sideNavToggle = res;
      }
    )
  }

  logOut(){
    localStorage.removeItem('isLogged');
    this.router.navigate(['/login']);
  }

  toggleSidenav(){
    debugger;
    this.sideNavToggle = !this.sideNavToggle;
    this.sharedService.setSideNav(this.sideNavToggle);
  }

}
