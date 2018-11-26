import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subscription: Subscription;
  sideNavToggle: any;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.subscription = this.sharedService.getSideNav().subscribe(res => {
      debugger;
      this.sideNavToggle = res;
    })
  }

}
