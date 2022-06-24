import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  productDetails: any = {};
  selectedTab: number = 1;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("selectedData")) {
      let selectedData: any = localStorage.getItem("selectedData")
      this.productDetails = JSON.parse(selectedData)
    } else {
      this.router.navigate(["/dashboard"]);
    }
  }

}
