import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
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
