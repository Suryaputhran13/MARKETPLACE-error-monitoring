import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITEM_CONFIG{
  isCollection:boolean;
  isShowCollectionButton:boolean;
}
@Component({
  selector: 'item-card',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent implements OnInit {

  @Input() itemData:any;
  @Input() itemConfig:ITEM_CONFIG = <ITEM_CONFIG>{};
  @Output() onItemClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  getImage(ImageData:any){
    let imageBase = 'https://ipfs.hivebp.io/ipfs/'
    return imageBase+ImageData.data.img
  }

  onProductClick(item:any){
    this.onItemClick.emit(item);
  }
}
