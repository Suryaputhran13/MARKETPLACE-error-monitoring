import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-creation-component',
  templateUrl: './nft-creation-component.component.html',
  styleUrls: ['./nft-creation-component.component.scss']
})
export class NftCreationComponentComponent implements OnInit {

  selectedCollection: any;
  collectionList: any[] =[{
    id:1,
    name: "Collection 1"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
