import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonComponentsModule } from 'src/app/common/common-components.module';

import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonComponentsModule,
    CarouselModule,
    GalleriaModule,
    ImageModule,
    ButtonModule
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule { }
