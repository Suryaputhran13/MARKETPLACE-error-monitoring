import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCollectionRoutingModule } from './create-collection-routing.module';
import { CreationComponentComponent } from './creation-component/creation-component.component';
import { CommonComponentsModule } from 'src/app/common/common-components.module';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    CreationComponentComponent
  ],
  imports: [
    CommonModule,
    CreateCollectionRoutingModule,
    CommonComponentsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  bootstrap: [CreationComponentComponent]
})
export class CreateCollectionModule { }
