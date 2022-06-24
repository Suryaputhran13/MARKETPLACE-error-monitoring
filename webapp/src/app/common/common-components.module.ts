import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemcardComponent } from './itemcard/itemcard.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CarouselComponent,
    ItemcardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    AvatarModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    CarouselComponent,
    ItemcardComponent
  ]
})
export class CommonComponentsModule { }
