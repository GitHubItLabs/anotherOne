import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  subscription: Subscription;
  sideNavToggle: any;

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.subscription = this.sharedService.getSideNav().subscribe(res => {
      this.sideNavToggle = res;
    }
    )
  }

  toggleSidenav() {
    this.sideNavToggle = !this.sideNavToggle;
    this.sharedService.setSideNav(this.sideNavToggle);
  }

} 
