import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { CommonComponentsModule } from 'src/app/common/common-components.module';

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    CommonComponentsModule,
    ButtonModule
  ],
  bootstrap: [
    DetailPageComponent
  ]
})
export class ProductDetailModule { }
