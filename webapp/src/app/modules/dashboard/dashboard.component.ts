import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Bugsnag from '@bugsnag/js';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dummyimageUrl: string = 'https://picsum.photos/270/270'
  dummyCarouselData: any[] = [
    { src: "assets/Images/banner1.jpg" },
    { src: "assets/Images/banner2.jpg" },
    { src: "assets/Images/banner3.jpg" },
    { src: "assets/Images/banner4.jpg" }
  ]
  dummyArray: string[] = [
    "assets/Images/item5.png",
    "assets/Images/item1.jpg",
    "assets/Images/item2.png",
    "assets/Images/item3.jpg",
    "assets/Images/item4.jpg"
  ];

  collectionList:any[]=[];
  
  constructor(
    private router: Router,
    private service:DataService
    ) { }

  ngOnInit(): void {
    this.getCollections()
  }

  onProductClick(data: any) {
    let details = {
      itemName: 'Dummy value Name',
      price: 'ETH 3.33',
      image: data
    }
    localStorage.setItem("selectedData", JSON.stringify(details))
    this.router.navigate(["/details"]);
  }

  getCollections(){
    this.service.getCollections().subscribe( (value:any) =>{
      console.log(value)
      if(value.success){
        this.collectionList = value.data
      }
    } )
  }

  getImage(ImageData:any){

    let imageBase = 'https://ipfs.hivebp.io/ipfs/'
    
    return imageBase+ImageData.data.img
  }
}
